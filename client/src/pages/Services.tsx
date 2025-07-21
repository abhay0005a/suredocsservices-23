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
import SEOHead from "@/components/SEOHead";
import { ScrollToTop } from "@/components/InteractiveElements";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services", icon: Filter },
    { id: "govt", name: "Government Documents", icon: Shield },
    { id: "municipal", name: "Municipal Services", icon: Home },
    { id: "legal", name: "Legal & Notary", icon: Briefcase },
    { id: "tax", name: "Accounting & Tax", icon: Calculator }
  ];

  const services = [
    {
      title: "Birth & Death Certificates",
      description: "New registration, old record search (MCD/NDMC), certified copies",
      icon: FileText,
      category: "govt",
      price: "₹600 onwards",
      faq: [
        {
          question: "Can you search old records from MCD/NDMC?",
          answer: "Yes, we specialize in retrieving old birth/death records from MCD (Municipal Corporation of Delhi) and NDMC archives, even for decades-old records."
        },
        {
          question: "What's the difference between new registration and old record search?",
          answer: "New registration is for recent births/deaths, while old record search involves finding and obtaining certified copies of historical records from municipal archives."
        },
        {
          question: "How long does the process take?",
          answer: "New registrations take 7-10 days, while old record searches may take 10-15 days depending on the age of the record."
        }
      ]
    },
    {
      title: "Marriage Certificate",
      description: "Online application, SDM appointment, affidavit preparation",
      icon: Heart,
      category: "govt",
      price: "₹1000 onwards",
      faq: [
        {
          question: "Do you handle SDM appointments?",
          answer: "Yes, we manage the complete process including online application submission and securing SDM appointments for marriage registration."
        },
        {
          question: "What affidavits are required?",
          answer: "We prepare all necessary affidavits including age proof, marital status, and address affidavits as required by the registration process."
        }
      ]
    },
    {
      title: "Driving License Services",
      description: "Learner & permanent license, renewal, duplicate, address change",
      icon: Car,
      category: "govt",
      price: "₹800 onwards",
      faq: [
        {
          question: "Do you handle both learner and permanent licenses?",
          answer: "Yes, we assist with learner license applications and conversion to permanent driving licenses, including all required tests and documentation."
        },
        {
          question: "Can you help with license renewals and duplicates?",
          answer: "Absolutely! We handle renewals, duplicate licenses, and address changes with minimal hassle and quick processing."
        }
      ]
    },
    {
      title: "Vehicle RC Services",
      description: "Ownership transfer, duplicate RC, hypothecation removal",
      icon: Car,
      category: "govt",
      price: "₹1200 onwards",
      faq: [
        {
          question: "How do you handle vehicle ownership transfers?",
          answer: "We manage the complete transfer process including NOC from previous state, registration transfer, and updating all vehicle documents."
        },
        {
          question: "What is hypothecation removal?",
          answer: "When you clear your vehicle loan, we help remove the bank's name from your RC, making you the sole owner of the vehicle."
        }
      ]
    },
    {
      title: "Passport Services",
      description: "New applications, renewal, correction, document checklist",
      icon: Shield,
      category: "govt",
      price: "₹1500 onwards",
      faq: [
        {
          question: "Do you provide document checklist support?",
          answer: "Yes, we provide personalized document checklists based on your specific passport requirements and handle the entire application process."
        },
        {
          question: "Can you help with passport corrections?",
          answer: "We assist with all types of passport corrections including name, date of birth, place of birth, and other personal details."
        }
      ]
    },
    {
      title: "PAN & Aadhaar Services",
      description: "New PAN, corrections, Aadhaar updates & linking guidance",
      icon: Shield,
      category: "govt",
      price: "₹300 onwards",
      faq: [
        {
          question: "Can you help with lost PAN card replacement?",
          answer: "Yes, we handle PAN card reprint, corrections in name/date of birth, and provide guidance for linking PAN with Aadhaar."
        },
        {
          question: "Do you provide Aadhaar update services?",
          answer: "We provide offline support and guidance for Aadhaar updates, linking services, and resolving common Aadhaar-related issues."
        }
      ]
    },
    {
      title: "Health Trade License (MCD)",
      description: "New license, renewal, transfer for food & health businesses",
      icon: Home,
      category: "municipal",
      price: "₹2000 onwards",
      faq: [
        {
          question: "What businesses need MCD health trade license?",
          answer: "Restaurants, food vendors, medical stores, clinics, and any health-related businesses operating in MCD areas require this license."
        },
        {
          question: "Can you help with license transfers?",
          answer: "Yes, we handle complete license transfers when you change business ownership or location within MCD jurisdiction."
        }
      ]
    },
    {
      title: "Property Mutation & Transfer",
      description: "DDA/MCD/DJB mutation after sale or death, property tax help",
      icon: Home,
      category: "municipal",
      price: "₹3000 onwards",
      faq: [
        {
          question: "What is property mutation?",
          answer: "Mutation is updating property ownership records with DDA/MCD/DJB after property sale, inheritance, or transfer."
        },
        {
          question: "Do you help with property tax disputes?",
          answer: "Yes, we assist with property tax payments, dispute resolution, and ensuring compliance with municipal requirements."
        }
      ]
    },
    {
      title: "Building Plan Approval",
      description: "Plan sanction, regularization (MCD/DDA), construction permits",
      icon: Home,
      category: "municipal",
      price: "₹5000 onwards",
      faq: [
        {
          question: "What is building plan regularization?",
          answer: "Regularization legalizes unauthorized constructions by obtaining proper approvals from MCD/DDA post-construction."
        },
        {
          question: "Do you handle both MCD and DDA approvals?",
          answer: "Yes, we work with both MCD (Municipal Corporation of Delhi) and DDA (Delhi Development Authority) for various approvals."
        }
      ]
    },
    {
      title: "Affidavits & Notary Services",
      description: "Name change, DOB, address proof, relationship affidavits, notarization",
      icon: Briefcase,
      category: "legal",
      price: "₹200 onwards",
      faq: [
        {
          question: "What types of affidavits do you prepare?",
          answer: "We prepare affidavits for name change, date of birth correction, address proof, relationship proof, income certificates, and custom affidavits."
        },
        {
          question: "Do you provide notarization services?",
          answer: "Yes, we offer complete notarization services and help with e-stamp paper procurement (₹10-₹500)."
        }
      ]
    },
    {
      title: "Income Tax Return (ITR) Filing",
      description: "All ITR forms for salaried, business owners, freelancers",
      icon: Calculator,
      category: "tax",
      price: "₹500 onwards",
      faq: [
        {
          question: "Which ITR forms do you handle?",
          answer: "We file all ITR forms (ITR-1 to ITR-7) for salaried individuals, business owners, freelancers, and companies with experienced accountants."
        },
        {
          question: "Do you provide tax planning consultation?",
          answer: "Yes, we offer tax planning advice, investment guidance, and strategies to minimize tax liability legally."
        }
      ]
    },
    {
      title: "GST & Business Services",
      description: "GST registration, filing, MSME registration, DSC, business setup",
      icon: Calculator,
      category: "tax",
      price: "₹1000 onwards",
      faq: [
        {
          question: "What GST services do you provide?",
          answer: "Complete GST registration, monthly/quarterly GST return filing, MSME/Udyam registration, and Digital Signature Certificate (DSC) services."
        },
        {
          question: "Can you help set up new businesses?",
          answer: "Yes, we assist with proprietorship, partnership, and LLP registration, along with all compliance requirements."
        }
      ]
    },
    {
      title: "Bookkeeping & Financial Services",
      description: "Monthly accounts, balance sheet, P&L, TDS returns, financial reports",
      icon: Calculator,
      category: "tax",
      price: "₹2000 onwards",
      faq: [
        {
          question: "What bookkeeping services do you offer?",
          answer: "Monthly income & expense management, balance sheet preparation, profit/loss statements, and annual financial report preparation."
        },
        {
          question: "Do you handle TDS returns?",
          answer: "Yes, we file TDS returns and ensure compliance with all TDS-related requirements for businesses and individuals."
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
    <>
      <SEOHead 
        title="Services - Complete Document Solutions in Delhi NCR"
        description="Professional document services: birth certificates, driving licenses, passports, property mutation, ITR filing, GST registration, business setup. MCD/NDMC specialists with 100% legal process."
        keywords="birth certificate Delhi, driving license Delhi, passport services Delhi, property mutation Delhi, ITR filing Delhi, GST registration, business registration Delhi, affidavit services, notary Delhi"
      />
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
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

        {/* Additional Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-blue-50 rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Value-added services to make your experience seamless</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Appointment Booking</h3>
              <p className="text-sm text-gray-600">RTO, SDM, Passport Seva Kendra appointments</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <Car className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Pickup & Delivery</h3>
              <p className="text-sm text-gray-600">Document collection and delivery in Delhi NCR</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <FileText className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Document Checklist</h3>
              <p className="text-sm text-gray-600">Personalized checklist for each service</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <MessageCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">WhatsApp and call support for queries</p>
            </div>
          </div>
        </motion.div>
      </div>
      <ScrollToTop />
      </div>
    </>
  );
};

export default Services;