import ProjectCard from './ProjectCard.jsx';
import "../assets/styles/home.scss";
import projects from '../assets/projects';
import { usePageTitle } from './usePageTitle';

const Projects = () => {
    usePageTitle('Projects');

    return(
        <main id="main-content" className="home-card">

          <section className="window" aria-labelledby="projects-heading">

            <div className="window-header">
                <p className="window-title" aria-hidden="true">projects</p>
                <div className="window-controls" aria-hidden="true">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>

            <div className="window-content">
              <h1 id="projects-heading" className="hero">Client work and school projects, with what I built on each.</h1>
              <p>A mix of client work and school projects built before and during my degree, including live systems for a construction company, a university publication, a local high school and a gym. On each one I&rsquo;ve noted which parts I built.</p>
              <p>My current professional work is internal to The Back Room, so it&rsquo;s covered under <span>Experience</span> on the home page rather than here.</p>
            </div>
          </section>

          <section className="projects" aria-labelledby="projects-list-heading">
            <h2 id="projects-list-heading">All projects, newest first</h2>

            <div className="projectcards">
              {projects.map((project, index) =>
                // Stagger by column, not list position: a card that scrolls in
                // alone later should not wait out the delay of the ones above.
                <ProjectCard key={project.slug} project={project} index={index % 2} />
              )}
            </div>
          </section>
        </main>
    );
}

export default Projects;
