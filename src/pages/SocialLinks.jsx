import Icon from './Icon';

// Ordered by what a recruiter checks first. Facebook is off: it is a
// personal account, not a professional channel.
const SocialLinks = () => (
  <ul className="social-links">
    <li><a href="https://www.linkedin.com/in/reuel-christian-sundiam" target='_blank' rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn profile"><Icon name="linkedin" /></a></li>
    <li><a href="https://github.com/ru-wel" target='_blank' rel="noopener noreferrer" className="social-icon" aria-label="GitHub profile"><Icon name="github" /></a></li>
    <li><a href="mailto:reuelchristian.sundiam04@gmail.com" className="social-icon" aria-label="Send an email"><Icon name="envelope" /></a></li>
  </ul>
);

export default SocialLinks;
