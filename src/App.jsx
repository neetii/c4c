import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DonationPage from './pages/donation_page/DonationPage.jsx'
import HomePage from './pages/home/home.jsx'
import AboutPage from './pages/about_page/about_page.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/donate" element={<DonationPage />} />
    </Routes>
  )
}
