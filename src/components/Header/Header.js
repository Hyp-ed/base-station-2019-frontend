import './Header.css';

import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import logo from '../../hyped.png';

function Header(props) {
    const podProgress = 90;
    const connectedToPod = props.connectedToPod ? 'CONNECTED' : 'NOT CONNECTED';
    // literally just for the hypen in the classname...
    const connectionTextClassName = props.connectedToPod ? 'connected' : 'not-connected';

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <ProgressBar id="pod-progress" animated now={podProgress} label={podProgress} />
            <div className="pod-status">
                <p className={`status-text connection-text ${connectionTextClassName}`}>
                    {connectedToPod.toUpperCase()}
                </p>
                <p className="status-text pod-status-text">IDLE</p>
            </div>
        </div>
    );
}

export default Header;
