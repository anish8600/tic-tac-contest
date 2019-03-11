import React from 'react';
import { TIC_TAC_CONSTANTS, MAX_ATTEMPTS } from '../../helper/tictacHelper';
import PropTypes from 'prop-types';

const Turn = (props) => {
    let turnIndicator;
    if (props.champion) {
      turnIndicator = TIC_TAC_CONSTANTS.WINNER_MSG_1 + props.champion + TIC_TAC_CONSTANTS.WINNER_MSG_2;
    } else if(props.steps < MAX_ATTEMPTS){
      turnIndicator = TIC_TAC_CONSTANTS.TURN_MSG + (props.turn ? TIC_TAC_CONSTANTS.X_SYMBOL : TIC_TAC_CONSTANTS.O_SYMBOL);
    } else{
      turnIndicator = TIC_TAC_CONSTANTS.TIE_MSG;
    }
    return <h2>{turnIndicator}</h2>;
}

Turn.propTypes = { champion: PropTypes.string.isRequired, 
                   turn: PropTypes.string.isRequired,
                   steps: PropTypes.number.isRequired
                 };

export default Turn;