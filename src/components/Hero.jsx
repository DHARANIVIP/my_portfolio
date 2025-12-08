import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { animate, stagger } from 'animejs'
import { heroContent, projectContent } from '../data/content'
import { FaGithub, FaExternalLinkAlt, FaTwitter, FaLinkedin, FaDownload, FaEnvelope } from 'react-icons/fa'
import { SiGit, SiTensorflow, SiPython, SiReact, SiJavascript, SiNodedotjs } from 'react-icons/si'
import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import { JokeSection } from './JokeSection'
import { LetsTalkSection } from './LetsTalkSection'

export function Hero() {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % heroContent.roles.length
            const fullText = heroContent.roles[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 30 : 150)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed])



    useEffect(() => {
        // Anime.js v4 animation for the greeting text
        animate('.hero-home__title .letter', {
            y: [
                { to: -44, duration: 600, ease: 'outExpo' },
                { to: 0, duration: 800, ease: 'outBounce', delay: 100 }
            ],
            rotate: {
                from: -360,
                to: 0,
                duration: 1400,
                ease: 'inOutCirc'
            },
            delay: stagger(50),
            loop: true,
            loopDelay: 1000
        });
    }, [])

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects-preview')
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const techIcons = [
        { icon: SiReact, label: 'React', url: 'https://react.dev/' },
        { icon: SiPython, label: 'Python', url: 'https://www.python.org/' },
        { icon: SiJavascript, label: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { icon: SiTensorflow, label: 'TensorFlow', url: 'https://www.tensorflow.org/' },
        { icon: SiGit, label: 'Git', url: 'https://git-scm.com/' },
        { icon: SiNodedotjs, label: 'Node.js', url: 'https://nodejs.org/' },
    ]

    const socialLinks = [
        { icon: FaGithub, label: 'GitHub', url: 'https://github.com/DHARANIVIP' },
        { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/dharani-v' },
        { icon: FaTwitter, label: 'Twitter', url: 'https://x.com/' },
    ]

    return (
        <section className="hero-home-scrollable">
            {/* Hero Section */}
            <div className="hero-home__wrapper">
                <div className="hero-home__container">

                    <motion.div
                        className="hero-home__content"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-home__title">
                            <span className="text-wrapper">
                                {heroContent.greeting.split('').map((char, index) => (
                                    <span key={index} className="letter" style={{ display: 'inline-block' }}>
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                            </span>
                            <span className="subtitle" style={{ minHeight: '1.2em', display: 'block' }}>
                                {text}
                                <span className="cursor">|</span>
                            </span>
                        </h1>

                        <p className="hero-home__bio">
                            {heroContent.description}
                        </p>

                        <div className="hero-home__cta">
                            <a href="/resume/dharani_resume.pdf" download="Dharani_Resume.pdf" className="btn-primary">
                                Download CV <FaDownload />
                            </a>
                            <Link to="/contact" className="btn-secondary">
                                Contact Me <FaEnvelope />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-home__image-container"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                duration: 8,
                                delay: 0
                            }}
                        >
                            <img
                                src={logo}
                                alt="Developer Avatar"
                                className="hero-home__avatar"
                            />
                        </motion.div>
                    </motion.div>

                </div>

                {/* Scroll Down Indicator */}
                <motion.div
                    className="scroll-down-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    onClick={scrollToProjects}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="scroll-content">
                        <span className="scroll-text">Swipe Down</span>
                        <div className="arrow-symbols">
                            <span className="arrow">↓</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Projects Preview Section */}
            <div id="projects-preview" className="hero-projects-preview">
                <div className="hero-projects-preview__container">
                    <motion.h2
                        className="hero-projects-preview__title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>

                    <div className="hero-projects-preview__grid">
                        {projectContent.slice(0, 3).map((project, index) => (
                            <motion.article
                                key={project.title}
                                className="hero-project-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="hero-project-card__image">
                                    <img src={project.image} alt={project.title} />
                                    <div className="hero-project-card__overlay" />
                                </div>

                                <div className="hero-project-card__content">
                                    <h3 className="hero-project-card__title">{project.title}</h3>
                                    <p className="hero-project-card__description">{project.description}</p>

                                    <div className="hero-project-card__actions">
                                        <a href={project.live} target="_blank" rel="noreferrer" className="btn-project-preview btn-live">
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                        <a href={project.code} target="_blank" rel="noreferrer" className="btn-project-preview btn-code">
                                            <FaGithub /> Code
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Area of Interest Section */}
                    <motion.div
                        className="hero-interests"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            className="hero-interests__title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Area of Interest
                        </motion.h2>

                        <div className="hero-interests__grid">
                            <motion.div
                                className="interest-card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="interest-card__icon">
                                    <SiTensorflow />
                                </div>
                                <h3 className="interest-card__title">AI & Machine Learning</h3>
                                <p className="interest-card__description">
                                    Exploring deep learning, neural networks, and building intelligent systems with TensorFlow and PyTorch
                                </p>
                            </motion.div>

                            <motion.div
                                className="interest-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="interest-card__icon">
                                    <SiPython />
                                </div>
                                <h3 className="interest-card__title">Data Analysis & Visualization</h3>
                                <p className="interest-card__description">
                                    Analyzing complex datasets, extracting insights, and creating compelling visualizations using Python and modern analytics tools
                                </p>
                            </motion.div>

                            <motion.div
                                className="interest-card"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="interest-card__icon">
                                    <SiReact />
                                </div>
                                <h3 className="interest-card__title">Full-Stack Development</h3>
                                <p className="interest-card__description">
                                    Building modern, responsive web applications with React, JavaScript, and seamless backend integrations
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Joke Section */}
            <JokeSection />
            {/* Let's Talk Section */}
            <LetsTalkSection />

            {/* Projects Preview Section - Footer Placeholder */}
            <div id="footer-placeholder" className="hero-projects-preview">
                <div className="hero-projects-preview__container">
                    {/* Footer Section */}
                    <motion.div
                        className="hero-footer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
