import { PhotoView } from 'react-photo-view';

import { full, thumb, sizeOf, srcSetOf } from '../assets/images';
import Icon from './Icon';

// A screenshot that opens full size. It used to be a bare <img> with a
// "Click the image to preview it full size." line under every one, and it
// could not be reached from the keyboard. As a button it can, and the
// zoom-in cursor plus the corner magnifier (for touch, where there is no
// cursor) say the same thing without the sentence.
//
// Inline, it shows the 800px WebP (or the full one, via srcset, where the
// screen needs it); the viewer opens the full-size WebP. Width and height
// come from the generated size table so the box is reserved before load.
const Zoomable = ({ src, alt, sizes = '100vw', ...imgProps }) => {
  const [w, h] = sizeOf(src) ?? [];

  return (
    <PhotoView src={full(src)}>
      <button type="button" className="zoomable" aria-label={`View full size: ${alt}`}>
        <img
          src={thumb(src)}
          srcSet={srcSetOf(src)}
          sizes={sizes}
          alt={alt}
          width={w}
          height={h}
          {...imgProps}
        />
        <span className="zoomable__icon" aria-hidden="true">
          <Icon name="magnifying-glass-plus" />
        </span>
      </button>
    </PhotoView>
  );
};

export default Zoomable;
