import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';

import { revealCard } from './reveal';
import { thumb } from '../assets/images';

const ProjectCard = ({ project, index = 0 }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article className="card" {...revealCard(index, reduceMotion)}>
      <Link to={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
        <img src={thumb(project.image)} alt="" width={279} height={173} loading="lazy" />
      </Link>
      <Link to={`/projects/${project.slug}`} className='project-link'>
        <h3>{project.title}</h3>
      </Link>
      <p>{project.description}</p>
    </motion.article>
  );
};

export default ProjectCard;
