import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import PageWrapper from '../../components/PageWrapper.jsx'

const fadeLeft  = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }
const fadeRight = { hidden: { opacity: 0, x:  50 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }

export default function AboutPage() {
  return (
    <PageWrapper>
      <Navbar activePage="About" />

      {/* Top Section */}
      <section style={{ display: 'flex', height: '441px', borderBottom: '5px solid #332421' }}>
        <motion.div
          variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
          whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
          style={{ width: '50%', background: '#CD3838', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '5px solid #332421', padding: '40px', boxSizing: 'border-box', cursor: 'default' }}
        >
          <h1 style={{ color: '#F0DA9D', fontSize: '64px', fontWeight: 400, fontFamily: 'Nunito, sans-serif' }}>
            Our Mission
          </h1>
        </motion.div>
        <motion.div
          variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}
          whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
          style={{ width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', boxSizing: 'border-box', borderRight: '5px solid #000', cursor: 'default' }}
        >
          <p style={{ color: '#CD3838', fontSize: '30px', lineHeight: '41px', fontFamily: 'Nunito, sans-serif' }}>
            We are dedicated to supporting caregivers in our community by providing resources, respite, and a network of support. Our mission is to empower those who care for others, ensuring they have the tools and assistance they need to thrive in their caregiving roles.
          </p>
        </motion.div>
      </section>

      {/* Bottom Section */}
      <section style={{ display: 'flex', height: '433px', borderBottom: '5px solid #332421' }}>
        <motion.div
          variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
          whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
          style={{ width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', boxSizing: 'border-box', borderRight: '5px solid #332421', cursor: 'default' }}
        >
          <p style={{ color: '#CD3838', fontSize: '32px', lineHeight: '44px', fontFamily: 'Nunito, sans-serif' }}>
            *Someone's experience with caregiving
          </p>
        </motion.div>
        <motion.div
          variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}
          whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
          style={{ width: '50%', background: '#CD3838', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', boxSizing: 'border-box', cursor: 'default' }}
        >
          <h2 style={{ color: '#F0DA9D', fontSize: '64px', fontWeight: 400, fontFamily: 'Nunito, sans-serif' }}>
            Hear their story
          </h2>
        </motion.div>
      </section>

      <div style={{ borderTop: '5px solid #332421' }} />
      <Footer />
    </PageWrapper>
  )
}
