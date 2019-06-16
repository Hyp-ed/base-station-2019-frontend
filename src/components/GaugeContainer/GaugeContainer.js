import './GaugeContainer.css';

import React from 'react';
import Gauge from '../Gauge/Gauge';

function GaugeContainer(props) {
    const gauges = Array.from(props.gauges, gauge =>
                                <div key={gauge.key} className="gauge-container-flex-item">
                                    <Gauge
                                        rotate={gauge.rotate}
                                        size={gauge.size}
                                        title={gauge.gaugeTitle}
                                        unit={gauge.unit}
                                    />
                                </div>
                             );

    return (
        <div className="gauge-container">
            <h1 className="gauge-container-title">{props.title}</h1>
            <div className="gauge-container-flex">
                {gauges}
            </div>
        </div>
    );
}

export default GaugeContainer;
