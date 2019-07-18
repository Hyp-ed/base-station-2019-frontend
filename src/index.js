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
import {Switch} from './components/Switch/Switch';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connectedToPod: false,
        };

        this.podDataHandler = this.podDataHandler.bind(this);
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
                    stompClient.subscribe('/topic/podData', (message) => this.podDataHandler(message));
                    stompClient.subscribe('/topic/isPodConnected', (message) => this.podConnectionStatusHandler(message));
                    stompClient.subscribe('/topic/errors', (message) => console.error(`ERROR FROM BACKEND: ${message}`));
                    stompClient.send("/app/pullData");
                }, (error) => this.disconnectHandler(error));
            })
            .catch(error => console.error(error));
    }

    podDataHandler(message) {
        const receivedPodData = JSON.parse(message.body);

        this.setState({
            podData: receivedPodData,
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

    /* the matching gauge/value pair have to have the same index in their respective arrays */
    getGauges(gauges, values) {
        let newGauges = [];

        for (let i = 0; i < gauges.length; i++) {
            if (typeof values[i] !== 'undefined') {
                newGauges.push({...gauges[i], value: Math.round(values[i])});
            }
            else {
                newGauges.push(gauges[i]);
            }
        }

        return newGauges;
    }

    /* the matching indicator/status pair have to have the same index in their respective arrays */
    getIndicators(indicators, statuses) {
        let newIndicators = [];

        for (let i = 0; i < indicators.length; i++) {
            if (typeof statuses[i] !== 'undefined') {
                newIndicators.push({...indicators[i], operational: statuses[i]});
            }
            else {
                newIndicators.push(indicators[i]);
            }
        }

        return newIndicators;
    }

    convertModuleStatus(status) {
        return status === "CRITICAL_FAILURE" ? false : true;
    }

    convertImuStatuses(imuData) {
        let newImuStatuses = [];

        for (const imu of imuData) {
            newImuStatuses.push(imu.operational);
        }

        return newImuStatuses;
    }

    convertEmBrakesStatuses(brakes) {
        let newEmBrakesStatuses = [];

        for (const brake in brakes) {
            // negate status bc when brakes are true (engaged), we want this to show up as red (false)
            newEmBrakesStatuses.push(!brakes[brake]);
        }

        return newEmBrakesStatuses;
    }

    render() {
        const stompClient = this.state.stompClient;
        const connectedToPod = this.state.connectedToPod;
        const podDistance = typeof this.state.podData === 'undefined'
            ? 0
            : this.state.podData.navigation.distance;
        const podState = typeof this.state.podData === 'undefined'
            ? ''
            : this.state.podData.stateMachine.currentState;
        const velocityGauge = typeof this.state.podData === 'undefined'
            ? config['velocityGauge']
            : this.getGauges(config['velocityGauge'], [this.state.podData.navigation.velocity]);
        const accelerationGauge = typeof this.state.podData === 'undefined'
            ? config['accelerationGauge']
            : this.getGauges(config['accelerationGauge'], [this.state.podData.navigation.acceleration]);
        const moduleIndicators = typeof this.state.podData === 'undefined'
            ? config['moduleIndicators']
            : this.getIndicators(config['moduleIndicators'], [
                // MAKE SURE THIS ORDER ALIGNS WITH config.json!!!
                this.convertModuleStatus(this.state.podData.batteries.moduleStatus),
                this.convertModuleStatus(this.state.podData.sensors.moduleStatus),
                this.convertModuleStatus(this.state.podData.navigation.moduleStatus),
                this.convertModuleStatus(this.state.podData.motors.moduleStatus)
            ]);
        const imuIndicators = typeof this.state.podData === 'undefined'
            ? config['imuIndicators']
            : this.getIndicators(config['imuIndicators'], this.convertImuStatuses(this.state.podData.sensors.imu));
        const emBrakesIndicators = typeof this.state.podData === 'undefined'
            ? config['emBrakesIndicators']
            : this.getIndicators(config['emBrakesIndicators'], this.convertEmBrakesStatuses(this.state.podData.emergencyBrakes.brakes));
        const highPowerBatteryValues = typeof this.state.podData === 'undefined'
            ? {}
            : this.state.podData.batteries.highPowerBatteries;
        const lowPowerBatteryValues = typeof this.state.podData === 'undefined'
            ? {}
            : this.state.podData.batteries.lowPowerBatteries;

        return (
            <div className="wrapper">
                <Header
                    connectedToPod={connectedToPod}
                    podDistance={podDistance}
                    podState={podState}
                    progressBarMax={config['progressBarMax']}
                />
                <div id="gauges">
                    <div id="velocity-gauge">
                        <GaugeContainer
                            title='VELOCITY'
                            gauges={velocityGauge}
                        />
                    </div>
                    <GaugeContainer
                        title='ACCELERATION'
                        gauges={accelerationGauge}
                    />
                </div>
                <div id="battery-flexbox">
                    <BatteryBars
                        title='HP BATTERY 1'
                        values={highPowerBatteryValues[0]}
                    />
                    <BatteryBars
                        title='LP BATTERY 1'
                        values={lowPowerBatteryValues[0]}
                    />
                    <BatteryBars
                        title='HP BATTERY 2'
                        values={highPowerBatteryValues[1]}
                    />
                    <BatteryBars
                        title='LP BATTERY 2'
                        values={lowPowerBatteryValues[1]}
                    />
                    <BatteryBars
                        title='HP BATTERY 3'
                        values={highPowerBatteryValues[2]}
                    />
                    <BatteryBars
                        title='LP BATTERY 3'
                        values={lowPowerBatteryValues[2]}
                    />
                </div>
                <div id="indicators">
                    <IndicatorContainer
                        title='MODULES'
                        indicators={moduleIndicators}
                    />
                    <IndicatorContainer
                        title='IMUS'
                        indicators={imuIndicators}
                    />
                    <IndicatorContainer
                        title='EMERGENCY BRAKES'
                        indicators={emBrakesIndicators}
                    />
                </div>
                <div id="switch-box">
                    <Switch
                        title='DARK'
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
