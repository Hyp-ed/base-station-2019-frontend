import './PodTemperature.css';

import React from "react"

function PodTemperature(props){

  let temperature = props.temp.value;
  let temperature_farenheit = Math.floor((props.temp.value * 9/5) + 32)

  let c_max_temp = props.temp.max
  let f_max_temp = Math.floor((c_max_temp * 9/5) + 32)
  let c_min_temp = props.temp.min
  let f_min_temp = Math.floor((c_min_temp * 9/5) + 32)

  let min_temp_indication = -15;
  let max_temp_indication = 85;
  let thermometer_height = 100;

  let temp_indication = Math.floor(((max_temp_indication - min_temp_indication)/thermometer_height)*(temperature-min_temp_indication));

  let border = "0px";

  if (temp_indication >= 100){
    border = "100px";
    temp_indication = 100;
  }
  else if (temp_indication <= 0){
    temp_indication = 0;
  }

  return (

    <div className="pod-temperature">
        <h1 className="temp-title title">{props.title}</h1>
        <div className="pod-thermometer">
            <span className="glass filler-cont">
                <span className="actual-filler">
                    <span className="amount liquid" style={{height: temp_indication+"%", borderTopLeftRadius: border, borderTopRightRadius: border}}></span>

                    <span className="min-boundary"></span>
                    <span className="max-boundary"></span>

                    <span className="f-min-temp fahrenheit">{f_min_temp} ˚F</span>
                    <span className="c-min-temp celsius">{c_min_temp} ˚C</span>

                    <span className="f-max-temp fahrenheit">{f_max_temp} ˚F</span>
                    <span className="c-max-temp celsius">{c_max_temp} ˚C</span>
                </span>
            </span>
            <div className="bulb glass">
                <span className="red-circle liquid"></span>
                <span className="filler">
                    <span></span>
                </span>
                <p class="curr-temperature">
                  <span className="c-cur-temp">{temperature} ˚C</span>
                  <span className="temp-separator">/</span>
                  <span className="f-cur-temp">{temperature_farenheit} ˚F</span>
                </p>
            </div>
        </div>
    </div>

  )

}

export default PodTemperature;
