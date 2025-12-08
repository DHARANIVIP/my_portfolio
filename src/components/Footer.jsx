import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa'

export function Footer() {
  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/DHARANIVIP' },
    { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/dharani-v' },
    { icon: FaEnvelope, label: 'Email', url: 'mailto:vvdharani58@gmail.com' },
    { icon: FaTwitter, label: 'Twitter', url: 'https://x.com/' },
    { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/' },
  ]

  return (
    <footer className="footer">
      <div className="footer__content">

        {/* Connect - Global (No Heading) */}
        <div className="footer__connect">
          <div className="footer__social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  boxShadow: "0 0 20px rgba(0, 212, 255, 0.6)",
                  borderColor: "#00d4ff"
                }}
                whileTap={{ scale: 0.9 }}
                title={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>© {new Date().getFullYear()} Dharani V</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

