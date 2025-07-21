import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Phone, 
  Star, 
  Gift, 
  Clock, 
  Users,
  TrendingUp,
  Zap,
  X,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const InteractiveContactTriggers = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showTimerModal, setShowTimerModal] = useState(false);
  const [showScrollTrigger, setShowScrollTrigger] = useState(false);
  const [showSocialProof, setShowSocialProof] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [userInteracted, setUserInteracted] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      service: "Birth Certificate",
      text: "Got my birth certificate in just 2 days! Amazing service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Priya Sharma",
      location: "Gurgaon", 
      service: "Driving License",
      text: "SureDocs made getting my DL so easy. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=60&h=60&fit=crop&crop=face&auto=format&q=80"
    },
    {
      name: "Amit Singh",
      location: "Noida",
      service: "Property Mutation",
      text: "Complex property work done perfectly. Professional team!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format&q=80"
    }
  ];

  const urgencyOffers = [
    {
      title: "⚡ Flash Sale Alert!",
      discount: "30% OFF",
      description: "Limited time offer on all document services",
      expires: "Expires in 30 minutes",
      color: "from-red-500 to-red-600"
    },
    {
      title: "🎯 First Customer Bonus",
      discount: "25% OFF",
      description: "Special discount for new customers + Free consultation",
      expires: "Today only",
      color: "from-green-500 to-green-600"
    }
  ];

  useEffect(() => {
    // Popup effects disabled - only keep essential scroll trigger
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !showScrollTrigger) {
        setShowScrollTrigger(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScrollTrigger]);

  const openWhatsApp = (context: string) => {
    setUserInteracted(true);
    const message = `Hi! I'm interested in ${context}. Can you help me?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      {/* Exit Intent Modal - Disabled */}
      
      {/* Social Proof Popup - Disabled */}



      {/* Scroll-Based Contact Trigger */}
      <AnimatePresence>
        {showScrollTrigger && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40"
          >
            <Card className="shadow-2xl border-2 border-blue-300 bg-blue-600 text-white">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Need help with documents?</p>
                    <p className="text-xs opacity-90">Get instant assistance</p>
                  </div>
                  <Button
                    onClick={() => openWhatsApp("assistance with documents")}
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    Chat Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>


    </>
  );
};

export default InteractiveContactTriggers;