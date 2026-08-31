// Shared scroll-reveal for the two card grids (projects, certificates).
//
// The delay is driven by each card's own index via Motion's `custom` prop,
// not by `staggerChildren` on the group. Stagger is orchestrated by the
// parent at the moment IT changes variant, so any child mounted later (the
// certificates disclosure) would skip the cascade and pop in all at once.
// Index-based delay behaves the same whether a card mounts with the group
// or long after it.
//
// Reduced motion: pass no motion props at all. See About.jsx.

export const STAGGER_STEP = 0.06;

export const revealGroup = {
  hidden: {},
  visible: {},
};

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

// Reveal once, when a fifth of the grid has entered the viewport.
export const revealViewport = { once: true, amount: 0.2 };
