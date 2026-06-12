import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: '#CD3838', padding: '48px 40px' }}>
      <div style={{ maxWidth: '1512px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '32px', marginTop: '32px' }}>

          {/* Col 1 */}
          <div>
            <h3 style={{ fontSize: '36px', fontWeight: 400, color: '#F0DA9D', margin: '0 0 16px 0', fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '24px', color: '#F0DA9D', opacity: 0.55, fontFamily: 'Nunito, sans-serif' }}>
              <li style={{ marginBottom: '12px' }}>Dolor sit</li>
              <li style={{ marginBottom: '12px' }}>Elit sed</li>
              <li>Ut enim</li>
            </ul>
          </div>

          {/* Col 2: Directories */}
          <div>
            <h3 style={{ fontSize: '36px', fontWeight: 400, color: '#F0DA9D', margin: '0 0 16px 0', fontFamily: 'Nunito, sans-serif' }}>Directories</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '24px', color: '#F0DA9D', opacity: 0.55, fontFamily: 'Nunito, sans-serif' }}>
              <li style={{ marginBottom: '12px' }}>Login/Signup</li>
              <li style={{ marginBottom: '12px' }}>About Us</li>
              <li>Testimonials</li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 style={{ fontSize: '48px', fontWeight: 400, color: '#F0DA9D', margin: '0 0 16px 0', fontFamily: 'Nunito, sans-serif' }}>Care4Caregivers</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '24px', color: '#F0DA9D', opacity: 0.55, fontFamily: 'Nunito, sans-serif' }}>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0DA9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                832-938-5046
              </li>
              <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0DA9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                ayman.virani@gmail.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F0DA9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @care4caregivers_
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ textAlign: 'right', marginTop: '48px' }}>
          <p style={{ fontSize: '15px', color: '#FFFFFF', margin: 0, fontFamily: 'Nunito, sans-serif' }}>
            © 2025 Care for Caregivers. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
