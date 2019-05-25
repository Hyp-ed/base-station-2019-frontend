import React from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import logo from './hyped.png';

function Header(props) {
    const podProgress = 90;

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <ProgressBar id="pod_progress" animated now={podProgress} label={`${podProgress} m`} />
            <div id="pod_status">
                <p id="pod_status_text">STATUS</p>
            </div>
        </div>
    );
}

export default Header;
