import './ButtonContainer.css';

import React from 'react';
import Button from '../Button/Button';
import BrakeButton from '../BrakeButton/BrakeButton';

class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

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
        const state = this.props.connectedToPod ? this.props.state : 'NOT CONNECTED TO POD';
        const disabledButtons = determineDisabledButtons(state);

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
                    <BrakeButton
                        brakes={this.props.brakes}
                        disabled={disabledButtons.brake}
                        clickHandler={this.sendMessage}
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
                brake: false,
                stop: false,
            };
        case 'READY':
            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: false,
                brake: true,
                stop: false,
            };
        case 'CALIBRATING':
        case 'ACCELERATING':
        case 'NOMINAL_BRAKING':
            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: true,
                brake: true,
                stop: false,
            };
        case 'RUN_COMPLETE':
            return {
                svpGo: false,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: true,
                brake: true,
                stop: false,
            };
        case 'EXITING':
            return {
                svpGo: true,
                svpStop: false,
                calibrate: true,
                reset: true,
                launch: true,
                brake: true,
                stop: false,
            };
        case 'FINISHED':
            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: false,
                launch: true,
                brake: false,
                stop: true,
            };
        case 'EMERGENCY_BRAKING':
        case 'FAILURE_STOPPED':
            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: true,
                brake: true,
                stop: true,
            };
        default:
            console.error("Error: received invalid state when trying to decide if button is disabled or not")

            return {
                svpGo: true,
                svpStop: true,
                calibrate: true,
                reset: true,
                launch: true,
                brake: true,
                stop: true,
            };
    }
}

export default ButtonContainer;
