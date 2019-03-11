import React from 'react';
import { shallow, mount } from 'enzyme';
import Base from './Base';
import TicTac from '../TicTac/TicTac';

describe('Base', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Base baseArray={[]} onClick={jest.fn()} />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(4);
  });

  it('should render the TicTac Component', () => {
    expect(wrapper.containsMatchingElement(<TicTac />)).toEqual(true);
  });

  it('should call onClick event on click of a tictac', () =>{
    let tictacs = Array(9).fill(null);
    const onClick = jest.fn();
    let wrapper = mount(<Base baseArray={tictacs} onClick={onClick}/>);
    wrapper.find('button.tictac').first().simulate('click');
    expect(onClick).toBeCalledWith(0)
  })
});