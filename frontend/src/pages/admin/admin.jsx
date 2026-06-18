import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function AdminPage() {
  const [contacts, setContacts] = React.useState([])
  const [donations, setDonations] = React.useState([])
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!localStorage.getItem('c4c-admin-token')) {
      navigate('/admin/login')
      return
    }
    fetch('http://127.0.0.1:8001/admin/contacts')
      .then(r => r.json())
      .then(setContacts)
    fetch('http://127.0.0.1:8001/admin/donations')
      .then(r => r.json())
      .then(setDonations)
  }, [])

  const logout = () => {
    localStorage.removeItem('c4c-admin-token')
    navigate('/admin/login')
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Nunito, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#CD3838', margin: 0 }}>Admin Dashboard</h1>
        <button onClick={logout} style={{
          padding: '10px 24px', background: '#CD3838', color: '#F0DA9D',
          border: 'none', borderRadius: '4px', fontSize: '16px',
          fontFamily: 'Nunito, sans-serif', cursor: 'pointer'
        }}>
          Logout
        </button>
      </div>

      <h2 style={{ color: '#332421', marginBottom: '16px' }}>Contact Submissions</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '60px' }}>
        <thead>
          <tr style={{ background: '#CD3838', color: '#F0DA9D' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Message</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(c => (
            <tr key={c.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '12px' }}>{c.first_name} {c.last_name}</td>
              <td style={{ padding: '12px' }}>{c.email}</td>
              <td style={{ padding: '12px' }}>{c.message}</td>
              <td style={{ padding: '12px' }}>{c.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ color: '#332421', marginBottom: '16px' }}>Donations</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#CD3838', color: '#F0DA9D' }}>
            <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Amount</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {donations.map(d => (
            <tr key={d.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td style={{ padding: '12px' }}>{d.donor_name}</td>
              <td style={{ padding: '12px' }}>{d.donor_email}</td>
              <td style={{ padding: '12px' }}>${d.amount}</td>
              <td style={{ padding: '12px' }}>{d.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
