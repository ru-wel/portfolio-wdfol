import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import "../assets/styles/about.scss";
import skills from '../assets/skills';
import certificates from "../assets/certificates.js";
import { revealCard } from "./reveal";
import { usePageTitle } from "./usePageTitle";
import { thumb } from "../assets/images";

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

  usePageTitle('About');
  const reduceMotion = useReducedMotion();
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // Two full rows of the two-column grid before the disclosure.
  const FEATURED_COUNT = 4;
  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, FEATURED_COUNT);
  const hiddenCount = certificates.length - FEATURED_COUNT;

  return(
      <main id="main-content" className="home-card">

        <section className="window" aria-labelledby="about-heading">
          <div className="window-header">
              <p className="window-title" aria-hidden="true">about</p>
              <div className="window-controls" aria-hidden="true">
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
                  <div className="control-dot"></div>
              </div>
          </div>
          <div className="window-content">
            <h1 id="about-heading" className="hero">Web developer in Angeles City, working where the web meets automation.</h1>
            <h2 className="bio-heading">Personal bio</h2>
            <p className="personal-bio">I&rsquo;m a full-stack web developer based in Angeles City, Pampanga. I graduated Summa Cum Laude in BS Information Technology, specializing in Web Development, from Holy Angel University in 2026.</p>
            <p className="personal-bio">These days I work where web development meets automation: building workflows, integrations and AI-assisted tools that take repetitive work off people&rsquo;s plates. I use AI coding tools like Claude Code to build faster while staying in control of what ships, and I document as I go.</p>
            <p className="personal-bio">Growing up around gadgets made me curious about how technology works, and that curiosity led me here. Away from the keyboard, I&rsquo;m usually watching movies, listening to music, or playing sports.</p>
          </div>
        </section>

        <section className="projects skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Technical skills</h2>

          <div className="technical-skills">
            {skills.map((category) => (
              <div key={category.category} className="skills-section">
                <h3 className="category-title">{category.category}</h3>
                <ul className="skills-container">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="skill">{skill.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </section>

        <section className="projects certificates" aria-labelledby="certificates-heading">
          <h2 id="certificates-heading">Certifications and trainings</h2>
          <div id="certificate-cards" className="certificate-cards">
            {visibleCertificates.map((certificate, index) => (
              <motion.article
                className="card"
                key={certificate.title}
                {...revealCard(index % 2, reduceMotion)}
              >
                <div className="certificate-logo">
                  <img src={thumb(certificate.image)} alt={`${certificate.company} logo`} width={150} height={150} loading="lazy"/>
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
          </div>

          {hiddenCount > 0 && (
            <button
              type="button"
              className="certificate-toggle"
              aria-expanded={showAllCertificates}
              aria-controls="certificate-cards"
              onClick={() => setShowAllCertificates((open) => !open)}
            >
              {showAllCertificates
                ? 'Show fewer'
                : `Show all ${certificates.length} certificates`}
            </button>
          )}
        </section>

      </main>
  );
}

export default About;
