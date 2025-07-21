import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  Phone, 
  Star, 
  Users, 
  Clock, 
  Shield, 
  Zap,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

const AdvancedInteractions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showReviews, setShowReviews] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -100]);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      service: "Birth Certificate",
      rating: 5,
      text: "Got my birth certificate in just 2 days! Amazing service and very professional team.",
      location: "Delhi"
    },
    {
      name: "Priya Sharma", 
      service: "Driving License",
      rating: 5,
      text: "SureDocs made getting my driving license so easy. No hassle, no running around!",
      location: "Gurgaon"
    },
    {
      name: "Amit Singh",
      service: "Property Mutation",
      rating: 5,
      text: "Complex property mutation done perfectly. They handled everything professionally.",
      location: "Noida"
    },
    {
      name: "Neha Gupta",
      service: "ITR Filing",
      rating: 5,
      text: "Best tax filing service! Got maximum refund and great advice for next year.",
      location: "Faridabad"
    }
  ];

  const achievements = [
    { icon: Users, number: "5000+", label: "Happy Customers", color: "text-blue-600" },
    { icon: Star, number: "4.9", label: "Average Rating", color: "text-yellow-500" },
    { icon: Clock, number: "24hrs", label: "Quick Response", color: "text-green-600" },
    { icon: Shield, number: "100%", label: "Legal Process", color: "text-purple-600" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    const reviewTimer = setTimeout(() => setShowReviews(true), 3000);
    
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      clearTimeout(reviewTimer);
      clearInterval(testimonialInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const openWhatsApp = (context: string) => {
    const message = `Hi! I'm interested in ${context}. Can you help me get started?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden" dir="ltr">
      {/* Interactive cursor effect */}
      <motion.div
        className="fixed w-8 h-8 bg-blue-500/20 rounded-full pointer-events-none z-50 mix-blend-multiply"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 400 }}
      />

      {/* Floating background elements */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Indicators Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
            Trusted by 5000+ Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
            Join thousands of satisfied customers who got their documents hassle-free
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="group"
              >
                <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-medium" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Testimonial Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
              What Our Customers Say
            </h3>
            <div className="flex justify-center items-center space-x-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
              <span className="text-lg font-semibold text-gray-700 ml-2" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
                4.9/5 from 1000+ reviews
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-bold text-gray-800" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <span className="text-sm text-gray-500" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>
                          • {testimonials[currentTestimonial].location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 mb-3">
                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                        ))}
                        <span className="text-sm font-medium text-blue-600" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>
                          {testimonials[currentTestimonial].service}
                        </span>
                      </div>
                      <p className="text-gray-700 italic" style={{ direction: 'ltr', textAlign: 'start', unicodeBidi: 'normal' }}>
                        "{testimonials[currentTestimonial].text}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Testimonial indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Interactive CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center"
                >
                  <Zap className="h-10 w-10 text-yellow-300" />
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
                  Ready to Get Your Documents?
                </h3>
                
                <p className="text-xl mb-8 opacity-90" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
                  Join 5000+ satisfied customers. Get started in just 2 minutes!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => openWhatsApp("getting started with document services")}
                    size="lg"
                    className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-2 h-6 w-6 group-hover:animate-bounce" />
                    Start WhatsApp Chat
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.div>
                  </Button>

                  <Button
                    onClick={() => window.location.href = 'tel:+919205253438'}
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold rounded-full transition-all duration-300"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    Call Now
                  </Button>
                </div>

                <div className="mt-6 text-sm opacity-75" style={{ direction: 'ltr', textAlign: 'center', unicodeBidi: 'normal' }}>
                  💬 Usually responds within 5 minutes
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdvancedInteractions;