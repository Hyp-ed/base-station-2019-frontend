import './BatteryBars.css';

import React from 'react';
import Bar from '../Bar/Bar';

function BatteryBars(props) {
    return (
        <div className="bar-container-root">
            <h1 className="bar-container-title title">{props.title}</h1>
            <div className="bar-container">
                <div className="bar-container-item">
                    <Bar
                        name='CHARGE'
                        unit='%'
                        value={props.values.charge}
                        min={props.ranges["Charge"]["min"]}
                        max={props.ranges["Charge"]["max"]}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='VOLTAGE'
                        unit='V'
                        value={props.values.voltage}
                        min={props.ranges["Voltage"]["min"]}
                        max={props.ranges["Voltage"]["max"]}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='TEMPERATURE'
                        unit='&deg;C'
                        value={props.values.temperature}
                        min={props.ranges["Temperature"]["min"]}
                        max={props.ranges["Temperature"]["max"]}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='CURRENT'
                        unit='A'
                        value={props.values.current}
                        min={props.ranges["Current"]["min"]}
                        max={props.ranges["Current"]["max"]}
                    />
                </div>
            </div>
        </div>
    );
}

BatteryBars.defaultProps = {
    values: {},
}

export default BatteryBars;
