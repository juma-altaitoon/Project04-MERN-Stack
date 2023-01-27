import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from './Navbar'
import User from './user/User'
import UserCreate from './user/UserCreate'
import UserEdit from './user/UserEdit'
import Car from './car/Car'
import CarCreate from './car/CarCreate'
import CarEdit from './car/CarEdit'

export default function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/user/create" element={<UserCreate />} />
          <Route path="/user/edit?id" element={<UserEdit />} />
          <Route path="/car" element={<Car />} />
          <Route path="/car/create" element={<CarCreate />} />
          <Route path="/car/edit?id" element={<CarEdit />} />
        </Routes>
      </Router>
    );
  }