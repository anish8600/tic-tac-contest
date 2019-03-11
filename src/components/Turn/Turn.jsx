import React from 'react';
import PropTypes from 'prop-types';

const Turn = (props) => <h2>Message</h2>

Turn.propTypes = { champion: PropTypes.string.isRequired, 
                   turn: PropTypes.string.isRequired,
                   steps: PropTypes.number.isRequired
                 };

export default Turn;