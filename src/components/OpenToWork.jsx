// src/components/OpenToWork.jsx

import { FiBriefcase, FiMapPin, FiClock } from "react-icons/fi";

function OpenToWork() {
  return (
    <section className="section open-work">
      <div className="open-work-card">
        <div>
          <p className="eyebrow">Open To Work</p>
          <h2>Looking for fresher-level developer roles.</h2>
        </div>

        <div className="open-work-grid">
          <div>
            <FiBriefcase />
            <h3>Roles</h3>
            <p>Software Developer, Frontend Developer, Web Developer, Full-Stack Developer</p>
          </div>

          <div>
            <FiMapPin />
            <h3>Location</h3>
            <p>Open to remote, hybrid, and on-site opportunities across India.</p>
          </div>

          <div>
            <FiClock />
            <h3>Availability</h3>
            <p>Available to join and contribute to real-world projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenToWork;