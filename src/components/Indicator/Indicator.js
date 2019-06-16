import './Indicator.css'

import React from 'react';

function Indicator(props) {
    return (
        <div className='indicator-root'>
            <div className="indicator-background"></div>
            <h2 className="indicator-name">{props.name}</h2>
        </div>
    );
}

Indicator.defaultProps = {
    enabled: false,  // TODO: Maybe change to some kinda non-initialized status?
}

export default Indicator;
