import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Car, 
  Home, 
  Calculator, 
  ArrowRight, 
  Clock,
  Users,
  Star,
  MessageCircle 
} from "lucide-react";

const InteractiveServiceCards = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      icon: FileText,
      title: "Government Documents",
      subtitle: "Birth, Death, Marriage Certificates",
      price: "₹600+",
      time: "2-3 days",
      rating: "4.9",
      clients: "2000+",
      features: ["MCD/NDMC Certified", "Express Service", "Home Delivery"],
      color: "from-blue-500 to-blue-600",
      hoverColor: "from-blue-600 to-blue-700"
    },
    {
      icon: Car,
      title: "Vehicle Documents",
      subtitle: "Driving License, RC, Insurance",
      price: "₹800+",
      time: "1-2 days",
      rating: "4.8",
      clients: "1500+",
      features: ["RTO Approved", "Fast Track", "Online Tracking"],
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-600 to-green-700"
    },
    {
      icon: Home,
      title: "Property Services",
      subtitle: "Mutation, Registry, NOC",
      price: "₹2000+",
      time: "5-7 days",
      rating: "4.9",
      clients: "800+",
      features: ["DDA/MCD Expert", "Legal Verified", "Document Support"],
      color: "from-purple-500 to-purple-600",
      hoverColor: "from-purple-600 to-purple-700"
    },
    {
      icon: Calculator,
      title: "Tax & Accounting",
      subtitle: "ITR, GST, Business Setup",
      price: "₹1500+",
      time: "1-3 days",
      rating: "4.8",
      clients: "1200+",
      features: ["CA Verified", "E-filing", "Tax Optimization"],
      color: "from-orange-500 to-orange-600",
      hoverColor: "from-orange-600 to-orange-700"
    }
  ];

  const openWhatsApp = (serviceName: string) => {
    const message = `Hi! I'm interested in ${serviceName}. Can you provide a quote and timeline?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Popular Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any card to see more details or get an instant quote
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-80 cursor-pointer"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setFlippedCard(flippedCard === index ? null : index)}
            >
              <div className="absolute inset-0 transform-gpu transition-transform duration-700 preserve-3d">
                {/* Front of card */}
                <motion.div
                  className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${
                    hoveredCard === index ? service.hoverColor : service.color
                  } text-white shadow-2xl backface-hidden overflow-hidden`}
                  animate={{
                    rotateY: flippedCard === index ? 180 : 0,
                    scale: hoveredCard === index ? 1.05 : 1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 h-full flex flex-col justify-between relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 opacity-10">
                      <service.icon className="h-32 w-32" />
                    </div>

                    <div>
                      <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/90 text-sm mb-4">{service.subtitle}</p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{service.time}</span>
                        </div>
                        <div className="text-2xl font-bold">{service.price}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-current" />
                          <span>{service.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{service.clients}</span>
                        </div>
                      </div>
                      
                      <div className="text-xs opacity-75">
                        Click for details
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Back of card */}
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-2xl bg-white shadow-2xl backface-hidden"
                  style={{ transform: "rotateY(180deg)" }}
                  animate={{
                    rotateY: flippedCard === index ? 0 : -180
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {service.title} Features
                      </h3>
                      
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: flippedCard === index ? 1 : 0,
                              x: flippedCard === index ? 0 : -20
                            }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          openWhatsApp(service.title);
                        }}
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Get Quote on WhatsApp
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFlippedCard(null);
                        }}
                        className="w-full"
                      >
                        Back to Overview
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            onClick={() => window.location.href = '/services'}
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default InteractiveServiceCards;