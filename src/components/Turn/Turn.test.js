import React from 'react';
import { shallow } from 'enzyme';
import Turn from './Turn';

describe('Turn', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Turn />));

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });
});