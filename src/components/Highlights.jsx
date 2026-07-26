import {
  FiCode,
  FiDatabase,
  FiLock,
  FiCpu,
  FiLayers,
  FiTool,
  FiGitBranch,
  FiLayout,
} from "react-icons/fi";
import { motion } from "framer-motion";

function Highlights() {
  const highlights = [
    {
      icon: <FiLayout />,
      title: "Frontend Engineering",
      text: "React interfaces, reusable component architecture, responsive layouts, state-driven experiences, Framer Motion, polished UI/UX, and product-focused interaction design.",
    },
    {
      icon: <FiDatabase />,
      title: "Backend & APIs",
      text: "Node.js and Express.js services, REST APIs, routing, middleware, MongoDB data models, validation, server-side logic, and application data flows.",
    },
    {
      icon: <FiLayers />,
      title: "Full-Stack Development",
      text: "Connecting interfaces, APIs, authentication, databases, business logic, analytics, and deployment into complete end-to-end applications.",
    },
    {
      icon: <FiLock />,
      title: "Authentication & Security",
      text: "JWT authentication, protected routes, bcrypt password hashing, Helmet headers, rate limiting, CORS configuration, MongoDB sanitization, and defensive middleware.",
    },
    {
      icon: <FiCpu />,
      title: "AI Integration",
      text: "LLM-powered application workflows, OpenRouter API integration, prompt engineering, sentiment analysis, categorization, and AI-generated response systems.",
    },
    {
      icon: <FiGitBranch />,
      title: "Application Architecture",
      text: "Modular components, reusable React hooks, separation of concerns, REST architecture, shared utilities, structured data flows, and maintainable feature organization.",
    },
    {
      icon: <FiCode />,
      title: "Product Engineering",
      text: "CRUD workflows, dashboards, analytics, financial calculations, reporting, responsive interfaces, reusable features, and real-world application development.",
    },
    {
      icon: <FiTool />,
      title: "Debugging & Tooling",
      text: "Git, GitHub, Postman, NPM, Chrome DevTools, VS Code, build debugging, API testing, integration troubleshooting, and iterative product refinement.",
    },
  ];

  return (
    <section className="section highlights" id="highlights">
      <div className="section-head">
        <p className="eyebrow">Engineering Range</p>
        <h2>I work across the stack.</h2>
      </div>

      <div className="highlight-grid">
        {highlights.map((item, index) => (
          <motion.article
            className="highlight-card"
            key={item.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
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
