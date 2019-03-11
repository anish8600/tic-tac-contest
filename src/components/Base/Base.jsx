import React from 'react';
import PropTypes from 'prop-types';

const Base = (props) => <div className="base-container" />;

Base.propTypes = { baseArray: PropTypes.array.isRequired, onClick: PropTypes.func.isRequired};

export default Base;