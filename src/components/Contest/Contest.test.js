import React from 'react';
import { shallow } from 'enzyme';
import Contest from './Contest/Contest';

describe('Contest', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Contest />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});