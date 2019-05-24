import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Header from './Header';

function App(props) {
    return (
        <Container>
            <Header /> 
            <h1>Base-station GUI</h1>
        </Container>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
