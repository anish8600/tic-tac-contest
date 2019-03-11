import React from 'react';
import { shallow } from 'enzyme';
import Steps from './Steps';

describe('Steps', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Steps />));

  it('should render a <li />', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });
});