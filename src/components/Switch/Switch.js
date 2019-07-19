import './Switch.css';
import React from 'react';

function Switch(props){
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.querySelector('input[type="checkbox"]');
        const logoDark = document.getElementById('logoDark');
        const logoLight = document.getElementById('logo');
        const initHeader = document.getElementById('initHeader');
        const BatteryBarValues =  document.getElementsByClassName("bar-value-text");
        const gaugeValuesBackground = document.getElementsByClassName("inset");
        const gaugeInners = document.getElementsByClassName("clip half");
        const gaugeInnersFull = document.getElementsByClassName("clip full");
        const gaugeBackground = document.getElementsByClassName("gauge-background");
        const barValueArrow = document.getElementsByClassName("arrow-up");
        const barValue = document.getElementsByClassName("progress-bar-value");
        const batteryBars = document.getElementsByClassName("bar fill ");
        const batteryBarsBackground = document.getElementsByClassName("bar background ");
        const temperatureValue = document.getElementsByClassName("pod-temperature");
        let curMode;
        let colour;
        let colourGaugeBackground;
        let colourGaugeFull;
        let colourGaugeBar;
        checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.documentElement.classList.toggle('light-mode');
            logoDark.style.visibility = 'visible';
            logoLight.style.visibility = 'hidden';
            initHeader.style.visibility = 'hidden';
            curMode = "LIGHT MODE";
            document.getElementById("curModeHeader").style.color="black";
            barValue[0].style.color='#707070';
            barValueArrow[0].style.borderBottom=' 0.2em solid #707070';
            colour = "#0f1d3a"
            colourGaugeBackground = "#ffffff"
            colourGaugeFull = "#BABABA"
            colourGaugeBar = "#BABABA"
        } 
        else {
            document.documentElement.classList.remove('light-mode');
            logoDark.style.visibility = 'hidden';
            logoLight.style.visibility = 'visible';
            curMode = "DARK MODE"
            document.getElementById("curModeHeader").style.color="white";
            barValue[0].style.color='#ffffff';
            barValueArrow[0].style.borderBottom=' 0.2em solid #ffffff';
            colour = "#ffffff"
            colourGaugeBackground = "#0f1d3a"
            colourGaugeFull = "#3B414B"
            colourGaugeBar = "#ffffff"
        }
        //Change current mode above light/dark switch
        document.getElementById("curMode").innerHTML = curMode;
        for (let i = 0; i < temperatureValue.length; ++i){
            temperatureValue[i].style.color=colour;
        }
        //Change Battery Colours
        for(let i = 0; i < BatteryBarValues.length; ++i){
            BatteryBarValues[i].style.color=colour;
        }
        //Change battery bar colours
        for(var j=0; j < batteryBars.length; j++){
            batteryBars[j].style.backgroundColor=colour;
            batteryBarsBackground[j].style.backgroundColor=colourGaugeFull;
        }
        //Change Gauge Colours
        for(var i = 0; i < gaugeValuesBackground.length; ++i){
            gaugeValuesBackground[i].style.backgroundColor=colourGaugeBackground;
            gaugeBackground[i].style.backgroundColor=colourGaugeFull;
            gaugeInners[i].firstChild.style.backgroundColor=colour;
            gaugeInnersFull[i].firstChild.style.backgroundColor=colour;
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

export default Switch;
