import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Star, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingElements = () => {
  const [showQuickAction, setShowQuickAction] = useState(false);
  const [currentAction, setCurrentAction] = useState(0);

  const quickActions = [
    {
      icon: MessageCircle,
      text: "Chat on WhatsApp",
      subtext: "Get instant help",
      color: "bg-green-500",
      action: () => window.open("https://wa.me/919205253438?text=Hi! I need help with document services", "_blank")
    },
    {
      icon: Phone,
      text: "Call Now",
      subtext: "Speak to expert",
      color: "bg-blue-500", 
      action: () => window.open("tel:+919205253438", "_self")
    },
    {
      icon: Star,
      text: "Get Quote",
      subtext: "Free estimate",
      color: "bg-purple-500",
      action: () => window.open("https://wa.me/919205253438?text=Hi! Can you provide a quote for my documents?", "_blank")
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowQuickAction(true), 8000);
    
    const actionInterval = setInterval(() => {
      setCurrentAction((prev) => (prev + 1) % quickActions.length);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(actionInterval);
    };
  }, []);

  return (
    <>
      {/* Floating Action Bubble */}
      <AnimatePresence>
        {showQuickAction && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-20 left-4 z-40"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`${quickActions[currentAction].color} text-white rounded-2xl p-4 shadow-2xl cursor-pointer max-w-xs border-2 border-white/20`}
              onClick={quickActions[currentAction].action}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              dir="ltr"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  {(() => {
                    const IconComponent = quickActions[currentAction].icon;
                    return <IconComponent className="h-5 w-5" />;
                  })()}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>
                    {quickActions[currentAction].text}
                  </div>
                  <div className="text-xs opacity-90" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>
                    {quickActions[currentAction].subtext}
                  </div>
                </div>
              </div>
              
              {/* Pulsing ring */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 0.3, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="absolute inset-0 border-2 border-white/50 rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Urgency Timer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 15 }}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="bg-red-500 text-white px-6 py-3 rounded-full shadow-2xl border-2 border-white/30" dir="ltr">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 animate-pulse" />
            <span className="text-sm font-bold" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
              🔥 Limited Time: 20% OFF expires in 2 hours!
            </span>
            <Zap className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingElements;