import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import "../assets/styles/navbar.scss";

const links = [
  { to: '/', label: 'Home', icon: 'fa-solid fa-house' },
  { to: '/about', label: 'About', icon: 'fa-solid fa-user' },
  { to: '/projects', label: 'Projects', icon: 'fa-solid fa-laptop-code' },
  { to: '/contact', label: 'Contact', icon: 'fa-solid fa-address-card' },
];

const Nav = ({ logo }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Collapse the mobile menu whenever navigation actually happens.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return(
    <nav aria-label="Primary">
      <div className='nav-logo'>
        <Link to="/" aria-label="Go to Home Page"><img src={logo} alt="RCGS monogram, return to home" width={81} height={90}/></Link>
      </div>

      <button
        type="button"
        className="hamburger"
        aria-expanded={menuOpen}
        aria-controls="primary-nav-items"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        ☰
      </button>

      <div id="primary-nav-items" className={`nav-items ${menuOpen ? "open" : ""}`}>
        {links.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
          >
            {({ isActive }) => (
              <>
                <i className={icon} aria-hidden="true"></i>
                {label}
                {isActive && <span className="sr-only"> (current page)</span>}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
