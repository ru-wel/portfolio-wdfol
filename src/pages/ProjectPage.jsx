import { Link, useParams } from "react-router-dom";
import { PhotoProvider } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';
import "../assets/styles/home.scss";
import "../assets/styles/projectpage.scss";
import projects from '../assets/projects'
import FeatureCarousel from './FeatureCarousel';
import ProjectFooter from './ProjectFooter';
import Zoomable from './Zoomable';
import { usePageTitle } from './usePageTitle';
import Icon from './Icon';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  usePageTitle(project ? project.title : 'Project not found', project?.description);

  if (!project) {
    return (
        <main id="main-content" className="not-found-card">
          <div className="window">
            <div className="window-header">
              <h1 className="window-title">Project not found</h1>
              <div className="window-controls" aria-hidden="true">
                <div className="control-dot"></div>
                <div className="control-dot"></div>
                <div className="control-dot"></div>
              </div>
            </div>

            <div className="window-content">
              <p>The project you are looking for does not exist or may have been moved.</p>
              <div className="not-found-actions">
                <Link to="/projects" className="not-found-link">Back to projects</Link>
              </div>
            </div>
          </div>
        </main>
    );
  }

  return (
      <PhotoProvider maskOpacity={0.5}>
        <main id="main-content" className="home-card project-page">

          {/* The project's cover: the purple band that used to be a separate
              column beside the page. Inside the frame, it heads the page the
              way the hero window heads every other one. */}
          <section className="project-hero" aria-labelledby="project-title">
            <Link to="/projects" className="back-link"><Icon name="arrow-left" /> All projects</Link>

            <div className="project-content">
              <div className="project-content-role">
                <div className="roles">
                  <p>{project.role}</p>
                  <p>{project.client}</p>
                </div>
                <div className="social-links">
                  {project.links?.map((link, index) => (
                    link && (
                      <a key={link} href={link} target="_blank" className="social-icon" rel="noopener noreferrer" aria-label={index === 0 ? `Open the live ${project.title} site` : `View ${project.title} on GitHub`}>
                        <Icon name={index === 0 ? 'globe' : 'github'} />
                      </a>
                    )
                  ))}
                </div>
              </div>

              <h1 id="project-title">{project.title}</h1>
              <p className="project-context">{project.context}</p>
              <p className='border-btm'>{project.description3}</p>
              <p className='border-btm'>Created using: <span>{project.description2}</span></p>
            </div>

            <Zoomable
              key={project.slug}
              src={project.image}
              alt={`${project.title}: main screen`}
              sizes="(min-width: 1025px) 480px, 100vw"
              className='project-image'
            />
          </section>

          <section className="projects project-features" aria-labelledby="features-heading">
            <h2 id="features-heading">Project features</h2>
            <div className="features-section">
              <FeatureCarousel features={project} />
            </div>
          </section>

          <ProjectFooter slug={project.slug} />

        </main>
      </PhotoProvider>
  )
}

export default ProjectPage
