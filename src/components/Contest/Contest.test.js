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

  it('should render the Base Component', () => {
    expect(wrapper.containsMatchingElement(<Base baseArray={wrapper.instance().state.chances} onClick={wrapper.instance().updateState}/>)).toEqual(true);
  });
});