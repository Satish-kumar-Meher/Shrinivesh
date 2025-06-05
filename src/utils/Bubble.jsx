import { motion } from 'framer-motion';


export const Bubbles = ({ darkMode }) => {

    
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden z-0 pointer-events-none"
      aria-hidden
    >
      {[...Array(20)].map((_, i) => {
        const size = 1 + Math.random() * 100;
        const top = `${Math.random() * 100}%`;
        const left = `${Math.random() * 100}%`;
        const bubbleColor = darkMode ? '#10e2ea' : '#0e6371';

        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
              backgroundColor: bubbleColor,
              boxShadow: `0 0 25px 10px ${bubbleColor}`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 10, 0],
              opacity: [0.1, 0.1, 0.1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </motion.div>
  );
};