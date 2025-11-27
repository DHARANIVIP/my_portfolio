import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { contactContent } from '../data/content'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ state: 'idle', message: '' })

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
    <section className="section" id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s collaborate"
        description="Open to internships, research partnerships, and community-impact initiatives."
      />

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Connect directly</h3>
          <p>{contactContent.availability}</p>
          <ul>
            <li>
              <span>Email</span>
              <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
            </li>
            <li>
              <span>Location</span>
              <p>{contactContent.location}</p>
            </li>
          </ul>
          <div className="contact-socials">
            {contactContent.socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="user_name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="user_email" type="email" placeholder="you@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me about your idea" required></textarea>
          </label>
          <button className="btn primary" type="submit" disabled={status.state === 'loading'}>
            {status.state === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          {status.message && (
            <p className={`form-status ${status.state}`}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}











