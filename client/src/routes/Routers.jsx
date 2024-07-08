import React from 'react'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Doctors from '../pages/Doctors/Doctors'

import { Route,Routes } from 'react-router-dom'

const Routers = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  )
}

export default Routers