import './ButtonContainer.css';

import React from 'react';
import Button from '../Button/Button';

class ButtonContainer extends React.Component {
    sendMessage(msg) {
        const stompClient = this.props.stompClient;

        if (stompClient) {
            stompClient.send("/app/sendMessage", {}, JSON.stringify(msg));
            console.log(`Sent message: ${msg.command}`);
        }
        else {
            console.error(`Could not send ${msg.command} command; stompClient undefined (frontend probably not connected to backend)`);
        }
    }

    render() {
        const disabledButtons = determineDisabledButtons(this.props.state);

        return (
            <div className="button-container-root">
                <div className="button-container-button">
                    <Button
                        name='SVP GO'
                        disabled={disabledButtons.svpGo}
                        handleClick={() => this.sendMessage({command: 'SERVICE_PROPULSION_GO'})}
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='SVP STOP'
                        disabled={disabledButtons.svpStop}
                        handleClick={() => this.sendMessage({command: 'SERVICE_PROPULSION_STOP'})}
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='CALIB.'
                        disabled={disabledButtons.calibrate}
                        handleClick={() => this.sendMessage({command: 'CALIBRATE'})}
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='RESET'
                        disabled={disabledButtons.reset}
                        handleClick={() => this.sendMessage({command: 'RESET'})}
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='LAUNCH'
                        disabled={disabledButtons.launch}
                        handleClick={() => this.sendMessage({command: 'LAUNCH'})}
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='STOP'
                        disabled={disabledButtons.stop}
                        handleClick={() => this.sendMessage({command: 'STOP'})}
                    />
                </div>
            </div>
        );
    }
}

// returns object indicating if certain button is disabled or not
function determineDisabledButtons(state) {
    switch(state) {
        case 'IDLE':
            return {
                svpGo: true,
                svpStop: true,
                calibrate: false,
                reset: true,
                launch: true,
                stop: true,
            };
        case 'CALIBRATING':
            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: true,
                stop: true,
            };
        case 'READY':
            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: false,
                stop: true,
            }
        default:
            console.error("Error: received invalid state when trying to decide if button is disabled or not, probably not connected")
            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: true,
                stop: true,
            };
    }
}

export default ButtonContainer;
