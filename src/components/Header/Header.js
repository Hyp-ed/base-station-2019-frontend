import './Header.css';

import React from 'react';
import logo from '../../hyped.png';

//starts timer when called
function startTimer(display) {
    var seconds = 0;
    setInterval(function () {
        display.textContent = seconds + 's';
        seconds++;
    }, 1000);
}

//starts timer immediately (for testing)
window.onload = function () {
    var display = document.querySelector('#timer');
    startTimer(display);
};

function Header(props) {
    const podProgress = 90;

    const connectionTextClassName = props.connectedToPod ? 'connected' : 'not-connected';
    const connectionTextStyle = props.connectedToPod ? {marginBottom: -5} : {};
    const podStatusTextStyle = props.connectedToPod ? {} : {display: 'none'};
    
    var display = document.querySelector('#timer');

    //continuously checks if state is accelerating
    //if true, stops checking
        if (props.podState === "ACCELERATING") {
            startTimer(display);
        }

    return (
        <div className="header">
            <img id="logo" src={logo} alt="HypED logo"/>
            <div className='progress-bar'></div>
            <div className={`timer-wrapper`}>
                <span id="timer">-s</span>
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


export default Header;
