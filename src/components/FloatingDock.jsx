// src/components/FloatingDock.jsx

import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

function FloatingDock() {
  return (
    <div className="floating-dock">
      <a href="mailto:ms18ms12@gmail.com" aria-label="Email">
        <FiMail />
      </a>

      <a
        href="https://github.com/MayankSharma1000"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/mayank-sharma-563428200/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FiLinkedin />
      </a>

      <a
        href="/resume/Mayank-Sharma-Resume.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="Resume"
      >
        <FiFileText />
      </a>
    </div>
  );
}

export default FloatingDock;