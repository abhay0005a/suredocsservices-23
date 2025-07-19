import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  FileText, 
  Heart, 
  Shield, 
  MapPin, 
  Home,
  Briefcase,
  ScrollText,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Driving License",
      description: "New DL, Renewal, International Permit",
      icon: Car,
      features: ["Fresh DL Application", "License Renewal", "International Driving Permit", "Address Change"]
    },
    {
      title: "Birth & Death Certificates",
      description: "Official certificates from municipal records",
      icon: FileText,
      features: ["Birth Certificate", "Death Certificate", "Duplicate Copies", "Corrections & Updates"]
    },
    {
      title: "Marriage Certificate",
      description: "Legal marriage registration and certificates",
      icon: Heart,
      features: ["Marriage Registration", "Certificate Issuance", "Court Marriage", "Duplicate Copies"]
    },
    {
      title: "Health Trade License",
      description: "Business licenses for health-related trades",
      icon: Briefcase,
      features: ["New License Application", "License Renewal", "Trade Permit", "Health Department NOC"]
    },
    {
      title: "Passport Services",
      description: "New passport and renewal services",
      icon: Shield,
      features: ["Fresh Passport", "Passport Renewal", "Tatkal Service", "Police Verification"]
    },
    {
      title: "Vehicle RC Transfer",
      description: "Vehicle registration certificate transfer",
      icon: Car,
      features: ["Ownership Transfer", "RC Renewal", "Duplicate RC", "Address Change"]
    },
    {
      title: "Property Transfer (Rohini)",
      description: "Specialized in Rohini, Delhi property transfers",
      icon: Home,
      features: ["Property Registration", "Mutation", "Title Transfer", "Legal Documentation"]
    },
    {
      title: "Affidavits & MCD/SDM",
      description: "Legal affidavits and municipal services",
      icon: ScrollText,
      features: ["Affidavit Drafting", "Notarization", "MCD Services", "SDM Office Work"]
    }
  ];

  const openWhatsApp = (serviceName: string) => {
    const message = `Hi! I need help with ${serviceName}. Can you provide more details?`;
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive document services to make your life easier. 
            All processes are completely legal and handled by experienced professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => openWhatsApp(service.title)}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="cta"
            size="lg"
            onClick={() => openWhatsApp("General Inquiry")}
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;