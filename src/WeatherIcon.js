// WeatherIcon.js
import React from 'react';

const WeatherIcon = ({ iconCode }) => (
  <img
    src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
    alt="Weather Icon"
    className="weather-icon"
  />
);

export default WeatherIcon;

