import './Indicator.css'

import React from 'react';

function Indicator(props) {
    const backgroundClassName = props.operational ? 'operational' : 'not-operational'

    return (
        <div className='indicator-root'>
            <div className={`indicator-background ${backgroundClassName}`}></div>
            <h2 className="indicator-name">{props.name}</h2>
        </div>
    );
}

Indicator.defaultProps = {
    operational: true,  // TODO: Maybe change to some kinda non-initialized status?
}

export default Indicator;
