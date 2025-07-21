import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, Shield, CheckCircle, Target } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { number: "5000+", label: "Documents Processed", icon: CheckCircle },
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "100%", label: "Legal Compliance", icon: Shield }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & Document Specialist",
      experience: "12+ years in government documentation",
      expertise: ["MCD/NDMC Services", "Property Mutation", "Municipal Licenses"]
    },
    {
      name: "Priya Sharma",
      role: "Tax & Accounting Expert",
      experience: "8+ years in taxation and accounting",
      expertise: ["ITR Filing", "GST Services", "Business Setup", "MSME Registration"]
    },
    {
      name: "Amit Singh",
      role: "Legal & Municipal Services Head",
      experience: "10+ years in legal documentation",
      expertise: ["Affidavits", "Notary Services", "Building Approvals", "DDA/MCD Work"]
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide comprehensive government, municipal, legal, and tax services that save time and eliminate the hassle of dealing with complex bureaucratic processes in Delhi NCR."
    },
    {
      icon: Shield,
      title: "Our Promise",
      description: "100% legal compliance, transparent pricing, expert guidance, and end-to-end support for all government documentation and business requirements."
    },
    {
      icon: Award,
      title: "Our Expertise",
      description: "Specialized knowledge in MCD/NDMC procedures, DDA/DJB processes, municipal licensing, tax compliance, and business registration with proven success rates."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About SureDocs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your comprehensive solution for government documents, municipal services, legal documentation, and tax compliance in Delhi NCR. 
            We specialize in MCD/NDMC services, property matters, business registration, and complete accounting solutions.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who make your document processing smooth and hassle-free
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.experience}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose SureDocs?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">100% Legal Process</h4>
                  <p className="text-gray-600">All documents processed through official government channels</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Guidance</h4>
                  <p className="text-gray-600">Professional support throughout the entire process</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Transparent Pricing</h4>
                  <p className="text-gray-600">No hidden costs, clear pricing structure</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Fast Delivery</h4>
                  <p className="text-gray-600">Quick turnaround times with tracking updates</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Door-to-Door Service</h4>
                  <p className="text-gray-600">Document pickup and delivery at your convenience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">24/7 Support</h4>
                  <p className="text-gray-600">WhatsApp support for queries and updates</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;