import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function DonationPage() {
  const [form, setForm] = React.useState({ donor_name: '', donor_email: '', amount: 5 })
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://127.0.0.1:8001/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) setSubmitted(true)
  }

  return (
    <div style={{ background: '#FFFFFF', margin: 0 }}>
      <Navbar activePage="Donate" />

      <main style={{ background: '#CD3838', padding: '80px 40px 60px' }}>
        <div style={{ maxWidth: '1512px', margin: '0 auto' }}>

          <h1 style={{
            fontSize: '64px', fontWeight: 400, color: '#F0DA9D',
            textAlign: 'center', textDecoration: 'underline',
            margin: '0 0 60px 0', lineHeight: '87px', fontFamily: 'Nunito, sans-serif'
          }}>
            Donate!
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', justifyContent: 'center', paddingLeft: '40px' }}>
            <img src="/images/image8.png" style={{
              flexShrink: 0, width: '225px', height: '320px',
              transform: 'rotate(14deg)', objectFit: 'cover'
            }} />

            {/* Gold donation info card */}
            <form onSubmit={handleSubmit} style={{ background: '#F0DA9D', padding: '48px 56px', width: '620px' }}>
              {submitted ? (
                <p style={{ fontSize: '24px', color: '#CD3838', fontFamily: 'Nunito, sans-serif', textAlign: 'center' }}>
                  Thank you for your donation!
                </p>
              ) : (
                <>
                  <p style={{ fontSize: '30px', lineHeight: '41px', color: '#CD3838', margin: '0 0 24px 0', fontFamily: 'Nunito, sans-serif' }}>
                    Choose a gift amount. Every dollar helps support those who care for others.<br /><br />
                    $5 &ndash; A warm thank you.<br />
                    $10 &ndash; Support a coffee break<br />
                    $15 &ndash; Fund a care package<br />
                    $30 &ndash; Sponsor a day of rest
                  </p>

                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.donor_name}
                    onChange={e => setForm({ ...form, donor_name: e.target.value })}
                    required
                    style={{
                      width: '100%', padding: '10px 14px', marginBottom: '12px',
                      border: '1px solid #CD3838', borderRadius: '4px',
                      fontSize: '16px', fontFamily: 'Nunito, sans-serif',
                      background: '#F0DA9D', boxSizing: 'border-box', outline: 'none'
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.donor_email}
                    onChange={e => setForm({ ...form, donor_email: e.target.value })}
                    required
                    style={{
                      width: '100%', padding: '10px 14px', marginBottom: '12px',
                      border: '1px solid #CD3838', borderRadius: '4px',
                      fontSize: '16px', fontFamily: 'Nunito, sans-serif',
                      background: '#F0DA9D', boxSizing: 'border-box', outline: 'none'
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Amount ($)"
                    value={form.amount}
                    onChange={e => setForm({ ...form, amount: parseFloat(e.target.value) })}
                    required
                    min="1"
                    style={{
                      width: '100%', padding: '10px 14px', marginBottom: '20px',
                      border: '1px solid #CD3838', borderRadius: '4px',
                      fontSize: '16px', fontFamily: 'Nunito, sans-serif',
                      background: '#F0DA9D', boxSizing: 'border-box', outline: 'none'
                    }}
                  />
                  <button type="submit" style={{
                    width: '100%', padding: '12px',
                    background: '#CD3838', color: '#F0DA9D',
                    border: 'none', borderRadius: '4px',
                    fontSize: '18px', fontFamily: 'Nunito, sans-serif',
                    cursor: 'pointer', fontWeight: 600
                  }}>
                    Donate
                  </button>
                </>
              )}
            </form>

            <img src="/images/Gift.png" style={{ flexShrink: 0, width: '200px', height: '200px', objectFit: 'cover' }} />
          </div>

          <div style={{ margin: '48px auto 0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '30px', lineHeight: '41px', color: '#F0DA9D', margin: 0, fontFamily: 'Nunito, sans-serif', whiteSpace: 'nowrap' }}>
              Support caregivers who support us. Your contribution provides help to those in need.
            </p>
          </div>

        </div>
      </main>

      <div style={{ borderTop: '5px solid #F0DA9D', background: '#CD3838' }} />
      <Footer />
    </div>
  )
}
