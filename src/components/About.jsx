function About() {
  return (
    <section className="section about" id="about">
      <div>
        <p className="eyebrow">About Me</p>
        <h2>Engineer first. Stack second.</h2>
      </div>

      <div className="about-copy">
        <p>
          I'm a Computer Science Engineering graduate with a specialization
          in Artificial Intelligence and Machine Learning. My strongest
          interests are full-stack development, backend engineering, APIs,
          databases, and practical AI integrations.
        </p>

        <p>
          I've built applications with React, Node.js, Express.js, MongoDB,
          JWT authentication, Docker, REST APIs, and LLM APIs. I like
          understanding how the pieces connect rather than treating the
          frontend and backend as separate worlds.
        </p>

        <p>
          Right now, I'm deepening that approach through a file-processing
          backend that deals with batches, files, jobs, persistent state,
          and row-wise CSV aggregation.
        </p>
      </div>

      <div className="about-principles">
        <div>
          <span>01</span>
          <strong>Build</strong>
          <p>Turn a requirement into something working.</p>
        </div>

        <div>
          <span>02</span>
          <strong>Understand</strong>
          <p>Learn the system instead of hiding behind abstractions.</p>
        </div>

        <div>
          <span>03</span>
          <strong>Debug</strong>
          <p>Trace problems until the actual cause makes sense.</p>
        </div>

        <div>
          <span>04</span>
          <strong>Improve</strong>
          <p>Refactor and strengthen what I build as I learn.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
