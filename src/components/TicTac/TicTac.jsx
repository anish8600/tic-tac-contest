import React from 'react';
import PropTypes from 'prop-types';
import './TicTac.css';

const TicTac = (props) => <button className="tictac" onClick={props.onClick}> {props.value} </button>

TicTac.propTypes = { value: PropTypes.string, onClick: PropTypes.func};

export default TicTac;