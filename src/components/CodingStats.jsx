import { motion } from 'framer-motion'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { FaCode, FaTrophy, FaStar, FaFire } from 'react-icons/fa'
import './CodingStats.css'

export function CodingStats() {
  const platforms = [
    {
      name: 'SkillRack',
      icon: FaCode,
      color: '#0052FF',
      url: 'https://www.skillrack.com'
    },
    {
      name: 'HackerRank',
      icon: SiHackerrank,
      color: '#00EA64',
      url: 'https://www.hackerrank.com'
    },
    {
      name: 'LeetCode',
      icon: SiLeetcode,
      color: '#FFA116',
      url: 'https://leetcode.com'
    }
  ]

  const stats = [
    { label: 'Problems Solved', value: '150+', icon: FaCode },
    { label: 'Current Streak', value: '15 Days', icon: FaFire },
    { label: 'Achievements', value: '12', icon: FaTrophy },
    { label: 'Rating', value: '4.5★', icon: FaStar }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="coding-stats-section">
      {/* Title Section */}
      <motion.div
        className="coding-stats-header"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="coding-icon-wrapper"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaCode className="coding-header-icon" />
        </motion.div>
        <h2 className="coding-stats-title">
          <motion.span
            className="coding-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Coding
          </motion.span>
          <motion.span
            className="stats-text"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Stats
          </motion.span>
        </h2>
        <motion.p
          className="coding-stats-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Passionate about problem-solving and competitive programming
        </motion.p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <stat.icon className="stat-icon" />
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Platforms Section */}
      <motion.div
        className="coding-platforms"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h3 className="platforms-title">
          Find me on
        </h3>

        <motion.div
          className="platforms-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
              style={{ '--platform-color': platform.color }}
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <platform.icon className="platform-icon" />
              <span className="platform-name">{platform.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
