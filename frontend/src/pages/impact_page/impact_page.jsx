import React from 'react'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'

export default function ImpactPage() {
  return (
    <div>
      <Navbar activePage="Impact" />

      {/* HEADER */
      <section style={{ background: '#CD3838', padding: '40px', textAlign: 'center' }}>
        <h1 style={{ color: '#F0DA9D', fontSize: '64px', fontWeight: 400, fontFamily: 'Nunito, sans-serif', margin: 0 }}>
            Our Impact
        </h1>
       </section>
}

      {/* GRID */
      <section style={{ borderTop: '5px solid #332421' }}>
  
        {/* Row 1 */}
        <div style={{ display: 'flex', borderBottom: '5px solid #332421' }}>
            <img src="/images/image1.png" style={{ width: '50%', height: '550px', objectFit: 'cover', borderRight: '5px solid #332421' }} />
            <div style={{ width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', padding: '40px', boxSizing: 'border-box' }}>
              <p style={{ color: '#CD3838', fontSize: '40px', lineHeight: '60px', fontFamily: 'Nunito, sans-serif' }}>
                In our Labor Day Fundraiser, we raised over $500!! This money helped us create over 50 gift baskets for the hardworking caregivers of our community, and we couldn't have done it without your help!
              </p>
            </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', padding: '40px', boxSizing: 'border-box', borderRight: '5px solid #332421' }}>
              <p style={{ color: '#CD3838', fontSize: '40px', lineHeight: '60px', fontFamily: 'Nunito, sans-serif' }}>
                This basket was one of the 1000 we have made for the caregivers in our community. This one was donated to Archit Waghmare, one of our sponsors, who is also a caregiver himself.
              </p>
            </div>
            <img src="/images/image14.png" style={{ width: '50%', height: '550px', objectFit: 'cover' }} />
        </div>

       </section>
      }

      <div style={{ borderTop: '5px solid #332421' }} />
      <Footer />
    </div>
  )
}
