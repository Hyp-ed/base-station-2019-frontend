import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import GaugeContainer from './components/GaugeContainer/GaugeContainer';

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
        </div>
    );
}

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
