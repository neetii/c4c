import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function HomePage() {
  return (
    <div>
      <Navbar activePage="Home" />

      <section style={{ background: '#CD3838', padding: '60px 40px' }}>
        <img src="/images/screenshot1.png" style={{ width: '985px', height: '404px', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
        <p style={{ color: '#FFFFFF', fontSize: '32px', textAlign: 'center', fontFamily: 'Nunito, sans-serif', margin: '-20px 0 0 0' }}>
             Making a difference in our community
        </p>

      </section>


      <section style={{ background: '#F0DA9D', padding: '60px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
          <img src="/images/image2.png" style={{ width: '254px', height: '409px', objectFit: 'cover' }} />
          <img src="/images/image3.png" style={{ width: '254px', height: '409px', objectFit: 'cover' }} />
          <img src="/images/image4.png" style={{ width: '254px', height: '409px', objectFit: 'cover' }} />
        </div>
      </section>

      <div style={{ borderTop: '5px solid #332421' }} />
      <Footer />
    </div>
  )
}
