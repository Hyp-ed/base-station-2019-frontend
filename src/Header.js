import React from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import logo from './hyped.png';

function Header(props) {
    const podProgress = 90;

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <ProgressBar id="pod_progress" now={podProgress} label={`${podProgress} m`} />
            <Button id="pod_status" variant="primary">STATUS</Button>
        </div>
    );
}

export default Header;
