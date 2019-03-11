import React from 'react';
import { shallow } from 'enzyme';
import TicTac from './TicTac';

describe('TicTac', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TicTac value={''} onClick={()=>{}} />));

  it('should render a <div />', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});