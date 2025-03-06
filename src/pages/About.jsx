import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { motion } from "motion/react";
import { useInView } from 'react-intersection-observer';

import Nav from './Nav';
import ProfileCard from './ProfileCard.jsx';
import "../assets/styles/about.scss";
import skills from '../assets/skills';
import ProgressProvider from "./ProgressProvider";
import certificates from "../assets/certificates.js";

const About = () => {

  const handleAction = (certificate) => {
    if (certificate.url) {
      if (certificate.isDownload) {
        const link = document.createElement('a');
        link.href = certificate.url;
        link.setAttribute('download', '');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(certificate.url, '_blank');
      }
    } else {
      console.warn('No URL provided for this action');
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.2, 
        duration: 0.4 
      }
    }
  };

  return(
    <>
    <div className='container'>
      <Nav logo={'images/wel-logo-final.png'}/>
      <ProfileCard />

      <div className="home-card">

        <div className="window">
          <div className="window-header">
              <h1 className="window-title">About</h1>
              <div className="window-controls">
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
              </div>
          </div>
          <div className="window-content">
            <h2>Personal Bio</h2>
            <p className="personal-bio">I am currently a 3rd Year Web Development Student with a strong passion for anything technology related. Being exposed to different gadgets from an early age sparked my genuine curiosity for all things technology and ultimately led me to this course / field. Beyond coding, I enjoy watching movies, listening to music, and engaging in various sports activities. In addition, I try to continuously explore new technologies and best practices related to Web Development to enhance my skills and prepare myself for the future.</p>
          </div>
        </div>

        <div className="projects skills">
          <h2>Technical Skills</h2>

          <div className="technical-skills">
            {skills.map((category, index) => (
              <div key={index} className="skills-section">
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-container">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="skill">
                      <ProgressProvider valueStart={0} valueEnd={skill.progress}>
                        {value => <CircularProgressbar value={value} text={`${value}%`} />}
                      </ProgressProvider>
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
        
      </div>

    </div>

    <div className="certificate-container">
      <h1>Certifications and Trainings</h1>
      <motion.div ref={ref} className="certificate-cards" initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants}>
        {certificates.map((certificate, index) => (
          <motion.div className="card" key={index} variants={cardVariants} custom={index} >
            <motion.div className="certificate-logo" variants={imageVariants}>
              <img src={certificate.image} alt={certificate.company} width="150px" height="150px"/>
            </motion.div>
            <motion.h3>{certificate.company}</motion.h3>
            <motion.p>{certificate.title}</motion.p>
            <button className='button-confirm' onClick={() => handleAction(certificate)}>
              {certificate.action}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
}

export default About;