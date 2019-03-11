import React from 'react';
import { shallow } from 'enzyme';
import Base from './Base';
import TicTac from '../TicTac/TicTac';

describe('Base', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Base baseArray={[]} onClick={jest.fn()} />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  xit('should render the TicTac Component', () => {
    expect(wrapper.containsMatchingElement(<TicTac value={''} onClick={()=>{}}/>)).toEqual(true);
  });

});