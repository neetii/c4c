import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function AboutPage() {
  return (
    <div>
      <Navbar activePage="About" />

      {/* Top Section */}
      <section style={{ display: 'flex', height: '441px', borderBottom: '5px solid #332421' }}>
        <div style={{ width: '50%', background: '#CD3838', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '5px solid #332421', padding: '40px', boxSizing: 'border-box' }}>
          <h1 style={{ color: '#F0DA9D', fontSize: '64px', fontWeight: 400, fontFamily: 'Nunito, sans-serif' }}>
            Our Mission
          </h1>
        </div>
        <div style={{ width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', boxSizing: 'border-box', borderRight: '5px solid #000' }}>
          {/* Placeholder text for now, will update with actual content later */}
          <p style={{ color: '#CD3838', fontSize: '30px', lineHeight: '41px', fontFamily: 'Nunito, sans-serif' }}>
            We are dedicated to supporting caregivers in our community by providing resources, respite, and a network of support. Our mission is to empower those who care for others, ensuring they have the tools and assistance they need to thrive in their caregiving roles.
          </p>
        </div>
      </section>

      {/* BOTTOM SECTION */
        <section style={{display: 'flex', height: '433px', borderBottom: '5px solid #332421'}}>
            <div style = {{width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', boxSizing: 'border-box', borderRight: '5px solid #332421'}}>
                <p style = {{color: '#Cd3838', fontSize: '32px', lineHeight: '44px', fontFamily: 'Nunito, sans-serif'}}>
                    *Someone's experience with caregivings
                </p>
            </div>
            <div style = {{width: '50%', background: '#CD3838', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLine: '5px solid #000', padding: '40px', boxSizing: 'border-box'}}>
                <h2 style = {{color: '#F0DA9D', fontSize: '64px', fontWeight: 400, fontFamily: 'Nunito, sans-serif'}}>
                    Hear their story
                </h2>
            </div>
        </section>      
      }

      <Footer />
    </div>
  )
}
