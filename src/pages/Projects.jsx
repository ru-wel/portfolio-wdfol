import { Link } from 'react-router-dom';

import Nav from './Nav';
import projects from '../assets/projects';

const Projects = () => {
    return(
      <>
      <Nav />
      <div className="projects">
        <h2>Featured Projects</h2>

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
      </>
    );
}

export default Projects;