import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Typography from '@material-ui/core/Typography'

export default function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    WeatherGet()
  }, [])

  const WeatherGet = () => {
    Axios.get('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Bahrain&days=3', {
      headers: {
        'X-RapidAPI-Key': '0c9633d523msh83a5dd5874dfea3p1139c7jsnaea56fbe543b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
     })
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
       })
      .catch(err => {
        console.log("Error Retreiving API");
        console.log(err);
      })
  }

  return (
    <div>
      <Typography>Weather Information:</Typography>
      <Typography>Country: {weather.location && weather.location.country}</Typography>
      <Typography>Current Temperature: &nbsp; {weather.current && weather.current.temp_c}°C </Typography>
      <Typography>Current Weather: {weather.current && weather.current.condition.text} </Typography>
      <img src={`http:${weather.current && weather.current.condition.icon}`} alt="Weather"  />
      <Typography />
      <Typography> Weather Forcast 3 Days:
      </Typography>
      <Typography>
        {weather.forecast && weather.forecast.forecastday[0].day.condition.text},&nbsp;
        {weather.forecast && weather.forecast.forecastday[1].day.condition.text},&nbsp;
        {weather.forecast && weather.forecast.forecastday[2].day.condition.text}
      </Typography>
      <Typography> Temperature Forcast 3 Days:
      </Typography>
      <Typography>
        {weather.forecast && weather.forecast.forecastday[0].day.avgtemp_c}°C,&nbsp;
        {weather.forecast && weather.forecast.forecastday[1].day.avgtemp_c}°C,&nbsp;
        {weather.forecast && weather.forecast.forecastday[2].day.avgtemp_c}°C
      </Typography>
    </div>
  );
}
