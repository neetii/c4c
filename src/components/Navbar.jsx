import React from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Impact', path: '/impact' },
  { label: 'Donate', path: '/donate' },
]

export default function Navbar({ activePage }) {
  return (
    <header style={{ background: '#F0DA9D', borderBottom: '5px solid #332421' }}>
      <div style={{
        maxWidth: '1512px', margin: '0 auto', padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '111px'
      }}>
        <Link to="/" style={{ fontSize: '64px', color: '#CD3838', fontWeight: 400, textDecoration: 'none', fontFamily: 'Nunito, sans-serif', lineHeight: 1 }}>
          C4C
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F0DA9D', padding: '4px 8px', borderRadius: '12px' }}>
          {navItems.map(({ label, path }) => {
            const isActive = activePage === label
            return (
              <Link
                key={label}
                to={path}
                style={{
                  padding: '8px 16px',
                  borderRadius: isActive ? '12px' : '8px',
                  fontSize: '24px',
                  color: isActive ? '#CD3838' : '#1E1E1E',
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: 'none',
                  fontFamily: 'Nunito, sans-serif',
                }}
              >
                {label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
