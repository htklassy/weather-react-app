import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
    let weatherData = {
        city: "Denver",
        temperature: 59,
        date: "Thursday 13:42",
        description: "Sunny",
        imgUrl: "https://openweathermap.org/img/wn/01d@2x.png",
        humidity: 7,
        wind: 5
    };

    return(
         <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="float-start weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-end">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
    );
}