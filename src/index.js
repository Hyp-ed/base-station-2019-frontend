import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Stomp from 'stompjs';
import Header from './components/Header/Header';
import GaugeContainer from './components/GaugeContainer/GaugeContainer';
import BarContainer from './components/BarContainer/BarContainer';
import Button from './components/Button/Button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connectedToPod: false,
        };

        this.podStatsHandler = this.podStatsHandler.bind(this);
    }

    componentDidMount() {
        // ask backend to start base-station server instance
        // afterwards establish websocket connection to backend
        fetch('http://localhost:8080/server', {method: 'POST'})
            .then(response => response.text(), error => Promise.reject('Error: could not communicate with backend (fetch() returned error)'))
            .then(text => console.log(`CONNECTED TO BACKEND, SERVER CONNECTED TO POD CLIENT: ${text}`))
            .then(() => {
                const stompClient = Stomp.client('ws://localhost:8080/connecthere');
                stompClient.connect({}, (frame) => {
                    stompClient.subscribe('/topic/podStats', (message) => this.podStatsHandler(message));
                    stompClient.subscribe('/topic/isPodConnected', (message) => this.setState({connectedToPod: true}));
                    stompClient.send("/app/pullData");
                })
            })
            .catch(error => console.log(error));
    }

    podStatsHandler(message) {
        const receivedPodStats = JSON.parse(message.body);

        this.setState({
            podStats: receivedPodStats,
        });
    }

    render() {
        const podDistance = typeof this.state.podStats === 'undefined' ? 0 : this.state.podStats.navigation.distance;
        const podState = typeof this.state.podStats === 'undefined' ? '' : this.state.podStats.stateMachine.currentState;

        return (
            <div className="wrapper">
                <Header
                    connectedToPod={this.state.connectedToPod}
                    podDistance={podDistance}
                    podState={podState}
                />
                <div id="gauges-1">
                    <div id="velocity-gauge">
                        <GaugeContainer
                            title='VELOCITY'
                            gauges={velocityGauges}
                        />
                    </div>
                    <GaugeContainer
                        title='ACCELERATION'
                        gauges={accelerationGauges}
                    />
                </div>
                <div id="gauges-2">
                    <GaugeContainer
                        title='MOTORS'
                        gauges={motorGauges}
                    />
                </div>
                <div id="battery-flexbox">
                    <BarContainer
                        title='HP BATTERY 1'
                        bars={barTemplate}
                    />
                    <BarContainer
                        title='HP BATTERY 2'
                        bars={barTemplate}
                    />
                    <BarContainer
                        title='LP BATTERY 1'
                        bars={barTemplate}
                    />
                    <BarContainer
                        title='LP BATTERY 2'
                        bars={barTemplate}
                    />
                </div>
                <Button
                    name='LAUNCH'
                />
            </div>
        );
    }
}

const barTemplate = [{
                    title: 'BATTERY',
                    unit: '%',
                    value: '87',  // actual value will be passed as prop later I guess?
                },
                {
                    title: 'VOLTAGE',
                    unit: 'V',
                    value: '56',  // actual value will be passed as prop later I guess?
                },
                {
                    title: 'TEMPERATURE',
                    unit: '\u00b0',
                    value: '45',  // actual value will be passed as prop later I guess?
                },
                {
                    title: 'CURRENT',
                    unit: 'A',
                    value: '89',  // actual value will be passed as prop later I guess?
                }];

const velocityGauges = [{
                        rotate: '100',
                        size: '160',
                        gaugeTitle: '',
                    }];

const accelerationGauges = [{
                            rotate: '60',
                            size: '100',
                            gaugeTitle: '',
                        }];

const motorGauges = [{
                        rotate: '100',
                        size: '90',
                        gaugeTitle: 'RPM REAR LEFT',
                    },
                    {
                        rotate: '100',
                        size: '90',
                        gaugeTitle: 'RPM REAR RIGHT',
                    }];

ReactDOM.render(<App />, document.getElementById('root'));
