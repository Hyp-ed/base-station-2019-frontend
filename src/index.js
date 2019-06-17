import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Stomp from 'stompjs';
import config from './config.json'
import Header from './components/Header/Header';
import GaugeContainer from './components/GaugeContainer/GaugeContainer';
import BatteryBars from './components/BatteryBars/BatteryBars';
import ButtonContainer from './components/ButtonContainer/ButtonContainer';
import IndicatorContainer from './components/IndicatorContainer/IndicatorContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connectedToPod: false,
        };

        this.podStatsHandler = this.podStatsHandler.bind(this);
        this.podConnectionStatusHandler = this.podConnectionStatusHandler.bind(this);
        this.disconnectHandler = this.disconnectHandler.bind(this);
    }

    componentDidMount() {
        // ask backend to start base-station server instance
        // afterwards establish websocket connection to backend
        fetch('http://localhost:8080/server', {method: 'POST'})
            .then((response) => response.text(), error => Promise.reject('Error: could not communicate with backend (fetch() returned error)'))
            .then((text) => console.log('CONNECTED TO BACKEND'))
            .then(() => {
                const stompClient = Stomp.client('ws://localhost:8080/connecthere');
                this.setState({
                    stompClient: stompClient,
                });
                stompClient.connect({}, (frame) => {
                    stompClient.subscribe('/topic/podStats', (message) => this.podStatsHandler(message));
                    stompClient.subscribe('/topic/isPodConnected', (message) => this.podConnectionStatusHandler(message));
                    stompClient.subscribe('/topic/errors', (message) => console.error(`ERROR FROM BACKEND: ${message}`));
                    stompClient.send("/app/pullData");
                }, (error) => this.disconnectHandler(error))
            })
            .catch(error => console.error(error));
    }

    podStatsHandler(message) {
        const receivedPodStats = JSON.parse(message.body);

        this.setState({
            podStats: receivedPodStats,
        });
    }

    podConnectionStatusHandler(message) {
        const receivedPodConnectionStatus = message.body;

        this.setState({
            connectedToPod: receivedPodConnectionStatus === 'CONNECTED' ? true : false,
        });
    }

    disconnectHandler(error) {
        if (error.startsWith('Whoops! Lost connection')) {
            console.error('DISCONNECTED FROM BACKEND');

            this.setState({
                connectedToPod: false,
            });
        }
        else {
            console.error(error);
        }
    }

    render() {
        const stompClient = this.state.stompClient;
        const connectedToPod = this.state.connectedToPod;
        const podDistance = typeof this.state.podStats === 'undefined' ? 0 : this.state.podStats.navigation.distance;  // maybe change to defaultProps
        const podState = typeof this.state.podStats === 'undefined' ? '' : this.state.podStats.stateMachine.currentState;  // maybe change to defaultProps
        const highPowerBatteryValues = typeof this.state.podStats === 'undefined' ? {} : this.state.podStats.batteries.highPowerBatteries;
        const lowPowerBatteryValues = typeof this.state.podStats === 'undefined' ? {} : this.state.podStats.batteries.lowPowerBatteries;

        return (
            <div className="wrapper">
                <Header
                    connectedToPod={connectedToPod}
                    podDistance={podDistance}
                    podState={podState}
                />
                <div id="gauges-1">
                    <div id="velocity-gauge">
                        <GaugeContainer
                            title='VELOCITY'
                            gauges={config['velocityGauge']}
                        />
                    </div>
                    <GaugeContainer
                        title='ACCELERATION'
                        gauges={config['accelerationGauge']}
                    />
                </div>
                <div id="gauges-2">
                    <GaugeContainer
                        title='MOTORS'
                        gauges={config['motorGauges']}
                    />
                </div>
                <div id="battery-flexbox">
                    <BatteryBars
                        title='HP BATTERY 1'
                        bars={config['batteryBarTemplate']}
                        values={highPowerBatteryValues[0]}
                    />
                    <BatteryBars
                        title='HP BATTERY 2'
                        bars={config['batteryBarTemplate']}
                        values={highPowerBatteryValues[1]}
                    />
                    <BatteryBars
                        title='LP BATTERY 1'
                        bars={config['batteryBarTemplate']}
                        values={lowPowerBatteryValues[0]}
                    />
                    <BatteryBars
                        title='LP BATTERY 2'
                        bars={config['batteryBarTemplate']}
                        values={lowPowerBatteryValues[1]}
                    />
                </div>
                <div id="indicators">
                    <IndicatorContainer
                        title='MODULES'
                        indicators={config['moduleIndicators']}
                    />
                    <IndicatorContainer 
                        title='IMUS'
                        indicators={config['imuIndicators']}
                    />
                    <IndicatorContainer
                        title='EMERGENCY BRAKES'
                        indicators={config['emBrakesIndicators']}
                    />
                </div>
                <div id="buttons">
                    <ButtonContainer
                        stompClient={stompClient}
                        connectedToPod={connectedToPod}
                        state={podState}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
