import React from 'react';
import { shallow } from 'enzyme';
import TicTac from './TicTac';

describe('TicTac', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<TicTac value={'X'} onClick={jest.fn()} />));

  it('should render a <div />', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

  it('should render square with X in it', () => {
    expect(wrapper.find('button').text()).toEqual(' X ');
  });
});