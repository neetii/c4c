import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function DonationPage() {
  return (
    <div style={{ background: '#FFFFFF', margin: 0 }}>
      <Navbar activePage="Donate" />

      {/* Main red section */}
      <main style={{ background: '#CD3838', padding: '80px 40px 60px' }}>
        <div style={{ maxWidth: '1512px', margin: '0 auto' }}>

          {/* Donate! Heading */}
          <h1 style={{
            fontSize: '64px', fontWeight: 400, color: '#F0DA9D',
            textAlign: 'center', textDecoration: 'underline',
            margin: '0 0 60px 0', lineHeight: '87px', fontFamily: 'Nunito, sans-serif'
          }}>
            Donate!
          </h1>

          {/* Content row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px', justifyContent: 'center', paddingLeft: '40px' }}>
            {/* Decorative tilted element */}
            <img src="/images/image8.png" style={{
              flexShrink: 0, width: '225px', height: '320px',
              transform: 'rotate(14 deg)', objectFit: 'cover'
            }} />

            {/* Gold donation info card */}
            <div style={{ background: '#F0DA9D', padding: '48px 56px', width: '620px' }}>
              <p style={{ fontSize: '30px', lineHeight: '41px', color: '#CD3838', margin: 0, fontFamily: 'Nunito, sans-serif' }}>
                Choose a gift amount. Every dollar helps support those who care for others.<br /><br />
                $5 &ndash; A warm thank you.<br />
                $10 &ndash; Support a coffee break<br />
                $15 &ndash; Fund a care package<br />
                $30 &ndash; Sponsor a day of rest
              </p>
            </div>

            {/* Right image placeholder */}
            <img src="/images/Gift.png" style={{ flexShrink: 0, width: '200px', height: '200px', objectFit: 'cover' }} />
          </div>

          {/* Support text */}
          <div style={{ margin: '48px auto 0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '30px', lineHeight: '41px', color: '#F0DA9D', margin: 0, fontFamily: 'Nunito, sans-serif', whiteSpace: 'nowrap' }}>
              Support caregivers who support us. Your contribution provides help to those in need.
            </p>
          </div>
          

        </div>
        
      </main>

      {/* Gold divider */}
      <div style={{ borderTop: '5px solid #F0DA9D', background: '#CD3838' }} />

      <Footer />
    </div>
  )
}
