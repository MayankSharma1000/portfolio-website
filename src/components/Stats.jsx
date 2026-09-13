import { motion } from "framer-motion";

function Stats() {
  const stats = [
    {
      number: "03",
      label: "Featured Projects",
      detail: "Full-stack · Backend · AI",
    },
    {
      number: "2024",
      label: "CSE Graduate",
      detail: "AI & ML specialization",
    },
    {
      number: "JS",
      label: "Primary Stack",
      detail: "React · Node · Express",
    },
    {
      number: "DSA",
      label: "Problem Solving",
      detail: "C++ · Codeforces",
    },
  ];

  return (
    <section className="section stats-section" aria-label="Profile highlights">
      <div className="stats-container">
        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ y: -6 }}
            className="stat-card"
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
            <span>{item.detail}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
