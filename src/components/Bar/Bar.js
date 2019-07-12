import './Bar.css';

import React from 'react';

function Bar(props) {
    const barStyle = {
        width: `${Math.min(100, Math.max(0, (props.value - props.min) / (props.max - props.min) * 100))}%` // min/max to clamp percentage num in [0, 100]`
    }

    const barColor = 
        props.value > props.min 
        ? "#ffffff"
        : "#a31606";

    const indicatorStyle = {
        backgroundColor: `${barColor}`,
        width: `${Math.min(100,Math.max(0,
            props.value/props.max*100
        ))}%` // min/max to clamp percentage num in [0, 100]`
    };

    const bufferStyle = {
        width: `${(props.min/props.max)*100}%`
    }
    
    return (
        <div className="bar-root">
            <h2 className="bar-name">{props.name}</h2>
            <div>
                <div className="bar background">
                    <div className="bar fill" style={barStyle}></div>
                    <div className="bar buffer" style={bufferStyle}></div>
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
