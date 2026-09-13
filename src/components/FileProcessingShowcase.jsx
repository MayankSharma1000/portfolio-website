import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { fileProcessingSystem } from "../data/portfolioData";

function FileProcessingShowcase() {
  return (
    <section className="section file-processing-showcase" id="file-processing">
      <motion.div
        className="fps-intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <div className="fps-kicker">
            <span>01</span>
            <span>{fileProcessingSystem.type}</span>
            <span>{fileProcessingSystem.year}</span>
          </div>

          <h2>{fileProcessingSystem.title}</h2>
          <h3>{fileProcessingSystem.subtitle}</h3>
        </div>

        <div className="fps-summary">
          <p>{fileProcessingSystem.description}</p>

          <div className="fps-actions">
            {fileProcessingSystem.github && (
              <a
                href={fileProcessingSystem.github}
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                <FiGithub />
                View Repository
                <FiArrowUpRight />
              </a>
            )}

            <span className="project-status">
              <i />
              {fileProcessingSystem.status}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="fps-architecture"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="fps-architecture-header">
          <span>PROCESSING FLOW</span>
          <span>BACKEND ARCHITECTURE</span>
        </div>

        <div className="fps-flow">
          {fileProcessingSystem.flow.map((item, index) => (
            <motion.div
              className="fps-flow-step"
              key={item.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="fps-number">{item.number}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
              {index < fileProcessingSystem.flow.length - 1 && (
                <span className="fps-arrow">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="fps-engineering">
        {fileProcessingSystem.engineering.map((item, index) => (
          <motion.article
            key={item.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <span>{item.number}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="fps-tech">
        {fileProcessingSystem.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default FileProcessingShowcase;
