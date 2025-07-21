import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trackConversion, trackServiceInterest } from "@/lib/analytics";
import { 
  FileText, 
  Car, 
  Home, 
  Calculator, 
  Shield, 
  Clock, 
  Star, 
  Users,
  CheckCircle,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const VisuallyEnhanced = () => {
  const services = [
    {
      icon: FileText,
      title: "Government Documents",
      description: "Birth certificates, Death certificates, Marriage certificates",
      price: "Starting ₹600",
      time: "2-3 days",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Car,
      title: "Vehicle Services",
      description: "Driving license, RC transfer, Vehicle registration",
      price: "Starting ₹800",
      time: "1-2 days",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Home,
      title: "Property Services",
      description: "Property mutation, Registry, Building approvals",
      price: "Starting ₹2000",
      time: "5-7 days",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Calculator,
      title: "Tax & Business",
      description: "ITR filing, GST registration, Business setup",
      price: "Starting ₹1500",
      time: "1-3 days",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Legal Process",
      description: "All documents through official channels",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround guaranteed",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "10+ years of experience",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=200&fit=crop&crop=center&auto=format&q=80"
    }
  ];

  const openWhatsApp = (service: string) => {
    // Track service interest and conversion
    trackServiceInterest(service, 'whatsapp_click');
    trackConversion('whatsapp', service);
    
    const message = `Hi! I'm interested in ${service}. Can you help me?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Hero Section with Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl -mx-8 -my-8 border border-blue-200"></div>
          <div className="relative z-10 py-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional document services with guaranteed results and customer satisfaction
            </p>
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-lg font-semibold">100% Legal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-semibold">Fast Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-semibold">Trusted Process</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="border-2 border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-80`}></div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-white/90 text-sm">{service.description}</p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-gray-800">{service.price}</div>
                      <div className="text-sm text-gray-500">Delivery: {service.time}</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => openWhatsApp(service.title)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Quote Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Why Choose SureDocs?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide reliable, fast, and completely legal document services across Delhi NCR
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
                  <div className="relative h-48">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg mb-2">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="border-2 border-blue-300 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop&crop=center&auto=format&q=80')] opacity-20 bg-cover bg-center"></div>
            <CardContent className="relative z-10 p-12">
              <h3 className="text-4xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90">
                Trust us with your important documents - professional and reliable service
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => openWhatsApp("getting started with document services")}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-bold"
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Start WhatsApp Chat
                  <ArrowRight className="h-6 w-6 ml-2" />
                </Button>
                
                <Button
                  onClick={() => window.location.href = '/services'}
                  variant="outline"
                  size="lg"
                  className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold text-[#080000]"
                >
                  View All Services
                </Button>
              </div>

              <div className="mt-8 text-sm opacity-75">
                💬 Usually responds within 5 minutes • 🏆 Professional service • ⚡ Fast delivery
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VisuallyEnhanced;