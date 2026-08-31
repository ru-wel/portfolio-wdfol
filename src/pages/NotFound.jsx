import { Link } from 'react-router-dom';

import Nav from './Nav';
import "../assets/styles/home.scss";
import "../assets/styles/projectpage.scss";

const NotFound = () => (
  <div className='container'>
    <Nav logo={'/images/wel-logo-final.png'}/>
    <main id="main-content" className="not-found-card">
      <div className="window">
        <div className="window-header">
          <h1 className="window-title">404 — Page not found</h1>
          <div className="window-controls" aria-hidden="true">
            <div className="control-dot"></div>
            <div className="control-dot"></div>
            <div className="control-dot"></div>
          </div>
        </div>

        <div className="window-content">
          <p>That address does not match anything on this site. It may have been renamed, or the link that brought you here is out of date.</p>
          <div className="not-found-actions">
            <Link to="/" className="not-found-link">Back to home</Link>
            <Link to="/projects" className="not-found-link not-found-link--quiet">Browse projects</Link>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default NotFound;
