import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Navbar'
import Home from './Home'
import User from './user/User'
import UserCreate from './user/UserCreate'
import UserUpdate from './user/UserUpdate'
import Car from './car/Car'
import CarCreate from './car/CarCreate'
import CarUpdate from './car/CarUpdate'
import Order from './order/Order'
import OrderCreate from './order/OrderCreate'
import OrderUpdate from './order/OrderUpdate'
import PublicApi from './PublicApi'
import CurrencyConverter from './publicapi/CurrencyConverter'
import {LoginComponent} from './Login2'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Alert } from '@mui/material'

export default function App() {
//   const [isAuth, setIsAuth] = useState(false);
    const [mode, setMode] = useState('login');
    const [user, setUser] = useState({});

    const setUserData = (user) =>{
        setUser(user);
        console.log("I got set");
    }
    const readUserData = () =>{
        console.log(user);
        console.log("test")
    }

    const setModeType = (mode) =>{
        setMode(mode);
        console.log("I got set");
    }
    const readMode = () =>{
      console.log(mode);
    }
//  // const [message, setMessage] = useState(null);

//   useEffect(() => {
//     let token = localStorage.getItem("token");
//     if(token != null){
//       let user = jwt_decode(token);

//       if(user) {
//         setIsAuth(true);
//         setUser(user);
//       }
//       else if(!user){
//         localStorage.removeItem("token");
//         setIsAuth(false);
//       }
//     }
//   }, [])
  

  // const registerHandler = (user) => {
  //   Axios.post("auth/signup", user)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }

  // const loginHandler = (cred) => {
  //   Axios.post("user/login", cred)
  //   .then(res => {
  //     console.log(res.data.token);
  //     let token = res.data.token;
  //     if(token != null)
  //     {
  //       localStorage.setItem("token", token);
  //       let user = jwt_decode(token);
  //       setIsAuth(true);
  //       setUser(user);
  //    //   setMessage("User logged In successfully!")
  //     }

  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  // const onLogoutHandler = (e) =>{
  //   e.preventDefault();
  //   localStorage.removeItem("token");
  //   setIsAuth(false);
  //   setUser(null);
  //  setMessage("User logged out successfully")
  //}

  // const msg = message ? (
  //   <Alert variant="success">{message}</Alert>
  // ) : null;

  const userdata = ''

  return (
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/user/update" element={<UserUpdate />} />
          <Route path="/car" element={<Car />} />
          <Route path="/car/create" element={<CarCreate />} />
          <Route path="/car/update" element={<CarUpdate />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order/create" element={<OrderCreate />} />
          <Route path="/order/update" element={<OrderUpdate />} />
          <Route path="/publicapi" element={<PublicApi />} />
          <Route path="/publicapi/currencyconverter" element={<CurrencyConverter />} />
          {/* <Route path="/login2" element={<LoginComponent />} /> */}
          <Route path="/login2" element={<LoginComponent setUserData={setUserData} mode={mode} readUserData={readUserData} setModeType={setModeType} readMode={readMode}
          onSubmit={
                function() {
                    if(mode == 'login'){
                      //Login Axios here
                      window.alert('I am in Login from APP')
                    }else if(mode == 'signup'){
                      //Signup Axios here
                      window.alert('I am in signup from APP')
                    }
                }
            }
        />
        } />
        </Routes>
      </Router>
    );
  }