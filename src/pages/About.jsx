import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { motion, useReducedMotion } from "motion/react";

import Nav from './Nav';
import ProfileCard from './ProfileCard.jsx';
import "../assets/styles/about.scss";
import skills from '../assets/skills';
import ProgressProvider from "./ProgressProvider";
import certificates from "../assets/certificates.js";
import { revealGroup, revealItem, revealViewport } from "./reveal";

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
        window.open(certificate.url, '_blank', 'noopener,noreferrer');
      }
    }
  };

  const reduceMotion = useReducedMotion();

  return(
    <>
    <div className='container'>
      <Nav logo={'images/wel-logo-final.png'}/>
      <ProfileCard />

      <main id="main-content" className="home-card">

        <section className="window" aria-labelledby="about-heading">
          <div className="window-header">
              <h1 id="about-heading" className="window-title">About</h1>
              <div className="window-controls" aria-hidden="true">
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
              </div>
          </div>
          <div className="window-content">
            <h2 className="bio-heading">Personal bio</h2>
            <p className="personal-bio">I am currently a 3rd Year Web Development Student with a strong passion for anything technology related. Being exposed to different gadgets from an early age sparked my genuine curiosity for all things technology and ultimately led me to this course / field. Beyond coding, I enjoy watching movies, listening to music, and engaging in various sports activities. In addition, I try to continuously explore new technologies and best practices related to Web Development to enhance my skills and prepare myself for the future.</p>
          </div>
        </section>

        <section className="projects skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Technical skills</h2>

          <div className="technical-skills">
            {skills.map((category) => (
              <div key={category.category} className="skills-section">
                <h3 className="category-title">{category.category}</h3>
                <div className="skills-container">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill">
                      <div role="img" aria-label={`${skill.name}: ${skill.progress} percent confidence`}>
                        <ProgressProvider valueStart={0} valueEnd={skill.progress}>
                          {value => <CircularProgressbar value={value} text={`${value}%`} />}
                        </ProgressProvider>
                      </div>
                      <p aria-hidden="true">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>

      </main>

    </div>

    <section className="certificate-container" aria-labelledby="certificates-heading">
      <h2 id="certificates-heading">Certifications and trainings</h2>
      <motion.div
        className="certificate-cards"
        variants={revealGroup}
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={revealViewport}
      >
        {certificates.map((certificate) => (
          <motion.article className="card" key={certificate.title} variants={revealItem}>
            <div className="certificate-logo">
              <img src={certificate.image} alt={`${certificate.company} logo`} width={150} height={150} loading="lazy"/>
            </div>
            <h3>{certificate.company}</h3>
            <p>{certificate.title}</p>
            <button
              type="button"
              className='button-confirm'
              onClick={() => handleAction(certificate)}
              disabled={!certificate.url}
              aria-label={`${certificate.action}: ${certificate.title} from ${certificate.company}`}
            >
              {certificate.action}
            </button>
          </motion.article>
        ))}
      </motion.div>
    </section>
    </>
  );
}

export default About;
