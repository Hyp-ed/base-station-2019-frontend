import './Header.css';

import React from 'react';
import logo from '../../hyped.png';

function Header(props) {
    const podProgress = 90;

    const connectionTextClassName = props.connectedToPod ? 'connected' : 'not-connected';
    const connectionTextStyle = props.connectedToPod ? {marginBottom: -5} : {};
    const podStatusTextStyle = props.connectedToPod ? {} : {display: 'none'};

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <div className='progress-bar'>
                <progress max='100' value = {props.value}></progress>
            </div>
            <div className="pod-status">
                <p className={`status-text connection-text ${connectionTextClassName}`} style={connectionTextStyle}>
                    {props.connectedToPod ? 'CONNECTED' : 'NOT CONNECTED'}
                </p>
                <p className="status-text pod-status-text" style={podStatusTextStyle}>{props.podState}</p>
            </div>
        </div>
    );
}

Header.defaultProps = {
    value: 90,
}

export default Header;
