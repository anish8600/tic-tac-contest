import React from 'react';
import PropTypes from 'prop-types';
import { TIC_TAC_CONSTANTS } from '../../helper/tictacHelper';
import './Steps.css';

const Steps = (props) => {
    const turns = props.chances.map((step, turn) => {
        const stepDesc = turn ? TIC_TAC_CONSTANTS.BACK_TO_STEP + turn : TIC_TAC_CONSTANTS.RESET_GAME;
        return (
            <li key={turn}>
                <button className="step" onClick={() => props.onClick(turn)}>{stepDesc}</button>
            </li>
        );
    });

    return turns;
}


Steps.propTypes = { chances: PropTypes.array.isRequired,  onClick: PropTypes.func.isRequired };

export default Steps;