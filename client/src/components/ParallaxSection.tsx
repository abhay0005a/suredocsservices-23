import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Users, Clock, Award } from "lucide-react";

const ParallaxSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: Shield,
      title: "100% Legal",
      description: "All processes through official channels",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "10+ years of experience",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround guaranteed",
      color: "bg-yellow-500"
    },
    {
      icon: Award,
      title: "Best Quality",
      description: "Premium document services",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20">
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-green-500/20 rounded-full blur-xl"></div>
      </motion.div>
      
      <motion.div
        style={{ y: y2 }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-60 right-1/3 w-28 h-28 bg-yellow-500/20 rounded-full blur-xl"></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose SureDocs?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We make document processing simple, fast, and completely legal. 
            Join thousands of satisfied customers across Delhi NCR.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 group-hover:border-white/40 transition-all duration-300">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;