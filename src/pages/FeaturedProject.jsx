import { Link } from 'react-router-dom';

import { thumb, srcSetOf } from '../assets/images';

// Home's lead project. Deliberately not the grid card: one project, shown
// large. It leads with who the work was for; the school or client context
// is small print under the stack, not the first thing a reader sees.
const FeaturedProject = ({ project }) => (
  <article className="featured">
    <Link to={`/projects/${project.slug}`} className="featured-media" tabIndex={-1} aria-hidden="true">
      <img
        src={thumb(project.image)}
        srcSet={srcSetOf(project.image)}
        sizes="(min-width: 1025px) 700px, 100vw"
        alt=""
        width={558}
        height={346}
      />
    </Link>

    <div className="featured-body">
      <h3 className="featured-title">
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p className="featured-client">{project.client}</p>

      <p className="featured-summary">{project.description}</p>

      <div className="featured-stack">
        <p>{project.description2}</p>
        <p className="featured-context">{project.role} · {project.context}</p>
      </div>

      <Link to={`/projects/${project.slug}`} className="button featured-cta">
        Read the case study
      </Link>
    </div>
  </article>
);

export default FeaturedProject;
