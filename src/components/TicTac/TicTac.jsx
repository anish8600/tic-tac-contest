import React from 'react';
import PropTypes from 'prop-types';

const TicTac = (props) => <button className="tictac" />;

TicTac.propTypes = { value: PropTypes.string.isRequired, onClick: PropTypes.func.isRequired};

export default TicTac;