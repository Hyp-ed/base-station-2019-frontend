import React from 'react';
import Button from '../Button/Button';

function BrakeButton(props) {
    let label = 'ERR';
    let brakeCommand = '';

    if (props.brakes.every(brake => brake) && props.brakes.length !== 0) {
        label = 'ENGAGE';
        brakeCommand = 'NOMINAL_BRAKING';
    }
    else if (props.brakes.every(brake => !brake)) {
        label = 'RETRACT';
        brakeCommand = 'NOMINAL_RETRACT';
    }

    return (
        <Button
            name={label}
            disabled={props.disabled}
            handleClick={() => props.clickHandler({command: brakeCommand})}
        />
    );
}

export default BrakeButton;
