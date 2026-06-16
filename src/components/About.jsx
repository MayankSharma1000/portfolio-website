// src/components/About.jsx

function About() {
    return (
      <section className="section about" id="about">
        <div>
          <p className="eyebrow">About Me</p>
          <h2>I’m a builder at heart.</h2>
        </div>
  
        <p>
          I'm a Computer Science Engineering graduate specializing in
          Artificial Intelligence and Machine Learning.

          My focus is building scalable full-stack applications using
          React, Node.js, Express.js and MongoDB while integrating
          modern AI capabilities into practical business solutions.

          I enjoy transforming ideas into polished products through
          clean design, secure backend systems and user-centric
          development.
        </p>
  
        <div className="stats-row">
          <div><strong>4</strong><span>Projects</span></div>
          <div><strong>4</strong><span>Certifications</span></div>
          <div><strong>12+</strong><span>Technologies</span></div>
          <div><strong>2024</strong><span>CSE Graduate</span></div>
        </div>
      </section>
    );
  }
  
  export default About;