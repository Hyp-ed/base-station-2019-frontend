import './Switch.css';
import React from 'react';
import {Gauge, circleClassName} from '../Gauge/Gauge';

function Switch(props){
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.querySelector('input[type="checkbox"]');
        const logoDark = document.getElementById('logoDark');
        const logoLight = document.getElementById('logo');
        const initHeader = document.getElementById('initHeader');
        const barValues =  document.getElementsByClassName("bar-value-text");
        const gaugeValuesBackground = document.getElementsByClassName("inset");
        //const guageInners = document.getElementsByClassName(circleClassName);
        let colour;
        let colourGuageBackground;
        checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            console.log(circleClassName);
            document.documentElement.classList.toggle('light-mode');
            logoDark.style.visibility = 'visible';
            logoLight.style.visibility = 'hidden';
            initHeader.style.visibility = 'hidden';
            document.getElementById("curMode").innerHTML = "LIGHT MODE";
            document.getElementById("curModeHeader").style.color="black";
            colour = "#0f1d3a"
            colourGuageBackground = "#ffffff"
        } else {
            document.documentElement.classList.remove('light-mode');
            logoDark.style.visibility = 'hidden';
            logoLight.style.visibility = 'visible';
            document.getElementById("curMode").innerHTML = "DARK MODE";
            document.getElementById("curModeHeader").style.color="white";
            console.log(document.getElementById("bar-value-text"));
            colour = "#ffffff"
            colourGuageBackground = "#0f1d3a"
          }
        for(let i = 0; i < barValues.length; ++i){
            barValues[i].style.color=colour
        }
        for(let i = 0; i < gaugeValuesBackground.length; ++i){
            gaugeValuesBackground[i].style.backgroundColor=colourGuageBackground
        }
        });
    });
    return(
        <div id="swith-box">
            <h2 id="initHeader" style={{color:"#ffffff"}}>DARK MODE</h2>
            <h2 id="curModeHeader"><span id="curMode"></span></h2>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default Switch