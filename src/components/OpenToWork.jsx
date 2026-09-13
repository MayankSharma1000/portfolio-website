import { FiBriefcase, FiMapPin, FiZap } from "react-icons/fi";

function OpenToWork() {
  return (
    <section className="section open-work" id="open-to-work">
      <div className="open-work-card">
        <div className="open-work-heading">
          <p className="eyebrow">Open To Work</p>
          <h2>Looking for the right engineering team.</h2>
          <p>
            Available for immediate opportunities where I can contribute to
            real software, learn quickly, and grow into stronger engineering
            responsibility.
          </p>
        </div>

        <div className="open-work-grid">
          <div>
            <FiBriefcase />
            <h3>Target Roles</h3>
            <p>
              Full-Stack Developer, Backend Developer, Software Developer,
              Frontend Developer.
            </p>
          </div>

          <div>
            <FiMapPin />
            <h3>Location</h3>
            <p>
              Open to remote, hybrid, and on-site opportunities.
            </p>
          </div>

          <div>
            <FiZap />
            <h3>What I Bring</h3>
            <p>
              React + Node development, REST APIs, MongoDB, authentication,
              debugging, Docker, and practical LLM integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenToWork;
