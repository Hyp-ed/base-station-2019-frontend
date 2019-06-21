import './ProgressBar.css';

import React from 'react';

function ProgressBar(props) {
    const fillStyle = {
        left: `${Math.min(100, Math.max(0, (props.podDistance / props.progressBarMax * 100)))}%` // min/max to clamp percentage num in [0, 100]`
    };

    return (
        <div className='progress-bar-root'>
            <div className='progress-bar-background'></div>
            <div className='progress-bar-fill' style={fillStyle}></div>
        </div>
    );
}

export default ProgressBar;
