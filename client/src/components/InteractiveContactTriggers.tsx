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
    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !userInteracted) {
        setShowExitIntent(true);
      }
    };

    // Scroll-based triggers
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !showScrollTrigger) {
        setShowScrollTrigger(true);
      }
    };

    // Timer-based modals
    const timers = [
      setTimeout(() => setShowSocialProof(true), 8000)
    ];

    // Testimonial rotation
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      timers.forEach(clearTimeout);
      clearInterval(testimonialInterval);
      clearInterval(countdownInterval);
    };
  }, [userInteracted, showScrollTrigger]);

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
      {/* Exit Intent Modal */}
      <AnimatePresence>
        {showExitIntent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowExitIntent(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              className="bg-white rounded-3xl p-8 max-w-lg mx-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowExitIntent(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                  <Gift className="h-10 w-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Wait! Don't Leave Yet! 🎉
                </h3>
                
                <p className="text-gray-600 mb-6 text-lg">
                  Get <span className="font-bold text-red-600">INSTANT 25% OFF</span> on your first document service!
                </p>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-700">
                    <strong>Special Exit Offer:</strong> This discount expires in 5 minutes and won't be shown again.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button
                    onClick={() => openWhatsApp("the 25% OFF exit offer")}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Claim My 25% Discount
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => setShowExitIntent(false)}
                    className="w-full"
                  >
                    Maybe Later
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Proof Popup */}
      <AnimatePresence>
        {showSocialProof && (
          <motion.div
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            className="fixed top-1/4 left-4 z-40 max-w-sm"
          >
            <Card className="shadow-2xl border-2 border-green-200 bg-white">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-green-600">JUST COMPLETED</span>
                    </div>
                    <p className="text-sm font-medium text-gray-800">
                      <strong>{testimonials[currentTestimonial].name}</strong> from {testimonials[currentTestimonial].location}
                    </p>
                    <p className="text-xs text-gray-600">
                      Got {testimonials[currentTestimonial].service} processed successfully!
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button
                  onClick={() => openWhatsApp("document services after seeing customer success")}
                  className="w-full mt-3 bg-green-500 hover:bg-green-600 text-white text-sm"
                >
                  Get Started Like {testimonials[currentTestimonial].name}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>



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