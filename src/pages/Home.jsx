import { Link } from 'react-router-dom';

import Nav from './Nav';
import ProfileCard from './ProfileCard.jsx';
import FeaturedProject from './FeaturedProject.jsx';
import "../assets/styles/home.scss";
import projects from '../assets/projects';

const Home = () => {

  return(
    <div className='container'>
      <Nav logo={'images/wel-logo-final.png'}/>
      <ProfileCard />

      <main id="main-content" className="home-card">

        <section className="window" aria-labelledby="home-heading">
            <div className="window-header">
                <h1 id="home-heading" className="window-title">Home</h1>
                <div className="window-controls" aria-hidden="true">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>
            <div className="window-content">
              <p><span>Hello! I&rsquo;m Reuel Christian Sundiam.</span></p>
              <p>I am a passionate learner who loves exploring technology, leading to my interest in both <span>frontend</span> and <span>backend development</span> and dream of becoming a full-stack developer. I am eager to keep learning and growing to achieve my goals and make a difference in the tech world.</p>
              <p><span className='tagline'>&quot;Good things come one line at a time&quot;</span></p>
            </div>
        </section>

        <section className="projects" aria-labelledby="home-projects-heading">
          <h2 id="home-projects-heading">Latest project</h2>

          <FeaturedProject project={projects[0]} />

          <Link to="/projects" className="projects-all-link">
            See all {projects.length} projects
          </Link>

        </section>
      </main>
    </div>
  );
}

export default Home;
