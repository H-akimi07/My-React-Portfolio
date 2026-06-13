function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 95,
      fact: "Built my first webpage with HTML.",
    },
    {
      name: "CSS",
      level: 90,
      fact: "I love creating modern UI designs.",
    },
    {
      name: "JavaScript",
      level: 85,
      fact: "Makes websites interactive.",
    },
    {
      name: "React",
      level: 80,
      fact: "My favorite frontend library.",
    },
    {
      name: "Git & GitHub",
      level: 75,
      fact: "Used for version control and deployment.",
    },
  ];

  return (
    <section className="skills-section" id="skills" data-aos="fade-up">
      <h2 className="skills-title">
  Technologies & Skills 🚀</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-header">
              <span title={`I enjoy working with ${skill.name}`}>
                {skill.name}
              </span>
              <span>{skill.level}%</span>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            <p className="skill-fact">{skill.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
