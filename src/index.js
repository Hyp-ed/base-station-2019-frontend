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
            <div id="gauges">
                <div id="velocity_gauge">
                    <Gauge
                        rotate='100'
                        size='150'
                        title='VELOCITY'
                    />
                </div>
                <Gauge
                    rotate='60'
                    size='100'
                    title='ACCELERATION'
                />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
