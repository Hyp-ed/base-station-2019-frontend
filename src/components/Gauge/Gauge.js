import './Gauge.css';

import React from 'react';

function Gauge(props) {
    const rotate = {
        transform: `rotate(${props.rotate / 2}deg)`,
    };

    const size = {
        width: `${props.size}px`,
        height: `${props.size}px`,
    }

    const insetStyle = {
        width: `${props.size * .75}px`,
        height: `${props.size * .75}px`,
        margin: `${(props.size - (props.size * .75)) / 2}px`,
    };

    var gaugeClassName = "gauge-value";
    if (props.large) {
        gaugeClassName = "gauge-value-large";
    }
    

    return (
        <div className="gauge-root">
            <h2 className="gauge-title">{props.title}</h2>
            <div className="gauge-background" style={size}>
                <div className="clip danger-zone" style={size}>
                    <div className="circle danger-zone" style={size}></div>
                </div>
                <div className="clip half">
                    <div className="circle" style={{...rotate, ...size}}></div>
                    <div className="circle seam" style={{transform: `rotate(${props.rotate}deg)`, ...size}}> {/* rotate twice as fast */} </div>
                </div>
                <div className="clip full" style={{...rotate, ...size}}>
                    <div className="circle" style={{...rotate, ...size}}></div>
                </div>
                <div className="inset" style={insetStyle}>
                <div className={gaugeClassName}>
                    {props.value}
                </div>
                <div className="gauge-unit">
                    {props.unit}
                </div>
                </div>
               
            </div>
        </div>
    );
}

Gauge.defaultProps = {
    value: 0,
    large: false,
}

export default Gauge;
