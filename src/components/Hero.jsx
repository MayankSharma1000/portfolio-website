import { motion } from "framer-motion";
// import { FiGithub } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="hero-content"
      >
        <p className="eyebrow">
          Full-Stack Developer • AI-Powered Applications
        </p>

        <div className="availability">
          Available for Software Developer Roles
        </div>

        <h1>
          Mayank <br /> Sharma.
        </h1>

        <p className="hero-subtitle">
          Full-Stack Developer specializing in React, Node.js,
          MongoDB and AI-powered applications.

          Building secure, scalable and user-centric software
          solutions that solve real-world problems.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn primary">
            View Work
          </a>

          <a
            href="/resume/Mayank-Sharma-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            Resume
          </a>

          <a
            href="https://github.com/MayankSharma1000"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            GitHub <FiGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/mayank-sharma-563428200/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            LinkedIn <FiLinkedin />
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
            <p>Featured Dashboard</p>
            <h3>Smart Expense Tracker</h3>

            <div className="mini-stats">
              <div>
                <strong>₹85K</strong>
                <span>Tracked</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Ready</span>
              </div>
            </div>

            <div className="chart-lines">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;