import React from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import Navbar from '../../components/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import PageWrapper from '../../components/PageWrapper.jsx'

const fadeLeft  = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }
const fadeRight = { hidden: { opacity: 0, x:  50 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } }

function Counter({ to, prefix = '', suffix = '' }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, v => Math.round(v))

  React.useEffect(() => {
    if (isInView) animate(count, to, { duration: 2, ease: 'easeOut' })
  }, [isInView])

  return (
    <span ref={ref}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

export default function ImpactPage() {
  return (
    <PageWrapper>
      <Navbar activePage="Impact" />

      <section style={{ background: '#CD3838', padding: '40px', textAlign: 'center' }}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          style={{ color: '#F0DA9D', fontSize: '64px', fontWeight: 400, fontFamily: 'Nunito, sans-serif', margin: 0 }}
        >
          Our Impact
        </motion.h1>
      </section>

      {/* Animated Stats Bar */}
      <motion.section
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ background: '#F0DA9D', borderTop: '5px solid #332421', borderBottom: '5px solid #332421', padding: '40px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { to: 500, prefix: '$', suffix: '+ Raised' },
            { to: 50,  prefix: '',  suffix: '+ Gift Baskets' },
            { to: 1000, prefix: '', suffix: '+ Community Members' },
          ].map(({ to, prefix, suffix }) => (
            <div key={suffix} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '52px', fontWeight: 700, color: '#CD3838', fontFamily: 'Nunito, sans-serif' }}>
                <Counter to={to} prefix={prefix} suffix="" />
              </div>
              <div style={{ fontSize: '20px', color: '#332421', fontFamily: 'Nunito, sans-serif', marginTop: '4px' }}>
                {suffix}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <section style={{ borderTop: '5px solid #332421' }}>

        {/* Row 1 */}
        <div style={{ display: 'flex', borderBottom: '5px solid #332421' }}>
          <motion.img
            src="/images/image1.png"
            style={{ width: '50%', height: '550px', objectFit: 'cover', borderRight: '5px solid #332421' }}
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
          />
          <motion.div
            variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}
            whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
            style={{ width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', padding: '40px', boxSizing: 'border-box', cursor: 'default' }}
          >
            <p style={{ color: '#CD3838', fontSize: '40px', lineHeight: '60px', fontFamily: 'Nunito, sans-serif' }}>
              In our Labor Day Fundraiser, we raised over $500!! This money helped us create over 50 gift baskets for the hardworking caregivers of our community, and we couldn't have done it without your help!
            </p>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div style={{ display: 'flex' }}>
          <motion.div
            variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
            whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}
            style={{ width: '50%', background: '#F0DA9D', display: 'flex', alignItems: 'center', padding: '40px', boxSizing: 'border-box', borderRight: '5px solid #332421', cursor: 'default' }}
          >
            <p style={{ color: '#CD3838', fontSize: '40px', lineHeight: '60px', fontFamily: 'Nunito, sans-serif' }}>
              This basket was one of the 1000 we have made for the caregivers in our community. This one was donated to Archit Waghmare, one of our sponsors, who is also a caregiver himself.
            </p>
          </motion.div>
          <motion.img
            src="/images/image14.png"
            style={{ width: '50%', height: '550px', objectFit: 'cover' }}
            variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true }}
          />
        </div>

      </section>

      <div style={{ borderTop: '5px solid #332421' }} />
      <Footer />
    </PageWrapper>
  )
}
