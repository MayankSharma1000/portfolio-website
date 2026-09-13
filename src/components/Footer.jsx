import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div>
        <h3>Mayank Sharma.</h3>
        <p>Full-Stack Developer · Backend · AI</p>
      </div>

      <div className="footer-links">
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
        <a href="#home">Back to Top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
