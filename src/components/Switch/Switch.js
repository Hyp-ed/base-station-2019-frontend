import './Switch.css';
import React from 'react';

function Switch(props){
    document.addEventListener('DOMContentLoaded', function () {
        var checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            document.documentElement.classList.toggle('light-mode');
        } else {
            document.documentElement.classList.remove('light-mode');
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