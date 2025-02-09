import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../assets/styles/navbar.scss";

const Nav = () => {

  return(
    <nav>
      <div>
        <Link to="/" aria-label="Go to Home Page">
          <i className="fa-solid fa-house"></i>
          Home
        </Link>
      </div>
      
      <div>
        <Link to="/about" aria-label="Go to About Page">
          <i className="fa-solid fa-user"></i>
          About
        </Link>
      </div>
      
      <div>
        <Link to="/projects" aria-label="Go to Projects Page">
          <i className="fa-solid fa-laptop-code"></i>
          Projects
        </Link>
      </div>
      
      <div>
        <Link to="/contact" aria-label="Go to Contacts Page">
          <i className="fa-solid fa-address-card"></i>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;