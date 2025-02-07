import React from 'react'
import "../assets/styles/maincard.scss";

const MainCard = () => {
  return (
    <>

    <div className='maincard'>

      <div className='profile'>
        <img src="images/rcgs.jpg" alt="" width={'485px'} height={'350px'}/>
      </div>
      
      <div className='logo'>
        <img src="images/wel-logo-final.png" alt="RCGS Logo" width={'140px'} height={'150px'} />
      </div>

      <h1>Reuel Christian Sundiam</h1>
      <h2>Future Fullstack Developer</h2>

      <div>
        <ul className='social-links'>
          <li><a href="https://www.facebook.com/reuelchristian.sundiam" target='_blank'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook logo"/></a></li>
          <li><a href="https://github.com/ru-wel" target='_blank'><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/100/1A1A1A/github.png" alt="github logo"/></a></li>
          <li><a href="https://www.linkedin.com/in/reuel-christian-sundiam" target='_blank'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png" alt="linkedin logo"/></a></li>
          <li><a href="mailto:reuelchristian.sundiam04@gmail.com" target='_blank'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/apple-mail.png" alt="apple-mail"/></a></li>
        </ul>
      </div>

      <div className='buttons'>
        <button>Download Resume</button>
        <button><a href="/contact">Contact Me</a></button>
      </div>
      
    </div>

    <div className="profilecard">

      <div className="home">
        <h2>HOME</h2>
        <p>I am a passionate learner who loves exploring technology—leading to my interest in both frontend and backend development and dream of becoming a full-stack developer. I am eager to keep learning and growing to achieve my goals and make a difference in the tech world.</p>
      </div>

      <div className="projects">
        <h2>FEATURED PROJECTS</h2>

        <div className="projectcards">

          <div className="card">
            <img src="images/rcgs.jpg" alt="" width={'279px'} height={'173px'}/>
            <h3>MNHS LMS</h3>
            <p>A Learning Managemenht System (LMS) proposed for a local high school in Mexico, Pampanga.</p>
          </div>

          <div className="card">
            <img src="images/rcgs.jpg" alt="" width={'279px'} height={'173px'}/>
            <h3>MNHS LMS</h3>
            <p>A Learning Managemenht System (LMS) proposed for a local high school in Mexico, Pampanga.</p>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default MainCard