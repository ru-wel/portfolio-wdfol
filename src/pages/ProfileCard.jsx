import { Link } from 'react-router-dom';

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
        <a href="https://www.facebook.com/reuelchristian.sundiam" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook"></i></a>
        <a href="https://github.com/ru-wel" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/reuel-christian-sundiam" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:reuelchristian.sundiam04@gmail.com" target='_blank' rel="noopener noreferrer" className="social-icon"><i className="fas fa-envelope"></i></a>
      </div>
      
      <div className="button-container">
        <a href="RCGS-RESUME.pdf" download className="profile-button">
          <span>Download Resume</span>
          <i className="fa-solid fa-cloud-arrow-down"></i>
        </a>
        <Link to={"/contact"} className="profile-button">
          <span>Contact Me</span>
          <i className="fa-solid fa-id-card-clip"></i>
        </Link>
      </div>
    </div>
  )
}

export default ProfileCard
