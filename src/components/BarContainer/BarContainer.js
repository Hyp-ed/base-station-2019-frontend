import './BarContainer.css';

import React from 'react';
import Bar from '../Bar/Bar';

function BarContainer(props) {
    return (
        <div className="bar-container-root">
            <h1 className="bar-container-title">{props.title}</h1>
            <div className="bar-container">
                <div className="bar-container-item">
                    <Bar
                        name='CHARGE'
                        unit='%'
                        value={props.values.charge}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='VOLTAGE'
                        unit='V'
                        value={props.values.voltage}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='TEMPERATURE'
                        unit='&deg;'
                        value={props.values.temperature}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='CURRENT'
                        unit='A'
                        value={props.values.current}
                    />
                </div>
            </div>
        </div>
    );
}

BarContainer.defaultProps = {
    values: {},
}

export default BarContainer;
