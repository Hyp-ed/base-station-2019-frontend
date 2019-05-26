import './GaugeContainer.css';

import React from 'react';
import Gauge from './Gauge/Gauge'

function GaugeContainer(props) {
    const gauges = Array.from(props.gauges, gauge => <div className="gauge-container-flex-item">
                                                        <Gauge
                                                            rotate={gauge.rotate}
                                                            size={gauge.size}
                                                            title={gauge.gaugeTitle}
                                                        />
                                                    </div>
                            );

    return (
        <div className="gauge-container">
            <p className="gauge-container-title">{props.title}</p>
            <div className="gauge-container-flex">
                {gauges}
            </div>
        </div>
    );
}

export default GaugeContainer;
