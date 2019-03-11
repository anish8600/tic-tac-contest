import React from 'react';
import { shallow } from 'enzyme';
import Contest from './Contest';
import Base from '../Base/Base';
import Turn from '../Turn/Turn';

describe('Contest', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Contest />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('should render the Base Component', () => {
    expect(wrapper.containsMatchingElement(<Base baseArray={wrapper.instance().state.chances} onClick={wrapper.instance().updateState}/>)).toEqual(true);
  });

  it('should render the Turn Component', () => {
    expect(wrapper.containsMatchingElement(<Turn champion={'X'} turn={wrapper.instance().state.nextX} steps={wrapper.instance().state.steps} />)).toEqual(true);
  });
});