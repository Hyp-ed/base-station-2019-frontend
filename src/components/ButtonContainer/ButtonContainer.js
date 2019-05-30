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
        return (
            <div className="button-container-root">
                <div className="button-container-button">
                    <Button
                        name='SVP'
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='CALIB.'
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='STOP'
                        handleClick={() => this.sendMessage({command: 'STOP'})}
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='RESET'
                        handleClick={() => this.sendMessage({command: 'RESET'})}
                    />
                </div>
                <div className="button-container-button">
                    <Button
                        name='LAUNCH'
                        handleClick={() => this.sendMessage({command: 'LAUNCH'})}
                    />
                </div>
            </div>
        );
    }
}

export default ButtonContainer;
