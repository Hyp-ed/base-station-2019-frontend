import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import GaugeContainer from './components/GaugeContainer/GaugeContainer';
import BarContainer from './components/BarContainer/BarContainer';

function App(props) {
    return (
        <div className="wrapper">
            <Header /> 
            <div id="gauges-1">
                <div id="velocity-gauge">
                    <GaugeContainer
                        title='VELOCITY'
                        gauges={velocityGauges}
                    />
                </div>
                <GaugeContainer
                    title='ACCELERATION'
                    gauges={accelerationGauges}
                />
            </div>
            <div id="gauges-2">
                <GaugeContainer
                    title='MOTORS'
                    gauges={motorGauges}
                />
            </div>
            <div id="battery-flexbox">
                <BarContainer
                    title='HP BATTERY 1'
                    bars={barTemplate}
                />
                <BarContainer
                    title='HP BATTERY 2'
                    bars={barTemplate}
                />
                <BarContainer
                    title='LP BATTERY 1'
                    bars={barTemplate}
                />
                <BarContainer
                    title='LP BATTERY 2'
                    bars={barTemplate}
                />
            </div>
        </div>
    );
}

const barTemplate = [{
                    title: 'BATTERY',
                    unit: '%',
                    value: '87',  // actual value will be passed as prop later I guess?
                },
                {
                    title: 'VOLTAGE',
                    unit: 'V',
                    value: '56',  // actual value will be passed as prop later I guess?
                },
                {
                    title: 'TEMPERATURE',
                    unit: '\u00b0',
                    value: '45',  // actual value will be passed as prop later I guess?
                },
                {
                    title: 'CURRENT',
                    unit: 'A',
                    value: '89',  // actual value will be passed as prop later I guess?
                }];

const velocityGauges = [{
                        rotate: '100',
                        size: '160',
                        gaugeTitle: '',
                    }];

const accelerationGauges = [{
                            rotate: '60',
                            size: '100',
                            gaugeTitle: '',
                        }];

const motorGauges = [{
                        rotate: '100',
                        size: '90',
                        gaugeTitle: 'RPM REAR LEFT',
                    },
                    {
                        rotate: '100',
                        size: '90',
                        gaugeTitle: 'RPM REAR RIGHT',
                    }];

ReactDOM.render(<App />, document.getElementById('root'));
