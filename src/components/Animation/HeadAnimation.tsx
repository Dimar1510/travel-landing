import { motion } from "framer-motion";

const HeadAnimation = ({ text }: { text: string }) => {
  const letters = text.split("");
  return (
    <div>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default HeadAnimation;
