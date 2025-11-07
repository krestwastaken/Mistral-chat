import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 text-gray-500 text-sm px-2">
      <motion.span
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        Mistral is thinking
      </motion.span>
      <motion.span
        className="flex space-x-1"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
      >
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </motion.span>
    </div>
  );
}
