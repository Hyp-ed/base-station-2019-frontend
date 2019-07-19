import './VoltageTable.css';

import React from 'react';

function VoltageTable(props) {
    let min = props.ranges["IndvVoltageCell"]["min"];
    let max = props.ranges["IndvVoltageCell"]["max"];
    let rows = [];

    if (!(typeof props.bmsOne === 'undefined') && !(typeof props.bmsTwo === 'undefined') && !(typeof props.bmsOne.indvVoltage === 'undefined') && !(typeof props.bmsTwo.indvVoltage === 'undefined')){
    // if (!(typeof props.bmsOne === 'undefined') && !(typeof props.bmsTwo === 'undefined')){

        // loop rows
        for (let i = 0; i < props.bmsOne.indvVoltage.length; i++) {
            let cells = []

            // Cell Number
            cells.push(<td key={`${i}0`}>{`Cell ${i}`}</td>);

            // BMS 1
            let cellOneClassName = '';
            if (props.bmsOne.indvVoltage[i] < min || props.bmsOne.indvVoltage[i] > max) {
                cellOneClassName = 'out-of-bounds';
            }
            cells.push(<td key={`${i}1`} className={`bms ${cellOneClassName}`}>{props.bmsOne.indvVoltage[i]}</td>);

            // BMS 2
            let cellTwoClassName = '';
            if (props.bmsTwo.indvVoltage[i] < min || props.bmsTwo.indvVoltage[i] > max) {
                cellTwoClassName = 'out-of-bounds';
            }
            cells.push(<td key={`${i}2`} className={`bms ${cellTwoClassName}`}>{props.bmsTwo.indvVoltage[i]}</td>);

            rows.push(<tr key={i}>{cells}</tr>)
        }

    }

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="3">VOLTAGES (mV)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>CELL NUM</td>
                    <td>BMS 1</td>
                    <td>BMS 2</td>
                </tr>
                {rows}
            </tbody>
        </table>
    );
}

// VoltageTable.defaultProps = {
//     bmsOne: {},
//     bmsOne: {}
// }

export default VoltageTable;
