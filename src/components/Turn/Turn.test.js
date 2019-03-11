import React from 'react';
import { shallow } from 'enzyme';
import Turn from './Turn';

describe('Turn', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Turn champion={'X'} turn={'X'} steps={3}/>));

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });

  it('should display correct message for winner>', () => {
    expect(wrapper.find('h2').text()).toEqual('Congratulations X.You are a Winner!!!!!!!!');
  });

  it('should display correct message for winner>', () => {
    wrapper.setProps({ champion:null })
    expect(wrapper.find('h2').text()).toEqual('Your turn: X');
  });

  it('should display correct message for tie scenario>', () => {
    wrapper.setProps({ champion:null, steps:10 })
    expect(wrapper.find('h2').text()).toEqual('There is tie. Click \'Reset Game\' to play again.');
  });
});