import React, { useEffect, useState } from "react";
import Axios from 'axios';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';

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

     <Card style={{ width: '18rem', float: 'right', background:"transparent", borderRadius:"2cm", borderBlockColor:"blue"}}>
     <Card.Body>
    <Container maxWidth="xs">
    <Grid alignContent='flex-center' alignItems='flex-center' justify='flex-center' color="Wheat"> 
    <img src={`http:${weather.current && weather.current.condition.icon}`} alt="Weather"  />
      <Typography align="center">Country: {weather.location && weather.location.country}</Typography>
      <Typography align="center">Current Temperature: &nbsp; {weather.current && weather.current.temp_c}°C </Typography>
      <Typography align="center">Current Weather: {weather.current && weather.current.condition.text} </Typography>
      <Typography align="center">----------------------------</Typography>
      <Typography />
      <Typography align="center"> Weather Forcast 3 Days:
      </Typography >
      <Typography align="center">
        {weather.forecast && weather.forecast.forecastday[0].day.condition.text},&nbsp;
        {weather.forecast && weather.forecast.forecastday[1].day.condition.text},&nbsp;
        {weather.forecast && weather.forecast.forecastday[2].day.condition.text}
      </Typography >
      <Typography align="center">----------------------------</Typography>
      <Typography align="center"> Temperature Forcast 3 Days:
      </Typography>
      <Typography align="center">
        {weather.forecast && weather.forecast.forecastday[0].day.avgtemp_c}°C,&nbsp;
        {weather.forecast && weather.forecast.forecastday[1].day.avgtemp_c}°C,&nbsp;
        {weather.forecast && weather.forecast.forecastday[2].day.avgtemp_c}°C
      </Typography>
       </Grid>
      </Container>
      </Card.Body>
    </Card>
     
      
    </div>
  );
}
