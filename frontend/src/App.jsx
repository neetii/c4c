import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import DonationPage from './pages/donation_page/DonationPage.jsx'
import HomePage from './pages/home/home.jsx'
import AboutPage from './pages/about_page/about_page.jsx'
import ImpactPage from './pages/impact_page/impact_page.jsx'
import ContactPage from './pages/contact_page/contact_page.jsx'
import AdminPage from './pages/admin/admin.jsx'
import AdminLogin from './pages/admin/login.jsx'

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </AnimatePresence>
  )
}
