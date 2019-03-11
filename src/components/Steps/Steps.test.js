import React from 'react';
import { shallow } from 'enzyme';
import Steps from './Steps';

describe('Steps', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Steps chances={[jest.fn()]} onClick={jest.fn()} />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
  it('should render a <li />', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});