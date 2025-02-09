import { Link } from 'react-router-dom';

import Nav from './Nav';
import "../assets/styles/home.scss";
import projects from '../assets/projects';

const Home = () => {

  return(
    <div className='container'>
      <Nav />
      <div className="profile-card">
        <img src="images/rcgs.jpg" alt="Profile" className="profile-image" width={'485px'} height={'350px'}/>
        
        <div className="logo-badge">
          <Link to={"/"}>
            <img src="images/wel-logo-final.png" alt="Logo" width={'100px'} height={'100px'}/>
          </Link>
        </div>
        
        <h1 className="profile-name">Reuel Christian Sundiam</h1>
        <p className="profile-title">Backend | Frontend Developer</p>
        
        <div className="social-links">
          <a href="https://www.facebook.com/reuelchristian.sundiam" target='_blank' className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="https://github.com/ru-wel" target='_blank' className="social-icon"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/reuel-christian-sundiam" target='_blank' className="social-icon"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:reuelchristian.sundiam04@gmail.com" target='_blank' className="social-icon"><i className="fas fa-envelope"></i></a>
        </div>
        
        <div className="button-container">
          <button className="profile-button">
            <a href="RCGS-PORTFOLIO.pdf" download>Download Resume</a>
            <i className="fa-solid fa-cloud-arrow-down"></i>
          </button>
          <button className="profile-button">
            <Link to={"/contact"}>
              Contact Me
            </Link>
            <i className="fa-solid fa-id-card-clip"></i>
          </button>
        </div>
      </div>

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
                <p>I am a passionate learner who loves exploring technology—leading to my interest in both <span>frontend</span> and <span>backend development</span> and dream of becoming a full-stack developer. I am eager to keep learning and growing to achieve my goals and make a difference in the tech world.</p>
            </div>
        </div>

        <div className="projects">
          <h2>FEATURED PROJECTS</h2>

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