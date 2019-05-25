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
            <h1>Base-station GUI</h1>
            <Gauge
                rotate='190'
                size = '200'
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
