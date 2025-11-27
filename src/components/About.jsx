import { motion } from 'framer-motion'
import { aboutContent, heroContent, statsContent, timelineContent } from '../data/content'
import { SectionHeading } from './SectionHeading'
import { FaGraduationCap, FaCode, FaRocket, FaUser } from 'react-icons/fa'

export function About() {
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

                    <div className="bento-grid">
                        {/* Personal Details Card */}
                        <motion.div
                            className="bento-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h3><FaUser /> Personal Info</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {aboutContent.details.map((detail) => (
                                    <li key={detail.label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                                        <span style={{ color: 'var(--muted)' }}>{detail.label}</span>
                                        <span style={{ fontWeight: 500, textAlign: 'right' }}>{detail.value}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Highlights Cards */}
                        {aboutContent.highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                className="bento-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3>
                                    {index === 0 ? <FaCode /> : index === 1 ? <FaRocket /> : <FaGraduationCap />}
                                    Focus Area {index + 1}
                                </h3>
                                <p>{highlight}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}


