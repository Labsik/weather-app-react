import React, { Component } from "react";
import WeatherDay from "./WeatherToday/WeatherToday";
import ForecastWeather from "./ForecastWeather/ForecastWeather";
import { weatherApiLink, forecastApiLink } from "../../api/api";
import axios from "axios";
import "./WeatherMain.css";

class WeatherMain extends Component {
  constructor() {
    super();
    this.state = {
      weather: null,
      dailyData: []
    };
  }

  componentDidMount() {
    this.getTodayWeather();
    this.getForecastWeather();
  }

  getTodayWeather() {
    axios.get(weatherApiLink).then(res => {
      this.setState({ weather: res.data });
    });
  }

  getForecastWeather() {
    axios.get(forecastApiLink).then(res => {
      const dailyData = res.data.list.filter(daily =>
        daily.dt_txt.includes("00:00:00")
      );
      this.setState({
        dailyData
      });
    });
  }

  render() {
    const { weather, dailyData } = this.state;

    return (
      <div className="weatherMain">
        <div> {weather && <WeatherDay weather={weather} />}</div>
        <div className="forecastWeather">
          {dailyData &&
            dailyData.map((daily, index) => (
              <ForecastWeather daily={daily} key={index} />
            ))}
        </div>
      </div>
    );
  }
}

export default WeatherMain;
