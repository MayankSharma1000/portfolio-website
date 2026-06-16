// src/components/Stats.jsx

import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "4",
      label: "Projects Built",
    },
    {
      number: "4",
      label: "Certifications",
    },
    {
      number: "2024",
      label: "CSE Graduate",
    },
    {
      number: "12+",
      label: "Technologies",
    },
  ];

  return (
    <section className="section">
      <div className="stats-container">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -8 }}
            className="stat-card"
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;