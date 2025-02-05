import React from 'react'
import "../assets/styles/maincard.scss";

const MainCard = () => {
  return (
    <>
    <h1>Reuel Christian Sundiam</h1>
    <h2>Future Fullstack Developer</h2>
    <div>
      <ul>
        <li><a href="https://www.facebook.com/reuelchristian.sundiam" target='_blank'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook logo"/></a></li>
        <li><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/100/1A1A1A/github.png" alt="github logo"/></li>
        <li><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/linkedin.png" alt="linkedin logo"/></li>
        <li><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/1A1A1A/apple-mail.png" alt="apple-mail"/></li>
      </ul>
    </div>
    <button>Download Resume</button>
    <button>Contact Me</button>
    </>
  )
}

export default MainCard