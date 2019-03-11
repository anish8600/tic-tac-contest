import React from 'react';
import { shallow } from 'enzyme';
import Turn from './Turn';

describe('Turn', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Turn champion={'X'} turn={'X'} steps={3}/>));

  it('should render a <h2 />', () => {
    expect(wrapper.find('h2').length).toEqual(1);
  });
});