import React from 'react'
import { useParams } from "react-router-dom";

import Nav from './Nav';
import "../assets/styles/projectpage.scss";
import projects from '../assets/projects'

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  return (
    <div className='container'>
      <Nav logo={project.logo}/>
      <div className="projectmain-card">
        <img src={project.image} alt="" width={'537px'} height={'450px'} className='project-image'/>

        <div className="project-content">

          <div className="project-content-role">
            <div className="roles">
              <p>{project.roles[0]}</p>
              <p>{project.roles[1]} Project</p>
            </div>

            <div className="social-links">
              <a href={project.links[0]} target='_blank' className="social-icon"><i className="fab fa-github"></i></a>
              <a href={project.links[1]} target='_blank' className="social-icon"><i class="fa-solid fa-globe"></i></a>
            </div>
          </div>

          <h2>{project.title}</h2>
          <p className='border-btm'>{project.description3}</p>
          <p className='border-btm'>Created using: <span>{project.description2}</span></p>

        </div>
      </div>

      <div className="projectpage-card">

        <div className="window">
            <div className="window-header">
                <h1 className="window-title">Project {project.id}</h1>
                <div className="window-controls">
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                    <div className="control-dot"></div>
                </div>
            </div>
            <div className="window-content">
              <p><span>Hello! I’m Reuel Christian Sundiam.</span></p>
              <p>I am a passionate learner who loves exploring technology—leading to my interest in both <span>frontend</span> and <span>backend development</span> and dream of becoming a full-stack developer. I am eager to keep learning and growing to achieve my goals and make a difference in the tech world.</p>
              <p><span className='tagline'>— "Good Things Come One Line At A Time"</span></p>
            </div>
        </div>

        <div className="projects">

        </div>
      </div>
    </div>

    // <div>Project Page {project.id}
    //   <img src={project.image} alt="" width={'537px'} height={'450px'} className='project-image'/>
    //   <h3>{project.title}</h3>
    //   <p>{project.description}</p>
    //   <p>{project.description2}</p>
    // </div>
  )
}

export default ProjectPage