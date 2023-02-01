import React from 'react'
import Weather from './publicapi/Weather'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from "./img/background-sky.jpeg"; 
import Slider from "./nav/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
                
    <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width: "100%", height: "91vh"}}>
  
  
       <Weather></Weather>
       <Slider></Slider>

       
       </div>
   

   )
 }

                            
