import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Phone, MessageCircle, Shield, Clock, Award } from "lucide-react";
import { Link } from "wouter";

const EnhancedHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [userEngaged, setUserEngaged] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const heroSlides = [
    {
      title: "Get Documents Fast & Legal",
      subtitle: "Birth Certificates • Driving Licenses • Passports",
      cta: "Same Day Service Available",
      bgGradient: "from-blue-600 via-blue-700 to-blue-800",
      accent: "text-yellow-400"
    },
    {
      title: "Property & Municipal Services", 
      subtitle: "Property Mutation • Trade Licenses • Building Approvals",
      cta: "MCD/NDMC Specialists",
      bgGradient: "from-green-600 via-green-700 to-green-800",
      accent: "text-blue-300"
    },
    {
      title: "Tax & Business Solutions",
      subtitle: "ITR Filing • GST Registration • Business Setup", 
      cta: "CA Verified Process",
      bgGradient: "from-purple-600 via-purple-700 to-purple-800",
      accent: "text-green-300"
    }
  ];

  const trustIndicators = [
    { icon: Shield, text: "100% Legal", count: "Verified" },
    { icon: Star, text: "4.9 Rating", count: "5000+ Reviews" },
    { icon: Clock, text: "Quick Service", count: "24hr Response" },
    { icon: Award, text: "Expert Team", count: "10+ Years" }
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    const engagementTimer = setTimeout(() => {
      if (!userEngaged) {
        setShowOfferModal(true);
      }
    }, 5000);

    return () => {
      clearInterval(slideInterval);
      clearTimeout(engagementTimer);
    };
  }, [userEngaged]);

  const handleUserEngagement = () => {
    setUserEngaged(true);
    setShowOfferModal(false);
  };

  const openWhatsApp = (message?: string) => {
    const defaultMessage = "Hi! I'm interested in your document services. Can you help me?";
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message || defaultMessage)}`, "_blank");
    handleUserEngagement();
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <>
      <motion.div 
        className="relative min-h-screen overflow-hidden"
        style={{ y }}
      >
        {/* Animated Background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgGradient}`}
          animate={{
            background: heroSlides.map(slide => 
              `linear-gradient(135deg, ${slide.bgGradient.replace('from-', '').replace(' via-', ', ').replace(' to-', ', ')})`
            )
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Interactive Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [null, -100],
                opacity: [0.3, 0],
                scale: [1, 1.5, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen text-left" dir="ltr">
          <div className="container mx-auto px-4 text-white">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Attention-Grabbing Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="inline-block mb-6"
              >
                <div className={`bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-sm ${currentSlideData.accent} shadow-2xl`}>
                  {currentSlideData.cta} ⚡
                </div>
              </motion.div>

              {/* Dynamic Title */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentSlide}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight text-left"
                  style={{ direction: 'ltr' }}
                >
                  {currentSlideData.title}
                </motion.h1>
              </AnimatePresence>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl mb-8 opacity-90 text-left"
                style={{ direction: 'ltr' }}
              >
                {currentSlideData.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button
                  onClick={() => openWhatsApp()}
                  size="lg"
                  className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  onClick={() => window.location.href = '/services'}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  View All Services
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
              >
                {trustIndicators.map((indicator, index) => (
                  <motion.div
                    key={indicator.text}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 group-hover:bg-white/20 transition-all border border-white/20">
                      <indicator.icon className="h-8 w-8 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-lg font-bold text-left" style={{ direction: 'ltr' }}>{indicator.text}</div>
                      <div className="text-sm opacity-80 text-left" style={{ direction: 'ltr' }}>{indicator.count}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                handleUserEngagement();
              }}
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
            <div className="text-sm mb-2 text-left" style={{ direction: 'ltr' }}>Scroll to explore</div>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Engagement Modal */}
      <AnimatePresence>
        {showOfferModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowOfferModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              className="bg-white rounded-3xl p-8 max-w-md mx-auto shadow-2xl border-4 border-yellow-400"
              onClick={(e) => e.stopPropagation()}
              style={{ direction: 'ltr' }}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                >
                  <Star className="h-10 w-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left" style={{ direction: 'ltr' }}>
                  🎉 Special Welcome Offer!
                </h3>
                
                <p className="text-gray-600 mb-6 text-left" style={{ direction: 'ltr' }}>
                  Get <span className="font-bold text-green-600">20% OFF</span> on your first document service + FREE consultation!
                </p>
                
                <div className="space-y-3">
                  <Button
                    onClick={() => openWhatsApp("Hi! I saw the 20% OFF welcome offer. Can you help me with my documents?")}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-3"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Claim Offer Now
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={() => setShowOfferModal(false)}
                    className="w-full"
                  >
                    Maybe Later
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 mt-4 text-left" style={{ direction: 'ltr' }}>
                  *Offer valid for new customers only
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedHero;