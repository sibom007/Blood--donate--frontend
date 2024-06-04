export const fadeIn = (
  direction: string,
  delay: number
): {
  hidden: { y: string; x: string };
  show: {
    y: number;
    x: number;
    opacity: number;
    transition: {
      type: string;
      delay: number;
      duration: number;
      ease: number[];
    };
  };
} => {
  return {
    hidden: {
      y: direction === "up" ? "40" : direction === "down" ? "-40" : "0",
      x: direction === "left" ? "40" : direction === "right" ? "-40" : "0",
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
