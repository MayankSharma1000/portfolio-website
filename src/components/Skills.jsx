// src/components/Skills.jsx

import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <p className="eyebrow">Skills</p>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <motion.div whileHover={{ y: -6 }} className="skill-pill" key={skill}>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;