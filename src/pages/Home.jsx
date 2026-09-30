import { Link } from 'react-router-dom';

import FeaturedProject from './FeaturedProject.jsx';
import Experience from './Experience.jsx';
import SocialLinks from './SocialLinks.jsx';
import "../assets/styles/home.scss";
import projects from '../assets/projects';
import { usePageTitle } from './usePageTitle';
import Icon from './Icon';

const Home = () => {
  usePageTitle();

  return(
      <main id="main-content" className="home-card">

        <section className="window" aria-labelledby="home-heading">
            <div className="window-header">
                <p className="window-title" aria-hidden="true">home</p>
                <div className="window-controls" aria-hidden="true">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>
            {/* The introduction the profile card used to make on every page,
                said once, here: portrait, headline, and the next steps. */}
            <div className="window-content hero-intro">
              <img src="/images/webp/rcgs-800.webp" alt="Reuel Christian Sundiam" className="hero-photo" width={485} height={350}/>
              <div className="hero-text">
                {/* The name is in the h1 for search and screen readers; on
                    screen the wordmark in the nav already says it. */}
                <h1 id="home-heading" className="hero">
                  <span className="sr-only">Reuel Christian Sundiam, </span>
                  Full-stack developer building AI and automation systems.
                </h1>
                <p>I&rsquo;m Reuel Christian Sundiam, and I turn manual processes into reliable automated systems. As an AI-Integrated Web Developer at The Back Room Offshoring Inc., I build n8n automations, LLM-powered internal tools, and the web apps around them.</p>
                <p>I work across <span>React, Node/Express, PostgreSQL and Python</span>, and I graduated Summa Cum Laude in BS Information Technology from Holy Angel University in 2026.</p>
                <div className="hero-actions">
                  <a href="/RCGS-RESUME.pdf" download className="button button--primary">
                    Download resume <Icon name="cloud-arrow-down" />
                  </a>
                  <Link to="/contact" className="button">Contact me</Link>
                  <SocialLinks />
                </div>
              </div>
            </div>
        </section>

        <Experience />

        <section className="projects" aria-labelledby="home-projects-heading">
          <h2 id="home-projects-heading">Latest project</h2>

          <FeaturedProject project={projects[0]} />

          <Link to="/projects" className="projects-all-link">
            See all {projects.length} projects
          </Link>

        </section>
      </main>
  );
}

export default Home;
