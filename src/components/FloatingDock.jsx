import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlay, FaPause, FaSun, FaMoon, FaFont } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import './FloatingDock.css'

export function FloatingDock() {
    const { theme, toggleTheme } = useTheme()
    const [isPlaying, setIsPlaying] = useState(false)
    const [fontSize, setFontSize] = useState(100)
    const [showFontPopup, setShowFontPopup] = useState(false)
    const audioRef = useRef(null)

    useEffect(() => {
        audioRef.current = new Audio('/Roa-Haru-chosic.com_.mp3')
        audioRef.current.loop = true // Optional: loop the music

        const handleEnded = () => setIsPlaying(false)
        audioRef.current.addEventListener('ended', handleEnded)

        return () => {
            if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.removeEventListener('ended', handleEnded)
            }
        }
    }, [])

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play().catch(error => console.error("Audio play failed:", error))
        }
        setIsPlaying(!isPlaying)
    }

    const toggleFontSize = (action) => {
        let newSize = fontSize
        if (action === 'increase') {
            newSize = Math.min(fontSize + 10, 150) // Max 150%
        } else if (action === 'decrease') {
            newSize = Math.max(fontSize - 10, 70) // Min 70%
        }
        setFontSize(newSize)
        document.documentElement.style.fontSize = `${(newSize / 100) * 16}px`
    }

    return (
        <div className="floating-dock-container">
            <AnimatePresence>
                {showFontPopup && (
                    <motion.div
                        className="font-popup"
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button className="font-popup-btn" onClick={() => toggleFontSize('decrease')}>A-</button>
                        <span className="font-popup-display">{fontSize}%</span>
                        <button className="font-popup-btn" onClick={() => toggleFontSize('increase')}>A+</button>
                        <div className="popup-arrow" />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="floating-dock"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* Play/Pause Button */}
                <button className="dock-btn play-btn" onClick={togglePlay} aria-label="Play Music">
                    {isPlaying ? <FaPause /> : <FaPlay style={{ marginLeft: '2px' }} />}
                </button>

                {/* Theme Toggle */}
                <button className="dock-btn theme-btn" onClick={toggleTheme} aria-label="Toggle Theme">
                    {theme === 'dark' ? <FaMoon /> : <FaSun />}
                </button>

                {/* Font Size Toggle Button */}
                <button
                    className={`dock-btn font-btn ${showFontPopup ? 'active' : ''}`}
                    onClick={() => setShowFontPopup(!showFontPopup)}
                    aria-label="Font Settings"
                >
                    <FaFont />
                </button>
            </motion.div>
        </div>
    )
}
