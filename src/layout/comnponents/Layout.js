import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../board/components/Home';
import Login from '../../login/components/Login';
import Register from '../../register/components/Register';

export default function Layout() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="home" element={<Home />} />
    </Routes>
  )
}
