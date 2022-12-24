import React from "react";

import "./Weather.css";

export default function Weather() {
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
            <h1>New york</h1>
            <ul className="weatherLi">
              <li>
                Last updated: ,<span>Saturday 03:57clear sky</span>
              </li>
              <li>
                Humidity: <span className="pink">24</span>
                <span className="pink">%</span>, Wind:
                <span className="pink">34</span>
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
                <span>11</span>
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
}
