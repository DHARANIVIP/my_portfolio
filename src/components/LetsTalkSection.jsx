import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaEdit } from 'react-icons/fa';
import './LetsTalkSection.css';

export function LetsTalkSection() {
    return (
        <section className="lets-talk-section">
            <div className="lets-talk-container">
                <motion.div
                    className="lets-talk-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="lets-talk-text">
                        <motion.div
                            className="lets-talk-icon-wrapper"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <span className="lets-talk-emoji">👋</span>
                        </motion.div>

                        <h2 className="lets-talk-title">
                            Lets talk!
                        </h2>

                        <p className="lets-talk-description">
                            If you have questions or would just like to say hello, please contact me.
                            I will do my best to get back to you as soon as possible!
                        </p>
                    </div>

                    <motion.div
                        className="lets-talk-illustration"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src="/handshake.png"
                            alt="Handshake illustration"
                            className="handshake-image"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="lets-talk-actions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link to="/contact" className="lets-talk-btn btn-contact">
                        <FaPaperPlane />
                        Contact Me
                    </Link>
                    <a
                        href="https://forms.visme.co/formsPlayer/y71xwd1r-dharani-portfolio-feedback"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lets-talk-btn btn-feedback"
                    >
                        <FaEdit />
                        Write a feedback
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
