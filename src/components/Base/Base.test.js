import React from 'react';
import { shallow } from 'enzyme';
import Base from './Base';
import TicTac from '../TicTac/TicTac';

describe('Contest', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Base baseArray={[]} onClick={()=>{}} />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the TicTac Component', () => {
    expect(wrapper.containsMatchingElement(<TicTac />)).toEqual(true);
  });

});