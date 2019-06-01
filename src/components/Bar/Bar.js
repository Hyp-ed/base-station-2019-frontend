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
