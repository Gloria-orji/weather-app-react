import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul className="weatherLi">
            <li>
              Last updated: ,
              <span>
                <FormattedDate date={props.data.date} />
                <span>{props.data.description}</span>
              </span>
            </li>
            <li>
              Humidity: <span className="pink">{props.data.humidity}</span>
              <span className="pink">%</span>, Wind:
              <span className="pink">{props.data.wind}</span>
              <span className="pink">km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <div className="temperature">
              <img
                src="{props.data.iconUrl}"
                alt={props.data.description}
              ></img>

              <span>{Math.round(props.data.temperature)}</span>
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
  );
}
