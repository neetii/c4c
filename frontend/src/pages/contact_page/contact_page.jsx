import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import PageWrapper from '../../components/PageWrapper.jsx'

export default function ContactPage() {
  const [form, setForm] = React.useState({ first_name: '', last_name: '', email: '', message: '' })
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://127.0.0.1:8001/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px', border: '1px solid #c8b97a', borderRadius: '4px',
    fontSize: '15px', fontFamily: 'Nunito, sans-serif', background: '#F0DA9D',
    boxSizing: 'border-box', outline: 'none', transition: 'border-color 0.2s'
  }

  return (
    <PageWrapper>
      <Navbar activePage="Contact" />

      <main style={{ background: '#CD3838', position: 'relative', padding: '60px 40px 100px', minHeight: '650px', overflow: 'hidden' }}>

        <motion.h1
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', color: '#F0DA9D', fontSize: '56px', fontWeight: 400, fontFamily: 'Nunito, sans-serif', margin: '0 0 40px 0' }}
        >
          Contact us
        </motion.h1>

        {/* Decorative images */}
        {[
          { src: '/images/book.png',    style: { left: '60px',  top: '110px',   width: '210px' } },
          { src: '/images/coffee.png',  style: { left: '40px',  top: '340px',   width: '130px' } },
          { src: '/images/flowers.png', style: { left: '100px', bottom: '80px', width: '190px' } },
          { src: '/images/soap.png',    style: { right: '60px', top: '130px',   width: '170px' } },
          { src: '/images/candle.png',  style: { right: '90px', bottom: '90px', width: '110px' } },
        ].map(({ src, style }, i) => (
          <motion.img key={src} src={src}
            style={{ position: 'absolute', opacity: 0.85, pointerEvents: 'none', ...style }}
            initial={{ opacity: 0 }} animate={{ opacity: 0.85 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          />
        ))}

        {/* Form card */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: '#F0DA9D', borderRadius: '8px', padding: '40px 48px', width: '420px', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          {submitted ? (
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ textAlign: 'center', fontSize: '20px', color: '#CD3838', fontFamily: 'Nunito, sans-serif' }}
            >
              Thanks! We'll be in touch soon.
            </motion.p>
          ) : (
            <>
              {[
                { label: 'First Name', key: 'first_name', type: 'text' },
                { label: 'Last Name',  key: 'last_name',  type: 'text' },
                { label: 'Email',      key: 'email',      type: 'email' },
              ].map(({ label, key, type }) => (
                <div key={key} style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '15px', color: '#1E1E1E', fontFamily: 'Nunito, sans-serif', marginBottom: '6px' }}>{label}</label>
                  <input type={type} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} required style={inputStyle} />
                </div>
              ))}

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '15px', color: '#1E1E1E', fontFamily: 'Nunito, sans-serif', marginBottom: '6px' }}>Message</label>
                <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required
                  style={{ ...inputStyle, resize: 'vertical' }} />
              </div>

              <motion.button
                type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', padding: '14px', background: '#CD3838', color: '#F0DA9D',
                  border: 'none', borderRadius: '4px', fontSize: '18px',
                  fontFamily: 'Nunito, sans-serif', cursor: 'pointer', fontWeight: 600
                }}
              >
                Submit
              </motion.button>
            </>
          )}
        </motion.form>
      </main>

      <div style={{ borderTop: '5px solid #F0DA9D' }} />
      <Footer />
    </PageWrapper>
  )
}
