import './Indicator.css'

import React from 'react';

function Indicator(props) {
    let backgroundClassName = '';
    if (typeof props.operational !== 'undefined') {
        backgroundClassName = props.operational ? 'operational' : 'not-operational';
    }

    return (
        <div className='indicator-root'>
            <div className={`indicator-background ${backgroundClassName}`}></div>
            <h2 className="indicator-name">{props.name}</h2>
        </div>
    );
}

export default Indicator;
