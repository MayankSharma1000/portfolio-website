// src/components/Highlights.jsx

import { FiCode, FiDatabase, FiLock, FiCpu } from "react-icons/fi";
import { motion } from "framer-motion";

function Highlights() {
  const highlights = [
    {
      icon: <FiCode />,
      title: "Frontend Engineering",
      text: "Responsive React interfaces, reusable components, clean layouts, and smooth user experience.",
    },
    {
      icon: <FiDatabase />,
      title: "Backend Development",
      text: "Node.js, Express.js, REST APIs, MongoDB models, route structure, and server-side logic.",
    },
    {
      icon: <FiLock />,
      title: "Authentication & Security",
      text: "JWT-based authentication, protected routes, bcrypt password handling, and secure access flows.",
    },
    {
      icon: <FiCpu />,
      title: "AI Integration",
      text: "LLM-powered workflows, prompt engineering, OpenRouter API, sentiment analysis, and AI draft generation.",
    },
  ];

  return (
    <section className="section highlights" id="highlights">
      <div className="section-head">
        <p className="eyebrow">Developer Strengths</p>
        <h2>What I bring to a team.</h2>
      </div>

      <div className="highlight-grid">
        {highlights.map((item, index) => (
          <motion.article
            className="highlight-card"
            key={item.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="highlight-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Highlights;