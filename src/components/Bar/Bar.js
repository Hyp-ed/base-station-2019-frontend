import './Bar.css';

import React from 'react';

function Bar(props) {
    let cleanedValue = '-';
    if (!isNaN(props.value)) {
        cleanedValue = Math.round(props.value * 10) / 10;
    }

    const barStyle = {
        width: `${Math.min(100, Math.max(0, (cleanedValue - props.min) / (props.max - props.min) * 100))}%` // min/max to clamp percentage num in [0, 100]`
    }

    let barClassName = '';
    if (cleanedValue < props.min || cleanedValue > props.max) {
        barClassName = 'out-of-bounds';
    }

    return (
        <div className="bar-root">
            <h2 className={`bar-name subtitle ${barClassName}`}>{props.name}</h2>
            <div className="bar container">
                <div className="bar background"></div>
                <div className={`bar fill ${barClassName}`} style={barStyle}></div>
            </div>
            <div className="bar value">
                <h2 className={`bar-value-text subtitle ${barClassName}`}>{cleanedValue}</h2>
                <div className="bar-value-unit">
                    <h2 className={`bar-value-text subtitle ${barClassName}`}>&nbsp;{props.unit}</h2>
                </div>
            </div>
        </div>
    );
}

export default Bar;
