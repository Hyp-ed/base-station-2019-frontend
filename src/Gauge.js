import React from 'react';
import './Gauge.css';

function Gauge(props) {
    const rotate = {
        transform: `rotate(${props.rotate / 2}deg)`,
    };

    const size = {
        width: `${props.size}px`,
        height: `${props.size}px`,
    }

    const insetStyle = {
        width: `${props.size * .8}px`,
        height: `${props.size * .8}px`,
        margin: `${(props.size - (props.size * .8)) / 2}px`,
    };

    return (
        <div className="gauge-root">
            <p className="gauge-title">{props.title}</p>
            <div className="gauge" style={size}>
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
                <div className="inset" style={insetStyle}></div>
            </div>
        </div>
    );
}

export default Gauge;
