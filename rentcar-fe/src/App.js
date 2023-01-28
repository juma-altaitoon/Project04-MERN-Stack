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

export default function App() {
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
        </Routes>
      </Router>
    );
  }