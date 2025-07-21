import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Phone, MessageCircle, CheckCircle, Clock } from "lucide-react";

const ModernHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Get Your Documents Fast & Legal",
      subtitle: "Professional document services in Delhi NCR",
      highlight: "Same Day Service Available",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      gradient: "from-blue-600/80 to-blue-800/80"
    },
    {
      title: "Property & Municipal Services",
      subtitle: "Expert handling of all property documentation",
      highlight: "MCD/NDMC Specialists",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      gradient: "from-green-600/80 to-green-800/80"
    },
    {
      title: "Tax & Business Solutions",
      subtitle: "Complete business setup and tax compliance",
      highlight: "CA Verified Process",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop&crop=center&auto=format&q=80",
      gradient: "from-purple-600/80 to-purple-800/80"
    }
  ];

  const trustBadges = [
    { icon: CheckCircle, text: "100% Legal", subtext: "Official channels" },
    { icon: Star, text: "4.9 Rating", subtext: "1000+ reviews" },
    { icon: Clock, text: "Quick Service", subtext: "24hr response" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I'm interested in your document services. Can you help me?", "_blank");
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img 
            src={currentSlideData.image}
            alt="Document Services"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient}`}></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl border-2 border-yellow-300">
                ⚡ {currentSlideData.highlight}
              </div>
            </motion.div>

            {/* Main Title */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              >
                {currentSlideData.title}
              </motion.h1>
            </AnimatePresence>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              {currentSlideData.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                Get Instant Quote
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => window.location.href = '/services'}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold rounded-full backdrop-blur-sm"
              >
                <Phone className="mr-2 h-6 w-6" />
                Call: +91 92052 53438
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border-2 border-white/40 shadow-lg"
                >
                  <badge.icon className="h-8 w-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">{badge.text}</div>
                  <div className="text-sm opacity-80">{badge.subtext}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModernHero;