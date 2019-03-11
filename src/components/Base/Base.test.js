import React from 'react';
import { shallow } from 'enzyme';
import Base from './Base';

describe('Contest', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Base baseArray={[]} onClick={()=>{}} />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});