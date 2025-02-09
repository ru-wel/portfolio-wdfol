import { Link } from 'react-router-dom';
import Nav from './Nav';

import "../assets/styles/home.scss";

const About = () => {
  return(
    <div className='container'>
      <Nav />
      <div className="profile-card">
        <img src="images/rcgs.jpg" alt="Profile" className="profile-image" width={'485px'} height={'350px'}/>
        
        <div className="logo-badge">
          <Link to={"/"}>
            <img src="images/wel-logo-final.png" alt="RCGS Logo" width={'100px'} height={'100px'}/>
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
                <h1 className="window-title">About</h1>
                <div className="window-controls">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>
            <div className="window-content">
              <h2>Personal Bio</h2>
              <p>A brief overview of your background, skills, and interests.</p>
            </div>
        </div>

        <div className="projects">
          <h2>Technical Skills</h2>
        </div>
      </div>
    </div>
  );
}

export default About;