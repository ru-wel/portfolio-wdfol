import React from 'react'
import { useParams } from "react-router-dom";

import projects from '../assets/projects'

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));

  return (
    <div>Project Page {project.id}
      <img src={project.image} alt="" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>{project.description2}</p>
    </div>
  )
}

export default ProjectPage