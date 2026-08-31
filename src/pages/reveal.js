// Shared scroll-reveal for the two card grids (projects, certificates).
//
// Reduced motion: pass `initial={false}` on the group instead of "hidden".
// Motion propagates `initial` down the variant tree, so every child mounts
// straight into its visible state and nothing moves.

export const revealGroup = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Reveal once, when a fifth of the grid has entered the viewport.
export const revealViewport = { once: true, amount: 0.2 };
