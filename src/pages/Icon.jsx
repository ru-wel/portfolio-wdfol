import {
  faAddressCard,
  faArrowLeft,
  faArrowRight,
  faBars,
  faCloudArrowDown,
  faGlobe,
  faHouse,
  faIdCardClip,
  faLaptopCode,
  faMagnifyingGlassPlus,
  faPause,
  faPlay,
  faUser,
  faXmark,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Font Awesome icons (CC BY 4.0, fontawesome.com) drawn as inline SVG.
// The site used to @import the whole Font Awesome stylesheet from a CDN,
// which blocked rendering and pulled ~300 KB of CSS and icon fonts for 15
// glyphs. Only the icons named here reach the bundle.
const icons = {
  'address-card': faAddressCard,
  'arrow-left': faArrowLeft,
  'arrow-right': faArrowRight,
  bars: faBars,
  'cloud-arrow-down': faCloudArrowDown,
  envelope: faEnvelope,
  github: faGithub,
  globe: faGlobe,
  house: faHouse,
  'id-card-clip': faIdCardClip,
  'laptop-code': faLaptopCode,
  linkedin: faLinkedin,
  'magnifying-glass-plus': faMagnifyingGlassPlus,
  pause: faPause,
  play: faPlay,
  user: faUser,
  xmark: faXmark,
};

// Sized by font-size, like the icon font was, so existing `font-size` rules
// on icon containers keep working. Always decorative: the control around it
// carries the accessible name.
const Icon = ({ name, className = '' }) => {
  const [width, height, , , path] = icons[name].icon;

  return (
    <svg
      className={`icon ${className}`.trim()}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d={path} />
    </svg>
  );
};

export default Icon;
