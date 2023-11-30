// WeatherDetails.jsx
import React, { Component } from 'react';
import axios from 'axios';

class WeatherDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: null,
      details: {
        humidity: null,
        windSpeed: null,
      },
      rain: null,
      loading: true,
      error: null,
    };
  }

  async componentDidMount() {
    const cityName = this.props.cityName;
    const apiKey = '5b3c616ac1de523c840f8aa1adcdffa8'; // Replace with your actual API key
    const apiEndpoint = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(apiEndpoint);
      const { main, wind, rain } = response.data;

      this.setState({
        temperature: main.temp,
        details: {
          humidity: main.humidity,
          windSpeed: wind.speed,
        },
        rain: rain ? rain['1h'] : 0,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error: 'Error fetching weather data',
        loading: false,
      });
    }
  }

  render() {
    const { temperature, details, rain, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }
    return (
      <div>
        <div className='color1'>
          <h2>Temperature</h2>
          <p>{temperature}°C</p>
        </div>
        <div className='color2'>
          <h2>Additional Details</h2>
          <p>Temperature: {temperature}°C</p>
          <p>Humidity: {details.humidity}%</p>
          <p>Wind Speed: {details.windSpeed} m/s</p>
          <div className="forecast-image"></div>
        </div>
        <div className='color3'>
          <h2>Rain Information</h2>
          <p>Rain (last 1 hour): {rain} mm</p>
        </div>
      </div>
    );
  }
}   

export default WeatherDetails;
