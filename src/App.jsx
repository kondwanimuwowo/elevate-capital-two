import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Shell from "./layout/Shell.jsx"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Solutions from "./pages/Solutions.jsx"
import HowWeInvest from "./pages/HowWeInvest.jsx"
import RiskCompliance from "./pages/RiskCompliance.jsx"
import Contact from "./pages/Contact.jsx"

export default function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/how-we-invest" element={<HowWeInvest />} />
        <Route path="/risk-compliance" element={<RiskCompliance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
