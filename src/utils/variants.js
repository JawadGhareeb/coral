export const scaleVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

export const imgVariant = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const menuVariant = {
  hidden: {
    x: "100%", // Start off-screen to the right
  },
  visible: {
    x: 0, // Slide into view
    transition: {
      duration: 0.5,
      ease: "easeInOut", // Smooth easing for the animation
    },
  },
  exit: {
    x: "100%", // Move back off-screen to the right
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const popVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export const userVariant = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const cartVariant = {
  hidden: {
    opacity: 0,
    x: 150,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const searchVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
