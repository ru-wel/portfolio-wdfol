import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => (
  <article className="card">
    <Link to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
      <img src={project.image} alt="" width={279} height={173} loading="lazy" />
    </Link>
    <Link to={`/projects/${project.slug}`} className='project-link'>
      <h3>{project.title}</h3>
    </Link>
    <p>{project.description}</p>
  </article>
);

export default ProjectCard;
