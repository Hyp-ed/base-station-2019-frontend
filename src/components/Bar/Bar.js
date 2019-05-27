import './Bar.css';

import React from 'react';

function Bar(props) {
    return (
        <div className="bar-root">
            <div className="bar-name">
                <p>CURRENT</p>
            </div>
            <div>
                <div className="bar background"></div>
                <div className="bar fill"></div>
            </div>
            <div className="bar-value">
                <p>56 V</p>
            </div>
        </div>
    );
}

export default Bar;
