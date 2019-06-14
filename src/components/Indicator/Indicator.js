import './Indicator.css'

import React from 'react';

function Indicator(props) {
    if (props.enabled == true) {
        return (
            <div className='indicator-root'>
                <div>
                    <div className="indicator background"></div>
                    <div className="indicator fill"></div>
                </div>
                <h2 className="indicator-name">&nbsp;{props.name}</h2>
            </div>
        ); }
    else {
        return (
            <div className='indicator-root'>
                <div>
                    <div className="indicator background"></div>
                </div>
                <h2 className="indicator-name">&nbsp;{props.name}</h2>
            </div>
        ); 
    }
}

Indicator.defaultProps = {
    enabled: false,
}

export default Indicator;