function About() {
  return (
    <section className="section about" id="about">
      <div>
        <p className="eyebrow">About Me</p>
        <h2>Engineer first. Stack second.</h2>
      </div>

      <p>
        I'm a Computer Science Engineering graduate with an Honors
        specialization in Artificial Intelligence and Machine Learning.
        My work spans frontend development, backend systems, full-stack
        applications, REST APIs, databases, authentication, application
        security, AI integrations, UI/UX, debugging, and product engineering.
        <br /><br />
        I have built applications using React, JavaScript, Node.js,
        Express.js, MongoDB, JWT authentication, protected routes, bcrypt
        password hashing, CRUD workflows, reusable hooks, modular components,
        API-driven architecture, analytics, reporting, and LLM-powered
        workflows.
        <br /><br />
        I don't want to limit myself to a single layer of software
        development. I'm comfortable contributing to frontend, backend,
        full-stack, AI-enabled products, web platforms, APIs, internal tools,
        or adjacent software engineering work where I can apply my technical
        foundation, learn the system quickly, and solve useful problems.
      </p>

      <div className="stats-row">
        <div><strong>4</strong><span>Product Projects</span></div>
        <div><strong>5+</strong><span>Engineering Areas</span></div>
        <div><strong>25+</strong><span>Technologies & Tools</span></div>
        <div><strong>AI/ML</strong><span>CSE Honors</span></div>
      </div>
    </section>
  );
}

export default About;
