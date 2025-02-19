import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Nav from './Nav';
import ProfileCard from './ProfileCard.jsx';
import "../assets/styles/about.scss";
import skills from '../assets/skills';
import ProgressProvider from "./ProgressProvider";
import certifcates from "../assets/certificates.js";

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
            <p>A brief overview of your background, skills, and interests. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
      <div className="certificate-cards">
        {certifcates.map((certificate, index) => 
          <div className="card" key={index}>
            <div className="certificate-logo">
              <img src={certificate.image} alt={certificate.company} width="150px" height="150px" />
            </div>
            <h3>{certificate.company}</h3>
            <p>{certificate.title}</p>
            <button className='button-confirm' onClick={() => handleAction(certificate)}>{certificate.action}</button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default About;