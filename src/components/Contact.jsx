import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { contactContent } from '../data/content'
import { FaEnvelope, FaLinkedin, FaPaperPlane, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import './Contact.css'

export function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        state: 'error',
        message: 'Configure EmailJS env variables to enable submissions.',
      })
      return
    }

    setStatus({ state: 'loading', message: 'Sending…' })
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })
      setStatus({ state: 'success', message: 'Message sent! I will reply soon.' })
      formRef.current.reset()
    } catch (error) {
      setStatus({
        state: 'error',
        message: `Error: ${error.text || error.message || 'Unable to send message'}`
      })
      console.error('EmailJS Error:', error)
    }
  }

  return (
    <section className="contact-page" id="contact">
      {/* Header Section */}
      <div className="contact-header">
        <h1 className="contact-title">
          <FaEnvelope className="contact-title-icon" />
          Contact
        </h1>
        <h2 className="contact-subtitle">Contact Form</h2>
        <p className="contact-description">
          So if you are looking for someone hardworking, authentic and always up for a good
          challenge, look no further than yours truly! Lets connect and see how we can make a
          difference together:)
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info-cards">
        <div className="info-card">
          <FaLinkedin className="info-card-icon" />
          <div className="info-card-content">
            <h3 className="info-card-title">Linkedin</h3>
            <a
              href="https://www.linkedin.com/in/dharani-v-92194a314"
              target="_blank"
              rel="noopener noreferrer"
              className="info-card-link"
            >
              dharani-v-92194a314
            </a>
          </div>
        </div>
        <div className="info-card">
          <MdEmail className="info-card-icon" />
          <div className="info-card-content">
            <h3 className="info-card-title">Email</h3>
            <a
              href={`mailto:${contactContent.email}`}
              className="info-card-link"
            >
              {contactContent.email}
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form ref={formRef} className="modern-contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="user_name">
              <FaUser className="label-icon" />
              Name
            </label>
            <input
              id="user_name"
              name="user_name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">
              <MdEmail className="label-icon" />
              Email
            </label>
            <input
              id="user_email"
              name="user_email"
              type="email"
              placeholder="you@email.com"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">
            <FaPaperPlane className="label-icon" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your idea"
            required
          />
        </div>

        <button
          className="submit-btn"
          type="submit"
          disabled={status.state === 'loading'}
        >
          {status.state === 'loading' ? 'Sending…' : 'Send Message'}
          <FaPaperPlane className="btn-icon" />
        </button>

        {status.message && (
          <p className={`form-status ${status.state}`}>{status.message}</p>
        )}
      </form>

      {/* Glowing Light Effect */}
      <div className="section-divider-light"></div>

      {/* Schedule Meeting Section */}
      <div className="meeting-section">
        <h2 className="meeting-title">Schedule a Meeting</h2>
        <p className="meeting-description">
          This is powered by Calendy. Hence, it may take some time for loading. (Note: You have to accept the cookies by Calendy in order to Schedule a meet)
        </p>
        <div className="calendly-container" style={{ height: '700px' }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/vvdharani57/30min"
            style={{ minWidth: '320px', height: '100%' }}
          />
        </div>
      </div>

      {/* Google Calendar Section */}
      <div className="calendar-section">
        <h2 className="meeting-title">See my Calendar</h2>
        <div className="google-calendar-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=vvdharani58%40gmail.com&ctz=Asia%2FKolkata"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
