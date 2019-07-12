import './BatteryBars.css';

import React from 'react';
import Bar from '../Bar/Bar';

function BatteryBars(props) {
    return (
        <div className="bar-container-root">
            <h1 className="bar-container-title">{props.title}</h1>
            <div className="bar-container">
                <div className="bar-container-item">
                    <Bar
                        name='CHARGE'
                        unit='%'
                        value={props.values.charge}
                        max={props.ranges[0]["Charge"][1]}
                        min={props.ranges[0]["Charge"][0]}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='VOLTAGE'
                        unit='V'
                        value={props.values.voltage}
                        max={props.ranges[1]["Voltage"][1]}
                        min={props.ranges[1]["Voltage"][0]}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='TEMPERATURE'
                        unit='&deg;'
                        value={props.values.temperature}
                        max={props.ranges[2]["Temperature"][1]}
                        min={props.ranges[2]["Temperature"][0]}
                    />
                </div>
                <div className="bar-container-item">
                    <Bar
                        name='CURRENT'
                        unit='A'
                        value={props.values.current}
                        max={props.ranges[3]["Current"][1]}
                        min={props.ranges[3]["Current"][0]}
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
