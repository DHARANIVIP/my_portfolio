import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { projectContent } from '../data/content'
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'

export function Projects() {
  return (
    <section className="section projects-section">
      <motion.h1
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="projects-grid-zigzag">
        {projectContent.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card-zigzag ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <div className="project-card-zigzag__image">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />
              <div className="project-card-zigzag__overlay" />
            </div>

            <div className="project-card-zigzag__content">
              <h3 className="project-card-zigzag__title">{project.title}</h3>
              <p className="project-card-zigzag__description">{project.description}</p>

              <div className="project-card-zigzag__actions">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-project btn-code"
                >
                  <FaCode />
                  Code
                </a>
                {project.live.startsWith('http') ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project btn-live"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>
                ) : (
                  <Link
                    to={project.live}
                    className="btn-project btn-live"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </Link>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
