import './Switch.css';
import React from 'react';
import Header from '../Header/Header';
import Bar from '../Bar/Bar';

function Switch(props){
    document.addEventListener('DOMContentLoaded', function () {
        const checkbox = document.querySelector('input[type="checkbox"]');
        const logoDark = document.getElementById('logoDark');
        const logoLight = document.getElementById('logo');
        const initHeader = document.getElementById('initHeader');
        checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            document.documentElement.classList.toggle('light-mode');
            logoDark.style.visibility = 'visible';
            logoLight.style.visibility = 'hidden';
            initHeader.style.visibility = 'hidden';
            document.getElementById("curMode").innerHTML = "LIGHT MODE";
            document.getElementById("curModeHeader").style.color="black";
            const items =  document.getElementsByClassName("bar-value-text")
            for(let i = 0; i < items.length; ++i){
                document.getElementsByClassName("bar-value-text")[i].style.color="#0f1d3a"
            }
            //document.getElementsByClassName("bar-value-text").style.color="black";
        } else {
            document.documentElement.classList.remove('light-mode');
            logoDark.style.visibility = 'hidden';
            logoLight.style.visibility = 'visible';
            document.getElementById("curMode").innerHTML = "DARK MODE";
            document.getElementById("curModeHeader").style.color="white";
            console.log(document.getElementById("bar-value-text"));
            const items =  document.getElementsByClassName("bar-value-text")
            for(let i = 0; i < items.length; ++i){
                document.getElementsByClassName("bar-value-text")[i].style.color="#ffffff;"
            }
            //document.getElementById("bar-value-text").style.color="white";
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