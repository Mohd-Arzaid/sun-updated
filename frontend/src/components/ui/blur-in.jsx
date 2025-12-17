import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const BlurIn = ({ word, className, variant, duration = 1 }) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(" text-center text-md font-bold drop-shadow-sm", className)}
      style={{ willChange: "filter, opacity", transform: "translateZ(0)" }}
    >
      {word}
    </motion.div>
  );
};

export { BlurIn };
