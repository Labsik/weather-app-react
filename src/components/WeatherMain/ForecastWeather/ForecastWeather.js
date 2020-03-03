import React from "react";
import moment from "moment";

const ForecastWeather = ({ daily }) => {
  let newDate = new Date();
  const weekday = daily.dt * 1000;
  newDate.setTime(weekday);

  return (
    <div className="forecactWeather">
      <div className="forecastDaily">
        <h3>{moment(newDate).format("dddd")},</h3>
        <p>{moment(newDate).format("MMMM Do")}</p>
        <h2>{Math.round(daily.main.temp)} &#8451;</h2>
        <img
          src={`https://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
          alt="forecast"
          width="50"
          height="50"
        />

        <p>{daily.weather[0].description}</p>
      </div>
    </div>
  );
};

export default ForecastWeather;
