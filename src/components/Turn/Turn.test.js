import React from 'react';
import { shallow } from 'enzyme';
import Turn from './Turn';

describe('Turn', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Turn />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});