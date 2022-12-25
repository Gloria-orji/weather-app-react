import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <div className="clearfix">
                <WeatherIcon code={props.data.icon} />
              </div>

              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="weatherForecast" id="forecast"></div>
      </div>
    </div>
  );
}
