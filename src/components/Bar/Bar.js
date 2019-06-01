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
            <h2 className="bar-value">{props.value} {props.unit}</h2>
        </div>
    );
}

Bar.defaultProps = {
    value: 0,
}

export default Bar;
