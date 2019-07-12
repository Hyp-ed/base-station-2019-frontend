import './Switch.css';
import React from 'react';

function Switch(props){

    return(
        <div id="swith-box">
            <h2>Mode: {props.title}</h2>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default Switch;