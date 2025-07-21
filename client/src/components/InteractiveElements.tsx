import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Star, Users, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

// Scroll to top button
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Animated counter component
export const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };
    
    requestAnimationFrame(animateCount);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Interactive stats section
export const InteractiveStats = () => {
  const stats = [
    { number: 5000, label: "Documents Processed", icon: Shield, suffix: "+" },
    { number: 500, label: "Happy Clients", icon: Users, suffix: "+" },
    { number: 10, label: "Years Experience", icon: Clock, suffix: "+" },
    { number: 98, label: "Success Rate", icon: Star, suffix: "%" }
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
        >
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
            <stat.icon className="h-8 w-8 text-blue-600" />
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            <AnimatedCounter end={stat.number} suffix={stat.suffix} />
          </div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Interactive service preview
export const ServicePreview = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    { name: "Government Documents", description: "Birth certificates, passports, driving licenses" },
    { name: "Municipal Services", description: "Property mutation, trade licenses, building approvals" },
    { name: "Legal & Notary", description: "Affidavits, notarization, e-stamp services" },
    { name: "Tax & Accounting", description: "ITR filing, GST services, business registration" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-center mb-6">Our Services</h3>
      <div className="flex justify-center mb-6">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveService(index)}
            className={`w-3 h-3 rounded-full mx-1 transition-all ${
              index === activeService ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h4 className="text-xl font-semibold text-gray-800 mb-2">
            {services[activeService].name}
          </h4>
          <p className="text-gray-600">{services[activeService].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};