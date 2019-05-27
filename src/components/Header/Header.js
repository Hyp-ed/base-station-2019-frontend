import './Header.css';

import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import logo from '../../hyped.png';

function Header(props) {
    const podProgress = 90;

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <ProgressBar id="pod_progress" animated now={podProgress} label={podProgress} />
            <div className="pod_status">
                <p className="status_text connection_text">CONNECTED</p>
                <p className="status_text pod_status_text">IDLE</p>
            </div>
        </div>
    );
}

export default Header;
