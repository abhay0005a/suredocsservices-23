import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    {
      icon: Gift,
      title: "Special Offer!",
      message: "Get 20% OFF on Birth Certificate + Driving License combo",
      action: "Claim Now",
      color: "bg-red-500"
    },
    {
      icon: MessageCircle,
      title: "Free Consultation", 
      message: "Expert advice on your documents - completely FREE",
      action: "Get Help",
      color: "bg-green-500"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentOffer((prev) => (prev + 1) % offers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const openWhatsApp = () => {
    const message = `Hi! I saw the ${offers[currentOffer].title.toLowerCase()} on your website. Can you help me?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="fixed bottom-4 right-4 z-40 max-w-sm"
        >
          <div className={`${offers[currentOffer].color} text-white rounded-lg shadow-2xl overflow-hidden border-2 border-white/20`} dir="ltr">
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  {(() => {
                    const IconComponent = offers[currentOffer].icon;
                    return <IconComponent className="h-5 w-5" />;
                  })()}
                  <span className="font-bold text-sm" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>{offers[currentOffer].title}</span>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <p className="text-sm mb-3 opacity-90" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>
                {offers[currentOffer].message}
              </p>
              
              <Button
                onClick={openWhatsApp}
                size="sm"
                className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
              >
                {offers[currentOffer].action}
              </Button>
            </div>
            
            {/* Animated pulse border */}
            <div className="absolute inset-0 border-2 border-white/50 rounded-lg pointer-events-none">
              <motion.div
                className="absolute inset-0 border-2 border-white rounded-lg"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyNotification;