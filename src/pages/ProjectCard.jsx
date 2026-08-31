import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

import { revealItem } from './reveal';

const ProjectCard = ({ project, index = 0 }) => (
  <motion.article className="card" variants={revealItem} custom={index}>
    <Link to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
      <img src={project.image} alt="" width={279} height={173} loading="lazy" />
    </Link>
    <Link to={`/projects/${project.slug}`} className='project-link'>
      <h3>{project.title}</h3>
    </Link>
    <p>{project.description}</p>
  </motion.article>
);

export default ProjectCard;
