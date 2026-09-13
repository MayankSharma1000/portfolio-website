import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section className="section" id="other-work">
      <div className="section-head">
        <p className="eyebrow">More Work</p>
        <h2>Another system I built.</h2>
      </div>

      <div className="project-stack">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="project-panel"
          >
            <div className="project-content">
              <p className="project-type">02 / {project.type}</p>

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
              </div>
            </div>

            <div className="project-preview">
              <div className="preview-top">
                <span />
                <span />
                <span />
              </div>

              <div className="preview-body">
                <img src={project.image} alt={`${project.title} preview`} />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
