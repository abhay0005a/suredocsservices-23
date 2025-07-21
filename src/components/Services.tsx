import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  FileText, 
  Shield, 
  Calculator,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Driving License",
      description: "New DL, Renewal, International Permit",
      icon: Car,
      features: ["Fresh DL Application", "License Renewal", "International Driving Permit", "Address Change"],
      price: "₹800 onwards"
    },
    {
      title: "Birth & Death Certificates",
      description: "Official certificates from municipal records",
      icon: FileText,
      features: ["Birth Certificate", "Death Certificate", "Duplicate Copies", "Corrections & Updates"],
      price: "₹600 onwards"
    },
    {
      title: "Passport Services",
      description: "New passport and renewal services",
      icon: Shield,
      features: ["Fresh Passport", "Passport Renewal", "Tatkal Service", "Police Verification"],
      price: "₹1200 onwards"
    },
    {
      title: "ITR & Accounting",
      description: "Complete tax filing and accounting services",
      icon: Calculator,
      features: ["Income Tax Filing (All ITR Types)", "GST Registration & Returns", "Business Bookkeeping", "Financial Statement Preparation"],
      price: "₹500 onwards"
    }
  ];

  const openWhatsApp = (serviceName: string) => {
    const message = `Hi! I need help with ${serviceName}. Can you provide more details?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-white" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4" itemProp="name">Our Document Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" itemProp="description">
            We provide comprehensive document services to make your life easier in Delhi NCR. 
            All processes are completely legal and handled by experienced professionals specializing in government paperwork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="text-center border-t border-gray-100 pt-4">
                <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold"
                  onClick={() => openWhatsApp(service.title)}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
            onClick={() => openWhatsApp("General Inquiry")}
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;