import { Link } from 'react-router-dom';

// Home's lead project. Deliberately not the grid card: one project, shown
// large, with its role and stack. The grid lives on /projects.
const FeaturedProject = ({ project }) => (
  <article className="featured">
    <Link to={`/projects/${project.slug}`} className="featured-media" tabIndex={-1} aria-hidden="true">
      <img src={project.image} alt="" width={558} height={346} />
    </Link>

    <div className="featured-body">
      <p className="featured-role">{project.roles[0]} · {project.roles[1]}</p>

      <h3 className="featured-title">
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>

      <p className="featured-summary">{project.description}</p>
      <p className="featured-stack">{project.description2}</p>

      <Link to={`/projects/${project.slug}`} className="featured-cta">
        Read the case study
      </Link>
    </div>
  </article>
);

export default FeaturedProject;
