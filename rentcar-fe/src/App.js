import React, { useEffect, useState } from "react";
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
import Login from './auth/Login'
import Axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Alert } from '@mui/material'

export default function App(props) {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [message, setMessage] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if(token != null){
      let user = jwt_decode(token);
      if(user) {
        setIsAuth(true);
        setUser(user);
      }
      else if(!user){
        localStorage.removeItem("token");
        setIsAuth(false);
      }
    }
  }, [])

  // Login
  const loginHandler = (cred) => {
   // console.log(cred);
    Axios.post("user/login", cred)
    .then(res => {
      console.log(res.data);
      let token = res.data.token;
      if(token != null)
      {
        localStorage.setItem("token", token);
        let user = jwt_decode(token);
        setIsAuth(true);
        setUser(user);
        setMessage("User logged In successfully!")
      }
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  //Logout
  const logoutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    // setMessage("User logged out successfully")
    window.location.href = '/login'
  }

  // message - Check for modal message better
  const msg = message ? (
    <Alert variant="success">{message}</Alert>
  ) : null;

  //register user (Like Add put partail and another screen - WIP)
  const registerHandler = (cred) => {
    Axios.post("auth/signup", cred)
      .then(res => {
        if(res.data.token){
          localStorage.setItem("token", res.data.token);
          let user = jwt_decode(res.data.token);
          setIsAuth(true);
          setUser(user);
          setMessage("User registered successfully!")
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  const hussain = "hussain"
  //console.log(user)
  return (
    <Router> 
          <Navbar user={user} hussain={hussain} logoutHandler={logoutHandler}/>
          {msg}
   
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
          <Route path="/login" element={<Login login={loginHandler} register={registerHandler}/>} />
          {/* <Route path="/logout" /> */}
          {/* <Route path="/login" element={<LoginComponent setUserData={setUserData} mode={mode} readUserData={readUserData} setModeType={setModeType} readMode={readMode}
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
        } /> */}
        </Routes>
      </Router>
    );
  }