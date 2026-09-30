// Shared scroll-reveal for the two card grids (projects, certificates).
//
// Each card watches its own entry into the viewport. The old version watched
// the whole grid and waited for a fifth of it to show; inside the clipped
// scroll panels that threshold was never met, so /projects rendered as an
// empty box until someone scrolled a panel they could not see. A per-card
// trigger also means cards mounted late (the certificates disclosure) reveal
// on their own, with no parent to orchestrate them.
//
// The delay comes from the card's index within its row of arrivals, so a
// batch still cascades instead of popping in all at once.

export const STAGGER_STEP = 0.06;

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * STAGGER_STEP,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

// Reveal once, as soon as a sliver of the card is on screen.
export const revealViewport = { once: true, amount: 0.1 };

// Motion props for one card. Reduced motion gets none at all: the card is
// simply there.
export const revealCard = (index, reduceMotion) =>
  reduceMotion
    ? {}
    : {
        variants: revealItem,
        custom: index,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: revealViewport,
      };
