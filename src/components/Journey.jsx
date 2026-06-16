// src/components/Journey.jsx

import { motion } from "framer-motion";

function Journey() {
  const items = [
    {
      year: "2020",
      title: "Started Computer Science Engineering",
      text: "Built my foundation in programming, problem solving, computer science fundamentals, and AI/ML concepts.",
    },
    {
      year: "2024",
      title: "Graduated in CSE AI & ML",
      text: "Completed B.E. Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning.",
    },
    {
      year: "2025",
      title: "Strengthened Discipline & Problem Solving",
      text: "Prepared for competitive exams and interviews while improving consistency, aptitude, communication, and technical direction.",
    },
    {
      year: "2026",
      title: "Building Full-Stack + AI Products",
      text: "Focused on React, Node.js, Express.js, MongoDB, JWT authentication, REST APIs, and AI-powered application development.",
    },
  ];

  return (
    <section className="section journey" id="journey">
      <div className="section-head">
        <p className="eyebrow">Journey</p>
        <h2>From fundamentals to real products.</h2>
      </div>

      <div className="journey-list">
        {items.map((item, index) => (
          <motion.article
            className="journey-card"
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
          >
            <span>{item.year}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Journey;