import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projectContent } from '../data/content'
import { FaExternalLinkAlt, FaCode, FaSearch, FaArrowRight } from 'react-icons/fa'
import './Projects.css'

export function Projects() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projectContent.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h4 className="breadcrumb">../projects</h4>
        <h1 className="main-title">
          <span className="outline-text">Projects</span>
          <br />
          <span className="filled-text">Project Works</span>
        </h1>
        <p className="projects-subtitle">
          Here you can see some of the work I have done. Feel free to browse and explore the projects to see how they were created, the technologies used, and the features implemented.
        </p>

        <div className="search-container">
          <label htmlFor="search">Search by project name</label>
          <div className="search-input-wrapper">
            <input
              type="text"
              id="search"
              placeholder="Type here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>
        </div>
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-list-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>

            <div className="project-details">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-stack">
                <h3>Tech Stack:</h3>
                <div className="stack-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.live.startsWith('http') ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="view-project-link"
                  >
                    View Project <FaArrowRight />
                  </a>
                ) : (
                  <Link to={project.live} className="view-project-link">
                    View Project <FaArrowRight />
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
