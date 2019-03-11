import React from 'react';
import Base from '../Base/Base';
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
      <div className="contest-base">
        <div className="contest-base">
          <h1> TIC TOE GAME </h1>
          <Base />
        </div>
      </div>
    );
  }
}

export default Contest;