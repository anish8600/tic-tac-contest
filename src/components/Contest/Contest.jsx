import React from 'react';
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
      <div className="contest-base" />
    );
  }
}

export default Contest;