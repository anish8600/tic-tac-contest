import React from 'react';
import { shallow } from 'enzyme';
import Contest from './Contest';
import Base from '../Base/Base';
import Turn from '../Turn/Turn';
import Steps from '../Steps/Steps';

describe('Contest', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Contest />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  xit('should render the Base Component', () => {
    expect(wrapper.containsMatchingElement(<Base baseArray={wrapper.instance().state.chances} onClick={wrapper.instance().updateState}/>)).toEqual(true);
  });

  xit('should render the Turn Component', () => {
    expect(wrapper.containsMatchingElement(<Turn champion={'X'} turn={wrapper.instance().state.nextX} steps={wrapper.instance().state.steps} />)).toEqual(true);
  });

  xit('should render the Steps Component', () => {
    expect(wrapper.containsMatchingElement(<Steps chances={wrapper.instance().state.chances} onClick={wrapper.instance().revertState}/>)).toEqual(true);
  });

  it('should have initial state', () => {
    expect(wrapper.instance().state.chances).toEqual([ {baseArray:Array(9).fill(null)}]);
    expect(wrapper.instance().state.steps).toEqual(0);
    expect(wrapper.instance().state.nextX).toEqual(true);
  });
});