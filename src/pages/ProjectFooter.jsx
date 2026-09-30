import { Link } from 'react-router-dom';

import projects from '../assets/projects';
import Icon from './Icon';

// The end of a case study used to be the last carousel slide and nothing
// else. Offer the two things a reader wants next: another project, or the
// résumé and a way to get in touch.
const ProjectFooter = ({ slug }) => {
  const index = projects.findIndex((p) => p.slug === slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <footer className="project-footer">
      <nav className="project-footer__pager" aria-label="More projects">
        {previous ? (
          <Link to={`/projects/${previous.slug}`} className="project-footer__step" rel="prev">
            <span className="project-footer__dir"><Icon name="arrow-left" /> Previous project</span>
            <span className="project-footer__name">{previous.title}</span>
          </Link>
        ) : (
          <Link to="/projects" className="project-footer__step">
            <span className="project-footer__dir"><Icon name="arrow-left" /> All projects</span>
            <span className="project-footer__name">Back to the list</span>
          </Link>
        )}

        {next ? (
          <Link to={`/projects/${next.slug}`} className="project-footer__step project-footer__step--next" rel="next">
            <span className="project-footer__dir">Next project <Icon name="arrow-right" /></span>
            <span className="project-footer__name">{next.title}</span>
          </Link>
        ) : (
          <Link to="/projects" className="project-footer__step project-footer__step--next">
            <span className="project-footer__dir">All projects <Icon name="arrow-right" /></span>
            <span className="project-footer__name">Back to the list</span>
          </Link>
        )}
      </nav>

      <div className="project-footer__cta">
        <p>Hiring, or have a project in mind?</p>
        <div className="project-footer__actions">
          <a href="/RCGS-RESUME.pdf" download className="button button--primary">
            Download resume
          </a>
          <Link to="/contact" className="button">
            Contact me
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default ProjectFooter;
