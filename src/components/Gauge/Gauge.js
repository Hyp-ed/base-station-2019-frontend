import './Gauge.css';

import React from 'react';

function Gauge(props) {
    let rotateValue = props.value < props.min
                      ? 0
                      : (props.value - props.min) / (props.max - props.min) * 320  // (320 = 360 - how much danger zone clips)

    // in case props.value is way over max, make sure we don't over rotate gauge
    // 340 chosen arbitrarily to leave a bit of danger gauge part still visible
    if (rotateValue > 340) {
        rotateValue = 340;
    }

    let textClassName = '';
    let circleClassName = '';
    if (props.value < props.min || props.value > props.max) {
        textClassName = 'out-of-bounds';
        circleClassName = 'out-of-bounds';
    }

    const rotate = {
        transform: `rotate(${rotateValue / 2}deg)`,
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

    const gaugeValueStyle = {
        fontSize: `${props.size * .25}px`,
    }

    return (
        <div className="gauge-root">
            <h2 className="gauge-title">{props.title}</h2>
            <div className="gauge-background" style={size}>
                <div className="clip danger-zone" style={size}>
                    <div className="circle danger-zone" style={size}></div>
                </div>
                <div className="clip half">
                    <div className={`circle ${circleClassName}`} style={{...rotate, ...size}}></div>
                    <div className={`circle seam ${circleClassName}`}style={{transform: `rotate(${props.rotate}deg)`, ...size}}> {/* rotate twice as fast */} </div>
                </div>
                <div className="clip full" style={{...rotate, ...size}}>
                    <div className={`circle ${circleClassName}`}style={{...rotate, ...size}}></div>
                </div>
                <div className="inset" style={insetStyle}>
                    <p className={`gauge-text value ${textClassName}`} style={gaugeValueStyle}>
                        {props.value}
                    </p>
                    <p className={`gauge-text unit ${textClassName}`}>
                        {props.unit}
                    </p>
                </div>
            </div>
        </div>
    );
}

Gauge.defaultProps = {
    value: '-',
}

export default Gauge;
