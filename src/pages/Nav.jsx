import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../assets/styles/navbar.scss";

const Nav = () => {

  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Nav;