import { motion } from 'framer-motion'
import { FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa'
import './LinkedInPosts.css'
import './LinkedInPosts.css'



import { heroContent, linkedInPosts } from '../data/content'

export function LinkedInPosts() {
    const profile = {
        name: 'Dharani V',
        headline: heroContent.roles.join(' | ') + ' | ' + heroContent.location,
        followers: '347+',
        image: heroContent.heroImage,
        url: 'https://www.linkedin.com/in/dharani-v-92194a314'
    }

    const posts = linkedInPosts


    return (
        <section className="linkedin-section">
            <motion.div
                className="linkedin-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <FaLinkedin className="linkedin-logo" />
                <h2>Latest <br /><span className="highlight">LinkedIn Post</span></h2>
            </motion.div>

            <div className="linkedin-content">
                {/* Profile Card */}
                <motion.div
                    className="linkedin-profile-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="profile-top">
                        <img src={profile.image} alt={profile.name} className="linkedin-avatar" />
                        <div className="profile-details">
                            <h3>{profile.name}</h3>
                            <p className="profile-followers">{profile.followers} Followers</p>
                            <p className="profile-headline">{profile.headline}</p>
                        </div>
                    </div>
                    <a href={profile.url} target="_blank" rel="noreferrer" className="linkedin-follow-btn">
                        <FaLinkedin /> Follow me on LinkedIn
                    </a>
                </motion.div>

                {/* Posts Slider/Grid */}
                <div className="linkedin-posts-grid">
                    {posts.map((post, index) => (
                        <motion.a
                            href={post.url}
                            target="_blank"
                            rel="noreferrer"
                            key={post.id}
                            className="linkedin-post-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                            viewport={{ once: true }}
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                        >
                            <div className="post-header">
                                <div className="post-author">
                                    <span className="post-name">{profile.name}</span>
                                    <span className="post-date">{post.date}</span>
                                </div>
                            </div>
                            <div className="post-body">
                                <p className="post-content">{post.content}</p>
                                {post.image && (
                                    <div className="post-image-container">
                                        <img src={post.image} alt="Post attachment" className="post-image" />
                                    </div>
                                )}
                                {post.video && (
                                    <div className="post-image-container">
                                        <video src={post.video} controls className="post-video" />
                                    </div>
                                )}
                                <span className="read-more">Read More</span>
                            </div>
                            <div className="post-footer">
                                <span className="footer-item"><FaLinkedin /> {post.likes}</span>
                                <span className="footer-item">{post.comments} comments</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
