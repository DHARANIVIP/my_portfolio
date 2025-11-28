import { motion } from 'framer-motion'
import { aboutContent, heroContent, statsContent, timelineContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { FaGraduationCap, FaCode, FaRocket, FaUser } from 'react-icons/fa'
import './About.css'
import { LinkedInPosts } from './LinkedInPosts'

export function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <section className="section" id="about">
            <div className="about-container">

                {/* Split Intro Section */}
                <div className="about-split">
                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img src={heroContent.heroImage} alt="Profile" />
                        <div className="about-image-glow" />
                    </motion.div>

                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading
                            eyebrow="About Me"
                            title="Curiosity-driven & Impact-focused"
                            description=""
                        />
                        <p className="about-lead">
                            {aboutContent.bio.split('.')[0]}.
                        </p>
                        <p className="about-text">
                            {aboutContent.bio.split('.').slice(1).join('.')}
                        </p>

                        {/* Stats Strip */}
                        <div className="stats-strip">
                            {statsContent.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Journey Timeline */}
                <div className="timeline-section">
                    <SectionHeading
                        eyebrow="My Journey"
                        title="Path to Engineering"
                        description="A timeline of my academic and technical evolution."
                    />

                    <div className="timeline-container">
                        {timelineContent.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="timeline-dot" />
                                <div className="timeline-content">
                                    <span className="timeline-period">{item.period}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Highlights Bento Grid */}
                <div className="highlights-section">
                    <SectionHeading
                        eyebrow="Highlights"
                        title="What Defines Me"
                        description="Key attributes and focus areas."
                    />

                    <motion.div
                        className="bento-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Personal Details Card */}
                        <motion.div
                            className="bento-card"
                            variants={itemVariants}
                        >
                            <h3><FaUser /> Personal Info</h3>
                            <ul className="personal-info-list">
                                {aboutContent.details.map((detail) => (
                                    <li key={detail.label} className="personal-info-item">
                                        <span className="info-label">{detail.label}</span>
                                        <span className="info-value">{detail.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Highlights Cards */}
                        {aboutContent.highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="bento-card"
                                variants={itemVariants}
                            >
                                <h3>
                                    {index === 0 ? <FaCode /> : index === 1 ? <FaRocket /> : <FaGraduationCap />}
                                    Focus Area {index + 1}
                                </h3>
                                <p>{highlight}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* LinkedIn Section */}
                <LinkedInPosts />

            </div>
        </section>
    )
}


