import './ProgressBar.css';

import React from 'react';

function ProgressBar(props) {
    const indicatorStyle = {
        left: `${Math.min(100, Math.max(0, (props.podDistance / props.progressBarMax * 100)))}%` // min/max to clamp percentage num in [0, 100]`
    };

    return (
        <div className='progress-bar-root'>
            <div className='progress-bar-fill fill-1'></div>
            <div className='progress-bar-fill fill-2'></div>
            <div className='progress-bar-background'></div>
            <div className='progress-bar-indicator' style={indicatorStyle}>
                <div className='arrow-up'></div>
                <div className='progress-bar-value'>{props.podDistance.toFixed(1)}m</div>
            </div>
        </div>
    );
}

export default ProgressBar;
