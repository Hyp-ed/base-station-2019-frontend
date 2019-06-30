import './Timer.css';

import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerOn: false,
            runningTime: 0
        };
    }

    startTimer() {
        this.setState({
            timerOn: true,
        });

        const startTime = Date.now() - this.state.runningTime;

        this.timer = setInterval(() => {
            this.setState({
                runningTime: Date.now() - startTime
            });
        }, 10);
    }

    stopTimer() {
        this.setState({
            timerOn: false
        });

        clearInterval(this.timer);
    }

    componentDidUpdate(prevProps) {
        if (this.props.podState !== prevProps.podState && this.props.podState === 'ACCELERATING') {
            this.startTimer();
        }
        else if (this.props.podState !== prevProps.podState && this.props.podState !== 'ACCELERATING') {
            this.stopTimer();
        }
    }

    // to prevent memory leak just in case Timer is removed from DOM
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const runningTime = this.state.runningTime;

        return (
            <p className='timer'>{runningTime}</p>
        );
    }
}

export default Timer;
