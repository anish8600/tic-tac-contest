import React from 'react';
import { shallow, mount} from 'enzyme';
import Contest from './Contest';
import Base from '../Base/Base';
import Turn from '../Turn/Turn';
import Steps from '../Steps/Steps';

describe('Contest', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Contest />));

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
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

  it('should display correct messages in content section- Your turn, Winner', () => {
    const wrapper = mount(<Contest/>)
    const firstPlayer = wrapper.find('div.contest-section').children().first().text()
    expect(firstPlayer).toEqual('Your turn: X')

    const button = wrapper.find('button.tictac').first()
    button.simulate('click')
    const secondPlayer = wrapper.find('div.contest-section').children().first().text()
    expect(secondPlayer).toEqual('Your turn: O')

    const turn2 = wrapper.find('button.tictac').at(1)
    turn2.simulate('click')

    const turn3 = wrapper.find('button.tictac').at(4)
    turn3.simulate('click')

    const turn4 = wrapper.find('button.tictac').at(5)
    turn4.simulate('click')

    const turn5 = wrapper.find('button.tictac').at(8)
    turn5.simulate('click')

    const champion = wrapper.find('div.contest-section').children().first().text()
    expect(champion).toEqual('Congratulations X.You are a Winner!!!!!!!!')
  });
});