import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { SectionHeading } from './SectionHeading'
import { certificateContent } from '../data/content'
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      // Return cleanup function
      return () => {
        // Restore scroll position
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''

        // Restore scroll position
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1)
        }
      }
    } else {
      // Ensure body styles are cleared when no modal is open
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
    }
  }, [selectedCert])


  return (
    <section className="section certificates-section">
      <SectionHeading
        title="Certifications"
        eyebrow="Credentials"
        description="Professional certifications and achievements validating my expertise."
      />

      <div className="certificates-grid">
        {certificateContent.map((cert, index) => (
          <motion.article
            key={cert.title}
            className="certificate-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="certificate-image">
              <img src={cert.image} alt={cert.title} />
              <div className="certificate-overlay">
                <button
                  className="btn-view-cert"
                  onClick={() => setSelectedCert(cert)}
                >
                  View Certificate <FaExternalLinkAlt />
                </button>
              </div>
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-desc">{cert.description}</p>
              <span className="certificate-year">{cert.year}</span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '20px',
              cursor: 'pointer'
            }}
          >
            <motion.button
              className="modal-close-btn"
              onClick={() => setSelectedCert(null)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                fontSize: '1.5rem',
                backdropFilter: 'blur(10px)',
                zIndex: 1001,
                transition: 'all 0.3s ease'
              }}
            >
              <FaTimes />
            </motion.button>

            <motion.div
              className="certificate-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                position: 'relative',
                cursor: 'default'
              }}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  padding: '40px 30px 30px',
                  borderBottomLeftRadius: '12px',
                  borderBottomRightRadius: '12px',
                  color: 'white'
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '8px',
                  fontWeight: '700'
                }}>
                  {selectedCert.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#a0aec0',
                  marginBottom: '8px'
                }}>
                  {selectedCert.issuer} • {selectedCert.year}
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#cbd5e0',
                  lineHeight: '1.6'
                }}>
                  {selectedCert.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
