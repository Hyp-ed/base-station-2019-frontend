import React from 'react';
import Bar from '../Bar/Bar';
import BatteryBars from '../BatteryBars/BatteryBars';

function HPBatteryBars(props) {
    // bar-container-item defined in BatteryBars.css
    const lowTemperature = (
        <div className="bar-container-item">
            <Bar
                name='LOW TEMP'
                unit='&deg;C'
                value={props.values.lowTemperature}
                min={props.ranges["LowTemperature"]["min"]}
                max={props.ranges["LowTemperature"]["max"]}
            />
        </div>
    );

    // bar-container-item defined in BatteryBars.css
    const highTemperature = (
        <div className="bar-container-item">
            <Bar
                name='HIGH TEMP'
                unit='&deg;C'
                value={props.values.highTemperature}
                min={props.ranges["HighTemperature"]["min"]}
                max={props.ranges["HighTemperature"]["max"]}
            />
        </div>
    );

    // bar-container-item defined in BatteryBars.css
    const lowVoltageCell = (
        <div className="bar-container-item">
            <Bar
                name='LOW CELL'
                unit='V'
                value={props.values.lowVoltageCell / 1000 /* convert from mV to V */ }
                min={props.ranges["LowVoltageCell"]["min"]}
                max={props.ranges["LowVoltageCell"]["max"]}
            />
        </div>
    );

    // bar-container-item defined in BatteryBars.css
    const highVoltageCell = (
        <div className="bar-container-item">
            <Bar
                name='HIGH CELL'
                unit='V'
                value={props.values.highVoltageCell / 1000 /* convert from mV to V */ }
                min={props.ranges["HighVoltageCell"]["min"]}
                max={props.ranges["HighVoltageCell"]["max"]}
            />
        </div>
    );

    return (
        <BatteryBars
            title={props.title}
            values={props.values}
            ranges={props.ranges}
            lowTemperature={lowTemperature}
            highTemperature={highTemperature}
            lowVoltageCell={lowVoltageCell}
            highVoltageCell={highVoltageCell}
        />
    );
}

HPBatteryBars.defaultProps = {
    values: {},
}

export default HPBatteryBars;
