import React from 'react'
import Weather from './publicapi/Weather'
import Typography from '@material-ui/core/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from "./img/Car1.jpg"; 
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

    <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width: "100%", height: "auto"}}>
  
  
       <Weather></Weather>
       <Slider></Slider>
    
    
      
       <br />
       <br />

                <Grid container spacing={2}>
                    <Grid item xs={4}>
                    <CardActionArea>
                       <CardContent>
                      <h2 style= {{textAlign:"center", color:"wheat"}}>flexible Booking Process</h2>
                      <Item>No need for huge up-front costs. Search for the best deal for you and book
                           it with only a small advance payment, you will pay the remaining amount during
                           the car pickup time.</Item>
                        </CardContent>
                    </CardActionArea>
                    </Grid>
                    
                    <Grid item xs={4}>
                    <CardActionArea>
                       <CardContent>
                      <h2 style= {{textAlign:"center", color:"wheat"}}>Free Extras & Cancellation</h2>
                      <Item>We constantly evaluate our partners in the level of service they provide in each location
                           so we can ensure the quality of service you will receive.</Item>
                           </CardContent>
                    </CardActionArea>
                    </Grid>
                    
                    <Grid item xs={4}>
                    <CardActionArea>
                       <CardContent>
                      <h2 style= {{textAlign:"center", color:"wheat"}}>Quality & Expertise</h2>
                      <Item>We constantly evaluate our partners in the level of service they provide in each location
                            so we can ensure the quality of service you will receive.</Item>
                        </CardContent>
                    </CardActionArea>
                    </Grid>
                                                  
                </Grid>
                            
     </div>
   

  )
}
