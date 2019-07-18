import './Switch.css';
import React from 'react';


function Switch(props){
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.querySelector('input[type="checkbox"]');
        const logoDark = document.getElementById('logoDark');
        const logoLight = document.getElementById('logo');
        const initHeader = document.getElementById('initHeader');
        const barValues =  document.getElementsByClassName("bar-value-text");
        const gaugeValuesBackground = document.getElementsByClassName("inset");
        const guageInners = document.getElementsByClassName("clip half");
        const guageInnersFull = document.getElementsByClassName("clip full");
        const guageBackground = document.getElementsByClassName("gauge-background");
        const red_color = "rgb(163, 6, 6)";
        let curMode;
        let colour;
        let colourGuageBackground;
        let colourGuageFull;

        checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.documentElement.classList.toggle('light-mode');
            logoDark.style.visibility = 'visible';
            logoLight.style.visibility = 'hidden';
            initHeader.style.visibility = 'hidden';
            curMode = "LIGHT MODE";
            document.getElementById("curModeHeader").style.color="black";
            colour = "#0f1d3a"
            colourGuageBackground = "#ffffff"
            colourGuageFull = "#BABABA"
        } else {
            document.documentElement.classList.remove('light-mode');
            logoDark.style.visibility = 'hidden';
            logoLight.style.visibility = 'visible';
            curMode = "DARK MODE"
            document.getElementById("curModeHeader").style.color="white";
            colour = "#ffffff"
            colourGuageBackground = "#0f1d3a"
            colourGuageFull = "#3B414B"
          }
        //Change current mode above light/dark switch
        document.getElementById("curMode").innerHTML = curMode;
        //Change Battery Colours
        for(let i = 0; i < barValues.length; ++i){
            barValues[i].style.color=colour;
        }
        //Change Guage Colours
        for(let i = 0; i < gaugeValuesBackground.length; ++i){
            gaugeValuesBackground[i].style.backgroundColor=colourGuageBackground;
            guageBackground[i].style.backgroundColor=colourGuageFull;
            if (window.getComputedStyle(guageInners[i].firstChild).getPropertyValue("background-color") != red_color){
              guageInners[i].firstChild.style.backgroundColor=colour;
              guageInnersFull[i].firstChild.style.backgroundColor=colour;
            }
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
