import imageSizes from './imageSizes';

// Content data keeps pointing at the original files (/images/foo.png); the
// page serves the WebP copies scripts/images.sh builds next to them.
const base = (src) => src.replace(/^\/images\//, '/images/webp/').replace(/\.(png|jpe?g)$/i, '');

// Full size, for the full-screen viewer.
export const full = (src) => `${base(src)}.webp`;

// 800px wide (or the original, if smaller), for cards and inline previews.
export const thumb = (src) => `${base(src)}-800.webp`;

// [width, height] of the original, or undefined for an unknown file.
export const sizeOf = (src) => imageSizes[src];

// srcset offering the thumbnail and the full file, so a wide or dense screen
// can pick the sharper one and a phone takes the 800px copy.
export const srcSetOf = (src) => {
  const [w] = sizeOf(src) ?? [];
  if (!w || w <= 800) return undefined;
  return `${thumb(src)} 800w, ${full(src)} ${w}w`;
};
