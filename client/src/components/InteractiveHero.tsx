import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, CheckCircle, Clock } from "lucide-react";
import { Link } from "wouter";

const InteractiveHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const slides = [
    {
      title: "Get Your Documents Fast & Legal",
      subtitle: "Birth Certificates • Driving License • Passports",
      highlight: "Same Day Service Available",
      bgColor: "from-blue-600 to-blue-800"
    },
    {
      title: "Property & Municipal Services",
      subtitle: "Property Mutation • Trade License • Building Approvals",
      highlight: "MCD/NDMC Specialists",
      bgColor: "from-green-600 to-green-800"
    },
    {
      title: "Tax & Business Solutions",
      subtitle: "ITR Filing • GST Registration • Business Setup",
      highlight: "CA Verified Process",
      bgColor: "from-purple-600 to-purple-800"
    }
  ];

  const stats = [
    { icon: Users, number: "5000+", label: "Happy Clients" },
    { icon: CheckCircle, number: "98%", label: "Success Rate" },
    { icon: Clock, number: "24hr", label: "Quick Response" },
    { icon: Star, number: "4.9", label: "Rating" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I'm interested in your document services. Can you help me?", "_blank");
  };

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br"
          animate={{
            background: [
              "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
              "linear-gradient(135deg, #059669 0%, #047857 100%)",
              "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
              "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Cursor follower */}
        <motion.div
          className="fixed w-4 h-4 bg-white/30 rounded-full pointer-events-none z-50 mix-blend-difference"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 400 }}
        />

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="container mx-auto px-4 text-center text-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold inline-block mb-6"
                >
                  {slides[currentSlide].highlight}
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                onClick={openWhatsApp}
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                >
                  View All Services
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 group-hover:bg-white/30 transition-all">
                    <stat.icon className="h-8 w-8 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Engagement Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to SureDocs!
              </h3>
              
              <p className="text-gray-600 mb-6">
                Get your documents processed faster than ever. Our experts are ready to help you right now!
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    setShowModal(false);
                    openWhatsApp();
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                >
                  Chat on WhatsApp Now
                </Button>
                
                <Button
                  variant="outline"
                  onClick={() => setShowModal(false)}
                  className="w-full"
                >
                  Browse Services First
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveHero;