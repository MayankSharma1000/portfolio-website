// src/components/Contact.jsx

import { FiGithub, FiLinkedin, FiMail, FiCode } from "react-icons/fi";

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">Let’s Connect</p>
        <h2>Let’s build something amazing together.</h2>
      </div>

      <div className="contact-links">
        <a href="mailto:ms18ms12@gmail.com">
          <FiMail /> Email
        </a>

        <a
          href="https://github.com/MayankSharma1000"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub /> GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/mayank-sharma-563428200/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin /> LinkedIn
        </a>

        <a
          href="https://codeforces.com/profile/avgLearner"
          target="_blank"
          rel="noreferrer"
        >
          <FiCode /> Codeforces
        </a>
      </div>
    </section>
  );
}

export default Contact;