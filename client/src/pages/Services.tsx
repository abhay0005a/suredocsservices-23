import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  FileText, 
  Shield, 
  Calculator,
  MessageCircle,
  Heart,
  Home,
  Briefcase,
  Filter
} from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services", icon: Filter },
    { id: "govt", name: "Govt Documents", icon: Shield },
    { id: "certificates", name: "Certificates", icon: FileText },
    { id: "transfers", name: "Transfers", icon: Home },
    { id: "legal", name: "Legal Services", icon: Briefcase }
  ];

  const services = [
    {
      title: "Driving License",
      description: "New DL, Renewal, International Permit",
      icon: Car,
      category: "govt",
      price: "₹800 onwards",
      faq: [
        {
          question: "What documents are required for a new driving license?",
          answer: "You'll need proof of age, address proof, passport-size photos, and medical certificate. We'll guide you through the complete list based on your specific case."
        },
        {
          question: "How long does the process take?",
          answer: "Typically 7-15 working days for a new license, 3-7 days for renewal. We handle all paperwork and follow-ups for you."
        },
        {
          question: "Do you provide pickup and delivery?",
          answer: "Yes, we offer document pickup from your location and delivery of the processed license to your address in Delhi NCR."
        }
      ]
    },
    {
      title: "Birth & Death Certificates",
      description: "Official certificates from municipal records",
      icon: FileText,
      category: "certificates",
      price: "₹600 onwards",
      faq: [
        {
          question: "Can you get certificates for old records?",
          answer: "Yes, we can retrieve certificates for records dating back several decades from municipal corporations and registrar offices."
        },
        {
          question: "What if there are errors in the original record?",
          answer: "We can help with corrections and amendments through proper legal channels and municipal procedures."
        }
      ]
    },
    {
      title: "Passport Services",
      description: "New passport and renewal services",
      icon: Shield,
      category: "govt",
      price: "₹1200 onwards",
      faq: [
        {
          question: "Do you handle police verification?",
          answer: "Yes, we coordinate with local police stations and can expedite the verification process through proper channels."
        },
        {
          question: "What about Tatkal passport services?",
          answer: "We provide complete Tatkal passport services with faster processing times and premium support."
        }
      ]
    },
    {
      title: "Marriage Certificates",
      description: "Legal marriage registration and certificates",
      icon: Heart,
      category: "certificates",
      price: "₹1000 onwards",
      faq: [
        {
          question: "What's the difference between registration and certificate?",
          answer: "Marriage registration is the legal process, while the certificate is the official document. We handle both steps completely."
        },
        {
          question: "Can you handle inter-faith marriages?",
          answer: "Yes, we process both Hindu Marriage Act and Special Marriage Act registrations based on your requirements."
        }
      ]
    },
    {
      title: "Property Transfer",
      description: "Registry, mutation, and ownership transfers",
      icon: Home,
      category: "transfers",
      price: "₹2500 onwards",
      faq: [
        {
          question: "What documents are needed for property transfer?",
          answer: "Sale deed, property papers, NOCs, tax receipts, and identity proofs. We'll provide a complete checklist based on your property type."
        },
        {
          question: "Do you handle stamp duty and registration fees?",
          answer: "Yes, we calculate exact amounts, handle payments, and ensure all legal requirements are met for the transfer."
        }
      ]
    },
    {
      title: "ITR & Accounting",
      description: "Complete tax filing and accounting services",
      icon: Calculator,
      category: "legal",
      price: "₹500 onwards",
      faq: [
        {
          question: "Which ITR forms do you handle?",
          answer: "We file all ITR forms (ITR-1 to ITR-7) for individuals, businesses, companies, and professionals."
        },
        {
          question: "Do you provide GST services?",
          answer: "Yes, complete GST registration, monthly/quarterly returns, and compliance management for businesses."
        },
        {
          question: "What about bookkeeping services?",
          answer: "We offer complete bookkeeping, financial statement preparation, and accounting solutions for businesses."
        }
      ]
    }
  ];

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const openWhatsApp = (serviceName: string) => {
    const message = `Hi! I need help with ${serviceName}. Can you provide more details?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive document services to make your life easier. All processes are completely legal 
            and handled by experienced professionals.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "bg-blue-600 text-white shadow-lg" 
                  : "hover:bg-blue-50 hover:border-blue-300"
              }`}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-blue-600">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                  <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                    {service.price}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="faq">
                      <AccordionTrigger className="text-left font-medium">
                        Frequently Asked Questions
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {service.faq.map((faq, faqIndex) => (
                            <div key={faqIndex} className="border-l-2 border-blue-200 pl-4">
                              <h4 className="font-medium text-gray-800 mb-2">{faq.question}</h4>
                              <p className="text-gray-600 text-sm">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button
                    onClick={() => openWhatsApp(service.title)}
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Quote on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;