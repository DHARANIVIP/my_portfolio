import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/skills', label: 'Skills' },
        { to: '/projects', label: 'Projects' },
        { to: '/gallery', label: 'Gallery' },

        { to: '/contact', label: 'Contact' },
    ]

    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <div className="brand-dot" />
                <span>Dharani V</span>
            </div>

            <button
                className="navbar__toggle"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle navigation"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) => isActive ? 'is-active' : ''}
                        onClick={() => setIsOpen(false)}
                    >
                        {link.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}
