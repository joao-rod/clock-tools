import React from "react"
import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Cronometer } from "../pages/Cronometer"
import { Timer } from "../pages/Timer/index"

export const Routs: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cronometer" element={<Cronometer />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  )
}