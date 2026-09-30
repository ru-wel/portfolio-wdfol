import experience from '../assets/experience';

// Work history on Home. One bordered block with the roles stacked inside,
// so it reads as a record rather than another row of cards.
const Experience = () => (
  <section className="projects experience" aria-labelledby="experience-heading">
    <h2 id="experience-heading">Experience</h2>

    <ol className="experience-list">
      {experience.map((role) => (
        <li key={`${role.title}-${role.period}`} className="role">
          <div className="role-head">
            <h3 className="role-title">{role.title}</h3>
            <p className="role-meta">{role.company} · {role.period}</p>
          </div>
          <ul className="role-points">
            {role.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  </section>
);

export default Experience;
