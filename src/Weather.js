import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Satureday 03:57",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="container">
          <button type="button" class="btn btn-primary">
            Primary
          </button>
          <form className="weatherForm">
            <input
              className="searchCity"
              type="search"
              placeholder="Enter City"
            />
            <input className="searchButton" type="submit" value="search" />
          </form>
          <div className="row">
            <div className="col-6">
              <h1>{weatherData.city}</h1>
              <ul className="weatherLi">
                <li>
                  Last updated: ,
                  <span>
                    {weatherData.date}
                    <span>{weatherData.description}</span>
                  </span>
                </li>
                <li>
                  Humidity: <span className="pink">{weatherData.humidity}</span>
                  <span className="pink">%</span>, Wind:
                  <span className="pink">{weatherData.wind}</span>
                  <span className="pink">km/h</span>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="temperature-container d-flex justify-content-end">
                <div className="temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="clear"
                  ></img>
                  <span>{Math.round(weatherData.temperature)}</span>
                </div>
                <span className="unit">
                  <a href="/">°C</a>/
                  <a href="/" className="active">
                    °F
                  </a>
                </span>
              </div>
            </div>
            <div className="weatherForecast" id="forecast"></div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "52698afa73c081f5792b89c41bcc1991";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return " loading....";
  }
}
