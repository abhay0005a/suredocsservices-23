import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I need help with document services.", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 border border-gray-200 min-w-[200px]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800">Need Help?</p>
                <p className="text-xs text-gray-600">Chat with us on WhatsApp</p>
              </div>
              <button
                onClick={() => setShowTooltip(false)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={openWhatsApp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;