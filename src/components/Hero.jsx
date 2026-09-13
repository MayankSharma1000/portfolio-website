import { motion } from "framer-motion";
import { FiArrowDown, FiGithub, FiLinkedin } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="hero-content"
      >
        <p className="eyebrow">Full-Stack Developer · Backend · AI</p>

        <div className="availability">
          <span />
          Open to work · Software Engineering
        </div>

        <h1>
          Mayank <br /> Sharma<span>.</span>
        </h1>

        <p className="hero-subtitle">
          Computer Science Engineer building full-stack applications and
          backend systems with React, Node.js, Express.js, MongoDB, Docker,
          and LLM APIs.
        </p>

        <p className="hero-detail">
          I enjoy taking a problem from interface to API, database, and
          application logic, then debugging the pieces until they work
          together as one system.
        </p>

        <div className="hero-actions">
          <a href="#file-processing" className="btn primary">
            Explore My Work <FiArrowDown />
          </a>

          <a
            href="/resume/Mayank_Sharma_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            View Resume
          </a>

          <a
            href="https://github.com/MayankSharma1000"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mayank-sharma-563428200/"
            target="_blank"
            rel="noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, delay: 0.2 }}
        className="hero-visual"
      >
        <div className="device-card">
          <div className="device-top">
            <span />
            <span />
            <span />
          </div>

          <div className="device-screen">
            <div className="hero-window-label">
              <span>BUILD / DEBUG / SHIP</span>
              <i />
            </div>

            <p>Current focus</p>
            <h3>Backend Systems</h3>

            <div className="mini-stats">
              <div>
                <strong>API</strong>
                <span>Node + Express</span>
              </div>

              <div>
                <strong>DATA</strong>
                <span>MongoDB</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>LLM APIs</span>
              </div>
            </div>

            <div className="terminal-card">
              <span>$</span>
              <p>processing jobs...</p>
              <strong>batch → files → jobs → results</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
