import { Link } from 'react-router-dom';

import Nav from './Nav';
import ProfileCard from './ProfileCard.jsx';
import projects from '../assets/projects';

const Projects = () => {
    return(
      <div className='container'>
      <Nav logo={'images/wel-logo-final.png'}/>
      <ProfileCard />

        <div className="home-card">

          <div className="window">

            <div className="window-header">
                <h1 className="window-title">Projects</h1>
                <div className="window-controls">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>

            <div className="window-content">
              <p>Throughout my three (3) years of studying Web Development, these have been some of the projects that I have created so far! These range from Client Projects to School Works, while also taking up both <span>frontend and backend</span> roles during the development process.</p>
            </div>
          </div>

          <div className="projects">
            <h2>Featured Projects (Latest - Oldest)</h2>

            <div className="projectcards">
              {projects.map((project, index) => 
                <div className="card" key={index}>
                  <Link to={`/project/${project.id}`}>
                    <img src={project.image} alt={project.title} width="279px" height="173px" />
                  </Link>
                  <Link to={`/project/${project.id}`} className='project-link'>
                    <h3>{project.title}</h3>
                  </Link>
                  <p>{project.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
      </div>
    );
}

export default Projects;