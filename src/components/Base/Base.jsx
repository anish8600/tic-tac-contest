import React from 'react';
import PropTypes from 'prop-types';
import TicTac from '../TicTac/TicTac';

const Base = (props) =>{
    return (
      <div className="base-container">
        <TicTac/>
      </div>
    );
};

Base.propTypes = { baseArray: PropTypes.array.isRequired, onClick: PropTypes.func.isRequired};

export default Base;