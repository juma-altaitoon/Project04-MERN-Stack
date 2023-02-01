import React from 'react'
import Weather from './publicapi/Weather'
import image from "./img/background-sky.jpeg"; 
import Slider from "./nav/Slider";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
                  
    <div style={{ backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", width: "100%", height: "91vh"}}>
  
       <Weather></Weather>
       <Slider></Slider>

       </div>
   
   )
 }

                            
