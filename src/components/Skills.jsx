// src/components/Skills.jsx

import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolioData";

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head">
        <p className="eyebrow">Technical Stack</p>
        <h2>Technologies I build with.</h2>
      </div>

      <div className="skill-groups">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            className="skill-group"
            key={group.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: groupIndex * 0.06 }}
          >
            <div className="skill-group-heading">
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skills-grid">
              {group.skills.map((skill) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  className="skill-pill"
                  key={skill}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
