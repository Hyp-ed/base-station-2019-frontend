import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Gauge from './Gauge';

function App(props) {
    return (
        <div className="wrapper">
            <Header /> 
            <div id="gauges-1">
                <div id="velocity_gauge">
                    <Gauge
                        rotate='100'
                        size='180'
                        title='VELOCITY'
                    />
                </div>
                <Gauge
                    rotate='60'
                    size='120'
                    title='ACCELERATION'
                />
            </div>
            <div id="gauges-2">
                <div id="motor_left_gauge">
                    <Gauge
                        rotate='100'
                        size='80'
                        title='LEFT MOTOR RPM'
                    />
                </div>
                <Gauge
                    rotate='60'
                    size='80'
                    title='RIGHT MOTOR RPM'
                />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
