import { motion } from "motion/react";

const AnimatedSection = ({ children, className = "" }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;