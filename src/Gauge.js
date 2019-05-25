import React from 'react';
import './Gauge.css';

function Gauge(props) {
    const rotate = {
        transform: `rotate(${props.rotate}deg)`,
    };

    const size = {
        width: `${props.size}px`,
        height: `${props.size}px`,
    }

    const insetStyle = {
        width: `${props.size * .9}px`,
        height: `${props.size * .9}px`,
        margin: `${(props.size - (props.size * .9)) / 2}px`,
    };

    return (
        <div className="gauge" style={size}>
            <div className="clip half">
                <div className="circle" style={{...rotate, ...size}}>
                </div>
            </div>
            <div className="clip full" style={{...rotate, ...size}}>
                <div className="circle" style={{...rotate, ...size}}>
                </div>
            </div>
            <div className="inset" style={insetStyle}>
            </div>
        </div>
    );
}

export default Gauge;
