import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Git & GitHub", level: 85 },
    { name: "Responsive Design", level: 90 },
    { name: "UI/UX Principles", level: 80 },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h2>My Skills</h2>
        <p className="subtitle">
          Technologies & tools I use to build modern, responsive frontend applications
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
