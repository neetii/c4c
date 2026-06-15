import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DonationPage from './pages/donation_page/DonationPage.jsx'
import HomePage from './pages/home/home.jsx'
import AboutPage from './pages/about_page/about_page.jsx'
import ImpactPage from './pages/impact_page/impact_page.jsx'
import ContactPage from './pages/contact_page/contact_page.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/impact" element={<ImpactPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/donate" element={<DonationPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
