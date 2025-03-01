import React from 'react'
import { useParams } from "react-router-dom";

import Nav from './Nav';
import "../assets/styles/projectpage.scss";
import projects from '../assets/projects'

import FeatureCarousel from './FeatureCarousel';

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
              {project.links?.map((link, index) => (
                link && (
                  <a key={index} href={link} target="_blank" className="social-icon" rel="noopener noreferrer">
                    {index === 0 ? <i className="fa-solid fa-globe"></i> : <i className="fab fa-github"></i>}
                  </a>
                )
              ))}
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
            <h1 className="window-title">Project Features</h1>
            <div className="window-controls">
                <div className="control-dot"></div>
                <div className="control-dot"></div>
                <div className="control-dot"></div>
            </div>
          </div>

            <div className="features-section">
              <FeatureCarousel features={project} />
            </div>

        </div>
        
      </div>
    </div>
  )
}

export default ProjectPage