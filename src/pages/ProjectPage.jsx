import { Link, useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from 'react-photo-view';

import 'react-photo-view/dist/react-photo-view.css';
import "../assets/styles/home.scss";
import "../assets/styles/projectpage.scss";
import Nav from './Nav';
import projects from '../assets/projects'
import FeatureCarousel from './FeatureCarousel';

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className='container'>
        <Nav logo="/images/wel-logo-final.png"/>
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
      </div>
    );
  }

  return (
    <div className='container'>
      <Nav logo={project.logo}/>
      <PhotoProvider maskOpacity={0.5}>
        <main id="main-content" className="projectmain-card">
          <Link to="/projects" className="back-link">← All projects</Link>

          <PhotoView key={project.slug} src={project.image}>
            <img src={project.image} alt={`${project.title} — main screen`} width={537} height={450} className='project-image'/>
          </PhotoView>
          <p className="note">Click the image to preview it full size.</p>

          <div className="project-content">

            <div className="project-content-role">
              <div className="roles">
                <p>{project.roles[0]}</p>
                <p>{project.roles[1]} Project</p>
              </div>
              <div className="social-links">
                {project.links?.map((link, index) => (
                  link && (
                    <a key={link} href={link} target="_blank" className="social-icon" rel="noopener noreferrer" aria-label={index === 0 ? `Open the live ${project.title} site` : `View ${project.title} on GitHub`}>
                      {index === 0 ? <i className="fa-solid fa-globe" aria-hidden="true"></i> : <i className="fab fa-github" aria-hidden="true"></i>}
                    </a>
                  )
                ))}
              </div>
            </div>

            <h1>{project.title}</h1>
            <p className='border-btm'>{project.description3}</p>
            <p className='border-btm'>Created using: <span>{project.description2}</span></p>

          </div>
        </main>

        <section className="projectpage-card" aria-labelledby="features-heading">

          <div className="window">

            <div className="window-header">
              <h2 id="features-heading" className="window-title">Project features</h2>
              <div className="window-controls" aria-hidden="true">
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
              </div>
            </div>

              <div className="features-section">
                <FeatureCarousel features={project} />
              </div>

          </div>

        </section>
      </PhotoProvider>
    </div>
  )
}

export default ProjectPage
