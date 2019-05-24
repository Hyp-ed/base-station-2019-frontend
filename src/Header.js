import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import logo from './hyped.png';

function Header(props) {
    const podProgress = 90;

    return (
        <Row style={{alignItems: 'center', marginTop: '20px'}}>
            <Col md={3}>
                <img src={logo} className="img-fluid" alt="HypED logo"/>
            </Col>
            <Col>
                <ProgressBar animated now={podProgress} label={`${podProgress} m`} />
            </Col>
            <Col md={2}>
                <Button style={{float: 'right'}} variant="primary">STATUS</Button>
            </Col>
        </Row>
    );
}

export default Header;
