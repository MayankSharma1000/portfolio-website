function TechMarquee() {
  const techs = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "JWT",
    "Docker",
    "Git",
    "GitHub",
    "Postman",
    "OpenRouter API",
    "C++",
    "Python",
  ];

  return (
    <section className="tech-marquee-section" aria-label="Technology stack">
      <div className="tech-marquee">
        {[...techs, ...techs].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export default TechMarquee;
