import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import "../assets/styles/navbar.scss";
import Icon from './Icon';

const links = [
  { to: '/', label: 'Home', icon: 'house' },
  { to: '/about', label: 'About', icon: 'user' },
  { to: '/projects', label: 'Projects', icon: 'laptop-code' },
  { to: '/contact', label: 'Contact', icon: 'address-card' },
];

const Nav = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Collapse the mobile menu whenever navigation actually happens.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return(
    <nav className="site-nav" aria-label="Primary">
      {/* The brand mark. Runs up the top of the rail on desktop, like a
          spine, and sits at the left of the top bar on smaller screens. */}
      <Link to="/" className="nav-wordmark">
        Reuel Sundiam<span className="sr-only">, home</span>
      </Link>

      <button
        type="button"
        className="hamburger"
        aria-expanded={menuOpen}
        aria-controls="primary-nav-items"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Icon name={menuOpen ? 'xmark' : 'bars'} />
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
                <Icon name={icon} />
                {label}
                {isActive && <span className="sr-only"> (current page)</span>}
              </>
            )}
          </NavLink>
        ))}
        {/* Not a page, a file: styled as a button, not a tab. In the rail so
            the résumé is one click away on every route. */}
        <a href="/RCGS-RESUME.pdf" download className="nav-resume">
          <Icon name="cloud-arrow-down" />
          Resume<span className="sr-only"> (PDF download)</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
