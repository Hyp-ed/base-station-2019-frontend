import './Switch.css';
import React from 'react';
import Header from '../Header/Header';

function Switch(props){
    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('input[type="checkbox"]');
        var logoDark = document.getElementById('logoDark');
        var logoLight = document.getElementById('logo');
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            document.documentElement.classList.toggle('light-mode');
            logoDark.style.visibility = 'visible';
            logoLight.style.visibility = 'hidden';
        } else {
            document.documentElement.classList.remove('light-mode');
            logoDark.style.visibility = 'hidden';
            logoLight.style.visibility = 'visible';
          }
        });
    });
    return(
        <div id="swith-box">
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default Switch;