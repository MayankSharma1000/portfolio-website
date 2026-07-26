import { FiBriefcase, FiMapPin, FiClock } from "react-icons/fi";

function OpenToWork() {
  return (
    <section className="section open-work" id="open-to-work">
      <div className="open-work-card">
        <div>
          <p className="eyebrow">Open To Work</p>
          <h2>Flexible across software engineering.</h2>
        </div>

        <div className="open-work-grid">
          <div>
            <FiBriefcase />
            <h3>Roles</h3>
            <p>
              Software Developer, Software Engineer, Frontend Developer,
              Backend Developer, Full-Stack Developer, Web Developer,
              AI Application Developer, and related engineering roles.
            </p>
          </div>

          <div>
            <FiMapPin />
            <h3>Work Environment</h3>
            <p>
              Open to remote, hybrid, and on-site opportunities. Comfortable
              working across product layers instead of being restricted to
              one technology or part of the stack.
            </p>
          </div>

          <div>
            <FiClock />
            <h3>How I Contribute</h3>
            <p>
              Give me a product, feature, API, interface, integration,
              debugging problem, or unfamiliar engineering challenge and
              I'll work through the system, learn what is required, and
              contribute where the team needs me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenToWork;
