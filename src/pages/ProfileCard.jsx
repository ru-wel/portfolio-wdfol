import { Link } from 'react-router-dom';
import React from 'react'

import "../assets/styles/profilecard.scss";

const ProfileCard = () => {
  return (
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
          <a href="RCGS-RESUME.pdf" download>Download Resume</a>
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
  )
}

export default ProfileCard