import './Header.css';

import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import logo from '../../hyped.png';

function Header(props) {
    const podProgress = 90;

    const connectionTextClassName = props.connectedToPod ? 'connected' : 'not-connected';
    const connectionTextStyle = props.connectedToPod ? {marginBottom: -5} : {};
    const podStatusTextStyle = props.connectedToPod ? {} : {display: 'none'};

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <ProgressBar id="pod-progress" animated now={podProgress} label={props.podDistance} />
            <div className="pod-status">
                <p className={`status-text connection-text ${connectionTextClassName}`} style={connectionTextStyle}>
                    {props.connectedToPod ? 'CONNECTED' : 'NOT CONNECTED'}
                </p>
                <p className="status-text pod-status-text" style={podStatusTextStyle}>{props.podState}</p>
            </div>
        </div>
    );
}

export default Header;
