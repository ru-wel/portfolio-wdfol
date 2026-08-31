import { Link } from 'react-router-dom';

import "../assets/styles/profilecard.scss";

const ProfileCard = () => {
  return (
    <aside className="profile-card" aria-label="Profile summary">
      <img src="images/rcgs.jpg" alt="Reuel Christian Sundiam" className="profile-image" width={485} height={350}/>

      <div className="logo-badge">
        <Link to={"/"} aria-label="Go to Home Page">
          <img src="images/wel-logo-final.png" alt="RCGS monogram" width={100} height={100}/>
        </Link>
      </div>

      <p className="profile-name">Reuel Christian Sundiam</p>
      <p className="profile-title">Backend &amp; frontend developer</p>

      <ul className="social-links">
        <li><a href="https://www.facebook.com/reuelchristian.sundiam" target='_blank' rel="noopener noreferrer" className="social-icon" aria-label="Facebook profile"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
        <li><a href="https://github.com/ru-wel" target='_blank' rel="noopener noreferrer" className="social-icon" aria-label="GitHub profile"><i className="fab fa-github" aria-hidden="true"></i></a></li>
        <li><a href="https://www.linkedin.com/in/reuel-christian-sundiam" target='_blank' rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn profile"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
        <li><a href="mailto:reuelchristian.sundiam04@gmail.com" className="social-icon" aria-label="Send an email"><i className="fas fa-envelope" aria-hidden="true"></i></a></li>
      </ul>

      <div className="button-container">
        <a href="RCGS-RESUME.pdf" download className="profile-button">
          <span>Download resume</span>
          <i className="fa-solid fa-cloud-arrow-down" aria-hidden="true"></i>
        </a>
        <Link to={"/contact"} className="profile-button">
          <span>Contact me</span>
          <i className="fa-solid fa-id-card-clip" aria-hidden="true"></i>
        </Link>
      </div>
    </aside>
  )
}

export default ProfileCard
