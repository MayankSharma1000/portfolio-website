// src/components/Projects.jsx

import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="eyebrow">Featured Work</p>
        <h2>Projects built with purpose.</h2>
      </div>

      <div className="project-stack">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="project-panel"
          >
            <div className="project-content">
              <p className="project-type">
                {String(index + 1).padStart(2, "0")} / {project.type}
              </p>

              <div className="project-meta">
                <span>{project.year}</span>
                <span>{project.status}</span>
              </div>

              <h3>{project.title}</h3>
              <h4>{project.subtitle}</h4>
              <p>{project.description}</p>

              <div className="tech-row">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  <FiGithub /> GitHub Repository <FiArrowUpRight />
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Live Website <FiArrowUpRight />
                  </a>
                )}
              </div>
            </div>

            <div className="project-preview">
              <div className="preview-top">
                <span />
                <span />
                <span />
              </div>

              <div className="preview-body">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} preview`} />
                ) : (
                  <div className="preview-placeholder">
                    <p>{project.title}</p>
                    <h5>{project.subtitle}</h5>
                    <span>Screenshot space reserved</span>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;