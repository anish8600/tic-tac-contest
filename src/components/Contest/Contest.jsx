import React from 'react';
import Base from '../Base/Base';
import Turn from '../Turn/Turn';
import Steps from '../Steps/Steps';
import { TIC_TAC_SOLUTION, TIC_TAC_CONSTANTS } from '../../helper/tictacHelper';
import './Contest.css';

function getSolution(baseArray){
  const answers = TIC_TAC_SOLUTION;
  for(let i=0; i<answers.length; i++){
    const [a,b,c] = answers[i];
    if(baseArray[a] && baseArray[a] === baseArray[b] && baseArray[a] === baseArray[c]){
      return baseArray[a];
    }
  }
  return null;
}

class Contest extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chances: [{ baseArray: Array(9).fill(null) }],
      steps: 0,
      nextX: true
    };
  }

  updateState = (e) => {
    const eventValue = e.target.value;
    const chances = this.state.chances.slice(0, this.state.steps + 1);
    const live = chances[chances.length - 1];
    const baseArray = live.baseArray.slice();
    if (getSolution(baseArray) || baseArray[eventValue]) {
      return;
    }
    baseArray[i] = this.state.nextX ? TIC_TAC_CONSTANTS.X_SYMBOL : TIC_TAC_CONSTANTS.O_SYMBOL;
    this.setState({
      chances: chances.concat([{baseArray: baseArray}]),
      steps: chances.length,
      nextX: !this.state.nextX
    });
  }

  revertState = (e) => {
    const step = e.target.value;
    this.setState({
      steps: step,
      nextX: (step % 2) === 0
    });
  }

  render = () => {
    const chances = this.state.chances;
    const live = chances[this.state.steps];
    const champion = getSolution(live.baseArray);
    
    return (
      <div className="contest-container">
        <div className="contest-base">
          <h1> {TIC_TAC_CONSTANTS.TIC_TAC_HEADING} </h1>
          <Base baseArray={live.baseArray} onClick={this.updateState} />
        </div>
        <div className="contest-section">
          <Turn champion={champion} turn={this.state.nextX} steps={this.state.steps}/>
          <ul>
            <Steps chances={chances} onClick={this.revertState}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contest;