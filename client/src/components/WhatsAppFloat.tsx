import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after another delay
      setTimeout(() => setShowTooltip(true), 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I found your website and need help with document services.", "_blank");
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 bg-foreground text-background px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap animate-fade-in">
            <div className="relative">
              Need help? Chat with us!
              <button
                onClick={() => setShowTooltip(false)}
                className="ml-3 text-background/70 hover:text-background"
              >
                <X className="h-3 w-3" />
              </button>
              {/* Arrow */}
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
            </div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <Button
          onClick={openWhatsApp}
          className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-scale-in"
          size="icon"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </div>
    </>
  );
};

export default WhatsAppFloat;