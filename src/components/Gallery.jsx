import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryContent, certificateContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { FaTimes } from 'react-icons/fa'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
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
  }, [selectedImage])

  return (
    <section className="section" id="gallery">
      <SectionHeading
        eyebrow="Gallery"
        title="Snapshots & achievements"
        description="Moments that fuel my ambition inside and outside the lab."
      />

      <div className="gallery-grid">
        {galleryContent.map((item, index) => (
          <motion.figure
            key={item.title}
            className="gallery-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={item.image} alt={item.title} loading="lazy" />
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ marginTop: '80px', marginBottom: '40px' }}
      >
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Achievements & Certifications</h2>
        <p style={{ color: 'var(--muted)' }}>Recognitions of my technical journey.</p>
      </motion.div>

      <div className="certificates-grid">
        {certificateContent.map((cert, index) => (
          <motion.article
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="certificate-card"
          >
            <div
              className="certificate-image"
              onClick={() => setSelectedImage(cert.image)}
              style={{ cursor: 'pointer' }}
            >
              <img src={cert.image} alt={cert.title} loading="lazy" />
              <div className="certificate-overlay-hint">
                <span>View Certificate</span>
              </div>
            </div>
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <div className="cert-footer">
                <span>{cert.issuer}</span>
                <span>{cert.year}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="image-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="image-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="image-modal-close"
                onClick={() => setSelectedImage(null)}
              >
                <FaTimes />
              </button>
              <img src={selectedImage} alt="Certificate Preview" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section >
  )
}











