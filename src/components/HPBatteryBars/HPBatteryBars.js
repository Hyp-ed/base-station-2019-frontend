import React from 'react';
import Bar from '../Bar/Bar';
import BatteryBars from '../BatteryBars/BatteryBars';

function HPBatteryBars(props) {
    // bar-container-item defined in BatteryBars.css
    const lowVoltageCell = (
        <div className="bar-container-item">
            <Bar
                name='LOW CELL'
                unit='V'
                value={props.values.lowVoltageCell}
                min={props.ranges["LowFringeCell"]["min"]}
                max={props.ranges["LowFringeCell"]["max"]}
            />
        </div>
    );

    // bar-container-item defined in BatteryBars.css
    const highVoltageCell = (
        <div className="bar-container-item">
            <Bar
                name='HIGH CELL'
                unit='V'
                value={props.values.highVoltageCell}
                min={props.ranges["HighFringeCell"]["min"]}
                max={props.ranges["HighFringeCell"]["max"]}
            />
        </div>
    );

    return (
        <BatteryBars
            title={props.title}
            values={props.values}
            ranges={props.ranges}
            lowVoltageCell={lowVoltageCell}
            highVoltageCell={highVoltageCell}
        />
    );
}

HPBatteryBars.defaultProps = {
    values: {},
}

export default HPBatteryBars;
