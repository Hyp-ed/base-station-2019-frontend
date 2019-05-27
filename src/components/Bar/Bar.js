import './Bar.css';

import React from 'react';

function Bar(props) {
    return (
        <div className="bar-root">
            <p className="bar-name">CURRENT</p>
            <div>
                <div className="bar background"></div>
                <div className="bar fill"></div>
            </div>
            <p className="bar-value">56 V</p>
        </div>
    );
}

export default Bar;
