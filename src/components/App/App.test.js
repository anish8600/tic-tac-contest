import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Contest from '../Contest/Contest';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Contest Component', () => {
    expect(wrapper.containsMatchingElement(<Contest />)).toEqual(true);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
});