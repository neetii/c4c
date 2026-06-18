import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import PageWrapper from '../../components/PageWrapper.jsx'

const images = ['/images/image2.png', '/images/image3.png', '/images/image4.png']

export default function HomePage() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 400], [0, -80])

  return (
    <PageWrapper>
      <Navbar activePage="Home" />

      <section style={{ background: '#CD3838', padding: '60px 40px', overflow: 'hidden' }}>
        <motion.div style={{ y: heroY }}>
          <motion.img
            src="/images/screenshot1.png"
            style={{ width: '985px', height: '404px', objectFit: 'cover', display: 'block', margin: '0 auto' }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}
          />
        </motion.div>
        <motion.p
          style={{ color: '#FFFFFF', fontSize: '32px', textAlign: 'center', fontFamily: 'Nunito, sans-serif', margin: '-20px 0 0 0' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
        >
          Making a difference in our community
        </motion.p>
      </section>

      <section style={{ background: '#F0DA9D', padding: '60px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px' }}>
          {images.map((src, i) => (
            <motion.img
              key={src} src={src}
              style={{ width: '254px', height: '409px', objectFit: 'cover' }}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
            />
          ))}
        </div>
      </section>

      <div style={{ borderTop: '5px solid #332421' }} />
      <Footer />
    </PageWrapper>
  )
}
