import { Link } from 'react-router-dom';

import Nav from './Nav';
import ProfileCard from './ProfileCard.jsx';
import "../assets/styles/home.scss";
import projects from '../assets/projects';

const Home = () => {

  return(
    <div className='container'>
      <Nav />
      <ProfileCard />

      <div className="home-card">

        <div className="window">
            <div className="window-header">
                <h1 className="window-title">Home</h1>
                <div className="window-controls">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>
            <div className="window-content">
              <p><span>Hello! I’m Reuel Christian Sundiam.</span></p>
              <p>I am a passionate learner who loves exploring technology—leading to my interest in both <span>frontend</span> and <span>backend development</span> and dream of becoming a full-stack developer. I am eager to keep learning and growing to achieve my goals and make a difference in the tech world.</p>
            </div>
        </div>

        <div className="projects">
          <h2>Featured Projects</h2>

          <div className="projectcards">
            {projects.slice(0,2).map((project, index) => 
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

export default Home;