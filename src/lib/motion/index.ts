export const listVariants = (childrenDelay: number) => ({
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: childrenDelay, // 0.1s delay between each child
    },
  },
  hidden: {
    opacity: 0,
    transition: {
        when: 'afterChildren',
        staggerChildren: childrenDelay
    }
  },
});

export const itemVariantsBounceIn  = (delay:number, duration:number) => ({
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring", // Spring animation for the bounce
      stiffness: 500, // Adjust stiffness for a stronger bounce effect
      damping: 20, // Damping to smooth out the end of the bounce
      mass: 1,
      duration, // Total duration of the bounce animation
      delay
    },
  },
  hidden: {
    opacity: 1,
    scale: 0,
    transition: { duration: 0.5 }
  },
  removed : {
    opacity: 0,
    scale: 1,
    transition: {
      type: "spring", // Spring animation for the bounce
      stiffness: 500, // Adjust stiffness for a stronger bounce effect
      damping: 20, // Damping to smooth out the end of the bounce
      mass: 1,
      duration, // Total duration of the bounce animation
      delay: 0.5
    },
  },
})

export const itemVariantsBounceInUp = (delay: number, duration:number) => ({
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Spring animation for the bounce
      stiffness: 500, // Adjust stiffness for a stronger bounce effect
      damping: 20, // Damping to smooth out the end of the bounce
      mass: 1,
      duration, // Total duration of the bounce animation
      delay
    },
  },
  hidden: {
    opacity: 0,
    y: 100, // Starting position: 100px below the original position for the upward bounce effect
    transition: { duration: 0.5 }
  },
})

export const itemVariantsBounceInDown = (delay: number, duration:number) =>({
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring", // Spring animation for the bounce
      stiffness: 500, // Adjust stiffness for a stronger bounce effect
      damping: 20, // Damping to smooth out the end of the bounce
      mass: 1,
      duration, // Total duration of the bounce animation
      delay
    },
  },
  hidden: {
    opacity: 0,
    y: -100, // Starting position: 100px below the original position for the upward bounce effect
    transition: { duration: 0.5 }
  },
});


export const itemVariantsFadeIn = (startDuration: number, endDuration: number) => ({
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: startDuration
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: endDuration
    }
  },
})

export const itemVariantsZoomIn = {
  visible: {
    opacity: [0, 0.8, 1],
    scale: [10, 0.9, 1.2, 0.95, 1],  // Sequence of scaling steps for the bounce
    transition: {
      when: "beforeChildren",
      duration: 1,  // Total duration for the entire sequence
      ease: "easeInOut",  // Smooth easing for bounce effect
      delay: 3
    },
  },
  hidden: {
    opacity: 0,
    scale: 10,  // Start hidden with a large scale
    transition: {
      duration: 0.4,  // Quick zoom out
      ease: "easeInOut",  // Matching easing for consistency
    },
  },
};



export const itemVariantsZoomInFade = (delay: number, duration: number) => ({
  visible: {
    opacity: [0, 1, 1, 0.8, 0.3, 0],
    scale: [1, 1.5],  // Sequence of scaling steps for the bounce
    transition: {
      when: "beforeChildren",
      duration,  // Total duration for the entire sequence
      ease: "easeOut",  // Smooth easing for bounce effect
      delay
    },
  },
  hidden: {
    opacity: 1,
    scale: 0,  // Start hidden with a large scale
    transition: {
      duration: 2,  // Quick zoom out
      ease: "easeInOut",  // Matching easing for consistency
    },
  },
})


export const fade = (delay: number, duration: number) => ({
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration,  // Total duration for the entire sequence
      ease: "easeOut",  // Smooth easing for bounce effect
      delay
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      ease: "easeInOut",  // Matching easing for consistency
      delay,
      duration
    },
  },
})

export const scaleIn = (delay: number, duration:number) => ({
  visible : {
    transition: {
      duration,
      delay,
      when: '',
      ease: 'easeOut'
    },
    scale: 1.5
  },
  hidden: {
    scale: 1
  }
})