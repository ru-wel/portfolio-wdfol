import Nav from './Nav';
import ProfileCard from './ProfileCard.jsx';
import ProjectCard from './ProjectCard.jsx';
import "../assets/styles/home.scss";
import projects from '../assets/projects';

const Projects = () => {
    return(
      <div className='container'>
      <Nav logo={'images/wel-logo-final.png'}/>
      <ProfileCard />

        <main id="main-content" className="home-card">

          <section className="window" aria-labelledby="projects-heading">

            <div className="window-header">
                <h1 id="projects-heading" className="window-title">Projects</h1>
                <div className="window-controls" aria-hidden="true">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>

            <div className="window-content">
              <p>Throughout my three (3) years of studying Web Development, these have been some of the projects that I have created so far. These range from client projects to school work, while also taking up both <span>frontend and backend</span> roles during the development process.</p>
            </div>
          </section>

          <section className="projects" aria-labelledby="projects-list-heading">
            <h2 id="projects-list-heading">All projects, newest first</h2>

            <div className="projectcards">
              {projects.map((project) =>
                <ProjectCard key={project.slug} project={project} />
              )}
            </div>
          </section>
        </main>

      </div>
    );
}

export default Projects;
