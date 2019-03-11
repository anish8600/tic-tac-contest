import React from 'react';
import PropTypes from 'prop-types';
import TicTac from '../TicTac/TicTac';

class Base extends React.Component{
  formMatrix(i){
    return (
      <TicTac value={this.props.baseArray[i]} onClick={() => this.props.onClick(i)}/>
    );
  }
  
  render() {
      return (
        <div>
          <div className="base">
            {this.formMatrix(0)}
            {this.formMatrix(1)}
            {this.formMatrix(2)}
          </div>
          <div className="base">
            {this.formMatrix(3)}
            {this.formMatrix(4)}
            {this.formMatrix(5)}
          </div>
          <div className="base">
            {this.formMatrix(6)}
            {this.formMatrix(7)}
            {this.formMatrix(8)}
          </div>
        </div>
      );
    }
}

Base.propTypes = { baseArray: PropTypes.array.isRequired, onClick: PropTypes.func.isRequired};

export default Base;