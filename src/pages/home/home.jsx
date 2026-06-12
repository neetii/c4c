import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function HomePage() {
  return (
    <div>
      <Navbar activePage="Home" />

      <section style={{ background: '#CD3838', padding: '60px 40px' }}>
        <div style = {{ width: '985px', height: '404px', background: '#00000033', margin: '0 auto' }}/>
        <p style={{ color: '#FFFFFF', fontSize: '32px', textAlign: 'center', fontFamily: 'Nunito, sans-serif', margin: '24px 0 0 0' }}>
             Making a difference in our community
        </p>

      </section>


      <section style={{ background: '#F0DA9D', padding: '60px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
          <div style={{ width: '254px', height: '409px', background: '#00000022' }} />
          <div style={{ width: '254px', height: '409px', background: '#00000022' }} />
          <div style={{ width: '254px', height: '409px', background: '#00000022' }} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
