import React from 'react';
import Base from '../Base/Base';
import Turn from '../Turn/Turn';
import './Contest.css';

function getSolution() {
    console.log('get solution');
}

class Contest extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chances: [],
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
          <h1> TIC TOE GAME </h1>
          <Base baseArray={this.state.chances} onClick={this.updateState} />
        </div>
        <div className="contest-section">
          <Turn champion={'X'} turn={this.state.nextX} steps={this.state.steps}/>
        </div>
      </div>
    );
  }
}

export default Contest;