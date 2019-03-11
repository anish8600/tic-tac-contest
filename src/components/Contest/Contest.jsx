import React from 'react';
import Base from '../Base/Base';
import Turn from '../Turn/Turn';
import Steps from '../Steps/Steps';
import { TIC_TAC_SOLUTION, TIC_TAC_CONSTANTS } from '../../helper/tictacHelper';
import './Contest.css';

function getSolution() {
    console.log('get solution');
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

  updateState = () => {
    console.log('updateState operation');
  }

  revertState = () => {
    console.log('revertState operation');
  }

  render = () => {
    return (
      <div className="contest-container">
        <div className="contest-base">
          <h1> {TIC_TAC_CONSTANTS.TIC_TAC_HEADING} </h1>
          <Base baseArray={this.state.chances} onClick={this.updateState} />
        </div>
        <div className="contest-section">
          <Turn champion={'X'} turn={this.state.nextX} steps={this.state.steps}/>
          <ul>
            <Steps chances={this.state.chances} onClick={this.revertState}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contest;