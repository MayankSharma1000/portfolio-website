// src/components/TechMarquee.jsx

function TechMarquee() {
    const techs = [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Git",
      "GitHub",
      "Postman",
      "OpenRouter",
      "AI Integration",
      "Framer Motion",
      "HTML",
      "CSS",
    ];
  
    return (
      <section className="tech-marquee-section">
        <div className="tech-marquee">
          {[...techs, ...techs].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>
    );
  }
  
  export default TechMarquee;