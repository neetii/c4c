import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

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

  return (
    <div>
      <Navbar activePage="Contact" />

      <main style={{ background: '#CD3838', position: 'relative', padding: '60px 40px 100px', minHeight: '650px', overflow: 'hidden' }}>

        <h1 style={{
          textAlign: 'center', color: '#F0DA9D',
          fontSize: '56px', fontWeight: 400,
          fontFamily: 'Nunito, sans-serif', margin: '0 0 40px 0'
        }}>
          Contact us
        </h1>

        {/* Decorative images */}
        <img src="/images/book.png"    style={{ position: 'absolute', left: '60px',  top: '110px',   width: '210px', opacity: 0.85, pointerEvents: 'none' }} />
        <img src="/images/coffee.png"  style={{ position: 'absolute', left: '40px',  top: '340px',   width: '130px', opacity: 0.85, pointerEvents: 'none' }} />
        <img src="/images/flowers.png" style={{ position: 'absolute', left: '100px', bottom: '80px', width: '190px', opacity: 0.85, pointerEvents: 'none' }} />
        <img src="/images/soap.png"    style={{ position: 'absolute', right: '60px', top: '130px',   width: '170px', opacity: 0.85, pointerEvents: 'none' }} />
        <img src="/images/candle.png"  style={{ position: 'absolute', right: '90px', bottom: '90px', width: '110px', opacity: 0.85, pointerEvents: 'none' }} />

        {/* Form card */}
        <form onSubmit={handleSubmit} style={{
          background: '#F0DA9D', borderRadius: '8px',
          padding: '40px 48px', width: '420px',
          margin: '0 auto', position: 'relative', zIndex: 1
        }}>

          {submitted ? (
            <p style={{ textAlign: 'center', fontSize: '20px', color: '#CD3838', fontFamily: 'Nunito, sans-serif' }}>
              Thanks! We'll be in touch soon.
            </p>
          ) : (
            <>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '15px', color: '#1E1E1E', fontFamily: 'Nunito, sans-serif', marginBottom: '6px' }}>First Name</label>
                <input type="text" value={form.first_name} onChange={e => setForm({ ...form, first_name: e.target.value })} required style={{
                  width: '100%', padding: '10px 14px', border: '1px solid #c8b97a', borderRadius: '4px',
                  fontSize: '15px', fontFamily: 'Nunito, sans-serif', background: '#F0DA9D', boxSizing: 'border-box', outline: 'none'
                }} />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '15px', color: '#1E1E1E', fontFamily: 'Nunito, sans-serif', marginBottom: '6px' }}>Last Name</label>
                <input type="text" value={form.last_name} onChange={e => setForm({ ...form, last_name: e.target.value })} required style={{
                  width: '100%', padding: '10px 14px', border: '1px solid #c8b97a', borderRadius: '4px',
                  fontSize: '15px', fontFamily: 'Nunito, sans-serif', background: '#F0DA9D', boxSizing: 'border-box', outline: 'none'
                }} />
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '15px', color: '#1E1E1E', fontFamily: 'Nunito, sans-serif', marginBottom: '6px' }}>Email</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required style={{
                  width: '100%', padding: '10px 14px', border: '1px solid #c8b97a', borderRadius: '4px',
                  fontSize: '15px', fontFamily: 'Nunito, sans-serif', background: '#F0DA9D', boxSizing: 'border-box', outline: 'none'
                }} />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '15px', color: '#1E1E1E', fontFamily: 'Nunito, sans-serif', marginBottom: '6px' }}>Message</label>
                <textarea rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required style={{
                  width: '100%', padding: '10px 14px', border: '1px solid #c8b97a', borderRadius: '4px',
                  fontSize: '15px', fontFamily: 'Nunito, sans-serif', background: '#F0DA9D', boxSizing: 'border-box', resize: 'vertical', outline: 'none'
                }} />
              </div>

              <button type="submit" style={{
                width: '100%', padding: '14px',
                background: '#CD3838', color: '#F0DA9D',
                border: 'none', borderRadius: '4px',
                fontSize: '18px', fontFamily: 'Nunito, sans-serif',
                cursor: 'pointer', fontWeight: 600
              }}>
                Submit
              </button>
            </>
          )}

        </form>
      </main>

      <div style={{ borderTop: '5px solid #F0DA9D' }} />
      <Footer />
    </div>
  )
}
