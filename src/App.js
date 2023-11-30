// App.js
import React from 'react';
import WeatherDetails from './WeatherDetails';
import './App.css'; // Add your global styles if any

function App() {
  return (
    <div className="app-container">
      <h1>My Weather App</h1>
      <WeatherDetails cityName="Toronto" />
    </div>
  );
}

export default App;

