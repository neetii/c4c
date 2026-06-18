import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('http://127.0.0.1:8001/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    })
    if (res.ok) {
      localStorage.setItem('c4c-admin-token', 'c4c-admin-token')
      navigate('/admin')
    } else {
      setError('Incorrect password')
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#CD3838', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ background: '#F0DA9D', padding: '48px', borderRadius: '8px', width: '360px' }}>
        <h1 style={{ color: '#CD3838', fontFamily: 'Nunito, sans-serif', fontWeight: 400, marginBottom: '32px', textAlign: 'center' }}>
          Admin Login
        </h1>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            width: '100%', padding: '10px 14px', marginBottom: '16px',
            border: '1px solid #CD3838', borderRadius: '4px',
            fontSize: '16px', fontFamily: 'Nunito, sans-serif',
            background: '#F0DA9D', boxSizing: 'border-box', outline: 'none'
          }}
        />
        {error && <p style={{ color: '#CD3838', fontFamily: 'Nunito, sans-serif', marginBottom: '12px' }}>{error}</p>}
        <button type="submit" style={{
          width: '100%', padding: '12px',
          background: '#CD3838', color: '#F0DA9D',
          border: 'none', borderRadius: '4px',
          fontSize: '18px', fontFamily: 'Nunito, sans-serif',
          cursor: 'pointer', fontWeight: 600
        }}>
          Login
        </button>
      </form>
    </div>
  )
}
