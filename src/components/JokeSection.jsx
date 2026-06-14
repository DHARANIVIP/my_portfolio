import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSyncAlt } from 'react-icons/fa';
import './JokeSection.css';

const jokes = [
    { q: "Why aren't cryptocurrency engineers allowed to vote?", a: "Because they're miners!" },
    { q: "Why did the developer go broke?", a: "Because he used up all his cache." },
    { q: "Why did the React component feel sad?", a: "Because it didn't have any state." },
    { q: "Why do programmers prefer dark mode?", a: "Because light attracts bugs." },
    { q: "How many programmers does it take to change a light bulb?", a: "None, that's a hardware problem." },
    { q: "Why was the JavaScript developer sad?", a: "Because he didn't know how to 'null' his feelings." },
    { q: "Why do Java developers wear glasses?", a: "Because they don't C#." },
    { q: "What is a programmer's favorite hangout place?", a: "Foo Bar." },
    { q: "Why did the database administrator leave his wife?", a: "She had one-to-many relationships." },
    { q: "Why don't bachelors like Git?", a: "Because they are afraid to commit." }
];

export function JokeSection() {
    const [currentJoke, setCurrentJoke] = useState(null);
    const [isRotating, setIsRotating] = useState(false);

    useEffect(() => {
        // Set initial joke
        setCurrentJoke(jokes[0]);
    }, []);

    const getRandomJoke = () => {
        setIsRotating(true);
        setTimeout(() => setIsRotating(false), 500); // Stop rotation after 500ms

        let newJoke;
        do {
            const randomIndex = Math.floor(Math.random() * jokes.length);
            newJoke = jokes[randomIndex];
        } while (newJoke === currentJoke && jokes.length > 1);

        setCurrentJoke(newJoke);
    };

    return (
        <section className="joke-section">
            <div className="joke-container">
                <motion.div 
                    className="joke-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="joke-icon-wrapper">
                        <span className="joke-emoji">☺</span>
                    </div>
                    <h2 className="joke-title">
                        Special <br />
                        <span className="highlight">Joke For You!</span>
                    </h2>
                    <p className="joke-subtitle">If you came this far, then you deserve a Joke!!</p>
                </motion.div>

                <div className="joke-card-wrapper">
                    <AnimatePresence mode='wait'>
                        {currentJoke && (
                            <motion.div 
                                key={currentJoke.q}
                                className="joke-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="joke-content">
                                    <p className="joke-question">
                                        <span className="q-label">Q.</span> {currentJoke.q}
                                    </p>
                                    <p className="joke-answer">
                                        <span className="a-label">A.</span> {currentJoke.a}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <motion.div 
                    className="joke-actions"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <button onClick={getRandomJoke} className="refresh-btn">
                        <motion.span 
                            animate={{ rotate: isRotating ? 360 : 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="refresh-icon"
                        >
                            <FaSyncAlt />
                        </motion.span>
                        Refresh
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
