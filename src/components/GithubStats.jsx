import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { motion } from 'framer-motion'
import { FaGithub, FaUsers, FaStar, FaCodeBranch } from 'react-icons/fa'
import './GithubStats.css'

export function GithubStats() {
    const [userStats, setUserStats] = useState(null)
    const username = 'DHARANIVIP'

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`)
                const data = await response.json()

                // Fetch repos to calculate total stars (GitHub API doesn't provide total stars directly on user object)
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
                const reposData = await reposResponse.json()
                const totalStars = Array.isArray(reposData)
                    ? reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
                    : 0

                setUserStats({
                    followers: data.followers,
                    following: data.following,
                    public_repos: data.public_repos,
                    avatar_url: data.avatar_url,
                    name: data.name || username,
                    total_stars: totalStars
                })
            } catch (error) {
                console.error('Error fetching GitHub stats:', error)
            }
        }

        fetchStats()
    }, [])

    if (!userStats) {
        return <div className="github-loading">Loading GitHub Stats...</div>
    }

    return (
        <section className="github-stats-section">
            <motion.div
                className="github-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <FaGithub className="github-icon-large" />
                <h2>Stats <br /><span className="highlight">Github Profile</span></h2>
            </motion.div>

            <div className="github-content-wrapper">
                <motion.div
                    className="profile-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="profile-header">
                        <img src={userStats.avatar_url} alt={userStats.name} className="profile-avatar" />
                        <div className="profile-info">
                            <h3>{userStats.name}</h3>
                            <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="profile-link">
                                @{username}
                            </a>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-label">Followers</span>
                            <span className="stat-value">{userStats.followers}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Following</span>
                            <span className="stat-value">{userStats.following}</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-label">Total Stars</span>
                            <span className="stat-value">{userStats.total_stars}</span>
                        </div>
                    </div>

                    <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="visit-btn">
                        Visit GitHub Profile
                    </a>
                </motion.div>

                <motion.div
                    className="contribution-graph-container"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <h3>Contribution Graph</h3>
                    <div className="calendar-wrapper">
                        <GitHubCalendar
                            username={username}
                            colorScheme="dark"
                            fontSize={12}
                            blockSize={12}
                            blockMargin={5}
                            theme={{
                                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
