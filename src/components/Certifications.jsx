// src/components/Certifications.jsx

import { FiArrowUpRight } from "react-icons/fi";
import { certifications } from "../data/portfolioData";

function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-head">
        <p className="eyebrow">Certifications</p>
        <h2>Continuous learning.</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            <p>{cert.issuer}</p>
            <h3>{cert.title}</h3>

            <a href={cert.link} target="_blank" rel="noreferrer">
              View Certificate <FiArrowUpRight />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;