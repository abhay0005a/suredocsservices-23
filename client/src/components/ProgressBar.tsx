import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  steps: string[];
  currentStep: number;
}

const ProgressBar = ({ steps, currentStep }: ProgressBarProps) => {
  const [animatedStep, setAnimatedStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStep(currentStep);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center flex-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{
                scale: index <= animatedStep ? 1 : 0.8,
                opacity: index <= animatedStep ? 1 : 0.5,
                backgroundColor: index <= animatedStep ? "#2563eb" : "#e5e7eb"
              }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2"
            >
              {index + 1}
            </motion.div>
            <motion.p
              initial={{ opacity: 0.5 }}
              animate={{ opacity: index <= animatedStep ? 1 : 0.5 }}
              className="text-sm text-center font-medium max-w-[120px]"
            >
              {step}
            </motion.p>
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: index < animatedStep ? 1 : 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="absolute top-5 left-1/2 h-0.5 bg-blue-600 origin-left"
                style={{ width: `calc(100% / ${steps.length} - 2.5rem)` }}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Progress Line */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200 rounded"></div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${(animatedStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 h-0.5 bg-blue-600 rounded"
        />
      </div>
    </div>
  );
};

export default ProgressBar;