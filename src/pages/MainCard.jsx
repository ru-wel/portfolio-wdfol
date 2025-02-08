import React from 'react'
import { Link } from 'react-router-dom';

import "../assets/styles/maincard.scss";
import projects from '../assets/projects';

const MainCard = () => {
  return (
    <>
    <div class="profile-card">
      <img src="images/rcgs.jpg" alt="Profile" class="profile-image" width={'485px'} height={'350px'}/>
      
      <div class="logo-badge">
        <img src="images/wel-logo-final.png" alt="Logo" width={'100px'} height={'100px'}/>
      </div>
      
      <h1 class="profile-name">Reuel Christian Sundiam</h1>
      <p class="profile-title">Backend | Frontend Developer</p>
      
      <div class="social-links">
        <a href="https://www.facebook.com/reuelchristian.sundiam" target='_blank' className="social-icon"><i class="fab fa-facebook"></i></a>
        <a href="https://github.com/ru-wel" target='_blank' className="social-icon"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/reuel-christian-sundiam" target='_blank' className="social-icon"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:reuelchristian.sundiam04@gmail.com" target='_blank' className="social-icon"><i class="fas fa-envelope"></i></a>
      </div>
      
      <div class="button-container">
        <button class="profile-button">
          <a href="RCGS-PORTFOLIO.pdf" download>Download Resume</a>
          <i class="fa-solid fa-cloud-arrow-down"></i>
        </button>
        <button class="profile-button">
          <Link to={"/contact"}>
            Contact Me
          </Link>
          <i class="fa-solid fa-id-card-clip"></i>
        </button>
      </div>
    </div>

    <div className="home-card">

      <div class="window">
          <div class="window-header">
              <h1 class="window-title">Home</h1>
              <div class="window-controls">
                  <div class="control-dot"></div>
                  <div class="control-dot"></div>
                  <div class="control-dot"></div>
              </div>
          </div>
          <div class="window-content">
              <p>I am a passionate learner who loves exploring technology—leading to my interest in both frontend and backend development and dream of becoming a full-stack developer. I am eager to keep learning and growing to achieve my goals and make a difference in the tech world.</p>
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
              <Link to={`/project/${project.id}`}>
                <h3>{project.title}</h3>
              </Link>
              <p>{project.description}</p>
            </div>
          )}
        </div>

      </div>
    </div>
    </>
  )
}

export default MainCard