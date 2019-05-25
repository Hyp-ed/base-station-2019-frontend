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
            <Gauge
                rotate='100'
                size='200'
                title='ACCELERATION'
            />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
