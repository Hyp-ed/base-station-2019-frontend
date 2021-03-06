import './Header.css';

import React from 'react';
import logo from '../../hyped.png';
import ProgressBar from '../ProgressBar/ProgressBar';
import Timer from '../Timer/Timer';

function Header(props) {
    const connectionTextClassName = props.connectedToPod ? 'connected' : 'not-connected';
    const connectionTextStyle = props.connectedToPod ? {marginBottom: -5} : {};
    const podStatusTextStyle = props.connectedToPod ? {} : {display: 'none'};

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <ProgressBar
                progressBarMax={props.progressBarMax}
                podDistance={props.podDistance}
            />
            <Timer
                podState={props.podState}
                connectedToPod={props.connectedToPod}
            />
            <p className="pod-temperature">{`${props.podTemperature} \xB0C`}</p>
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
