import { motion } from "framer-motion";

const OFFSETS = {
  up: { y: 40, x: 0 },
  left: { y: 0, x: -100 },
  right: { y: 0, x: 100 },
};

/**
 * Shared "fade + slide in on scroll" wrapper so individual sections don't
 * each repeat the same framer-motion boilerplate.
 */
export const Reveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const offset = OFFSETS[direction] ?? OFFSETS.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};
