import './Bar.css';

import React from 'react';

function Bar(props) {
    return (
        <div className="bar-root">
            <h2 className="bar-name">{props.name}</h2>
            <div>
                <div className="bar background"></div>
                <div className="bar fill"></div>
            </div>
            <h2 className="bar-value">56 {props.unit}</h2>
        </div>
    );
}

export default Bar;
