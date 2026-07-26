import { motion } from "framer-motion";
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
          Software Engineering • Full-Stack • AI
        </p>

        <div className="availability">
          Open to Software Engineering Opportunities
        </div>

        <h1>
          Mayank <br /> Sharma.
        </h1>

        <p className="hero-subtitle">
          Software developer working across frontend, backend, full-stack,
          APIs, databases, AI integrations, security, and product engineering.
          I build complete applications and adapt across the stack wherever
          strong engineering, problem solving, and fast learning are needed.
        </p>

        <div className="hero-actions">
          <a href="#smartmoney" className="btn primary">
            View Flagship Project
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
            <p>Flagship Product</p>
            <h3>SmartMoney</h3>

            <div className="mini-stats">
              <div>
                <strong>Full</strong>
                <span>Stack</span>
              </div>

              <div>
                <strong>API</strong>
                <span>Driven</span>
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
