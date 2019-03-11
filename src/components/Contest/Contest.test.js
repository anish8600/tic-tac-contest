import React from 'react';
import { shallow } from 'enzyme';
import Contest from './Contest';
import Base from '../Base/Base';

describe('Contest', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Contest />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should render the Display Component', () => {
    expect(wrapper.containsMatchingElement(<Base />)).toEqual(true);
  });
});