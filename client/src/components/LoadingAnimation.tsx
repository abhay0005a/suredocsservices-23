import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface LoadingAnimationProps {
  text?: string;
  size?: "sm" | "md" | "lg";
}

const LoadingAnimation = ({ text = "Loading...", size = "md" }: LoadingAnimationProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center p-8"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className={`${sizeClasses[size]} text-blue-600`} />
      </motion.div>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-gray-600 font-medium"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};

export default LoadingAnimation;