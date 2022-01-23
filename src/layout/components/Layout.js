import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../board/components/Home';

export default function Layout() {
  return (
    <Routes>
      <Route path="/movies" element={<Home />} />
    </Routes>
  )
}
