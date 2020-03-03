import React from "react";

const WeatherDay = ({ weather }) => {
  const date = new Date().toDateString();

  return (
    <div>
      <h1>
        Weather in {weather.name}, {weather.sys.country}
      </h1>
      <div>
        <h2> The current date is: {date}</h2>
        <h2> {weather.main.temp} &#8451;</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="forecast"
          width="125"
          height="125"
        />
        <h3>{weather.weather[0].description}</h3>
        <div> Wind: {weather.wind.speed} m/s</div>
        <p>Humidity: {weather.main.humidity}</p>
      </div>
    </div>
  );
};

export default WeatherDay;
