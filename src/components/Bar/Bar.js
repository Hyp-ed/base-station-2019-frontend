import './Bar.css';

import React from 'react';

function Bar(props) {
    const indicatorStyle = {
        width: `${Math.min(100,Math.max(0,
            (props.value - props.min)/(props.max - props.min)*100
        ))}%` // min/max to clamp percentage num in [0, 100]`
    };

    return (
        <div className="bar-root">
            <h2 className="bar-name">{props.name}</h2>
            <div>
                <div className="bar background">
                    <div className="bar fill" style={indicatorStyle}></div>
                </div>
            </div>
            <div className="bar value">
                <h2 className="bar-value-text">{props.value}</h2>
                <div className="bar-value-unit">
                    <h2 className="bar-value-text">&nbsp;{props.unit}</h2>
                </div>
            </div>
        </div>
    );
}

Bar.defaultProps = {
    value: 0,
}

export default Bar;
