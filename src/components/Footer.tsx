import { Shield, Phone, Mail, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/suredocs-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Driving License",
    "Birth & Death Certificates", 
    "Marriage Certificate",
    "Health Trade License",
    "Passport Services",
    "Vehicle RC Transfer",
    "Property Transfer",
    "Affidavits & Legal"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="SureDocs Services Logo - Document Services Delhi NCR" className="h-10 w-10 invert" itemProp="logo" />
              <div>
                <h3 className="text-xl font-bold" itemProp="name">SureDocs Services</h3>
                <p className="text-sm opacity-80" itemProp="slogan">Trusted Document Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed" itemProp="description">
              Your trusted partner for all official document services in Delhi NCR. We make paperwork simple, 
              fast, and completely legal. Get your documents hassle-free with our expert team specializing in Rohini, Delhi.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-400" />
              <span className="text-sm">100% Legal & Secure Process</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("services");
                    }}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-all duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary-light transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-light" />
                <div>
                  <p className="text-sm font-medium">📞 9205253438</p>
                  <p className="text-xs opacity-70">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-light" />
                <div>
                  <p className="text-sm font-medium">✉️ guptaabhay2025@gmail.com</p>
                  <p className="text-xs opacity-70">Quick Response</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-light" />
                <div>
                  <p className="text-sm font-medium">Delhi NCR</p>
                  <p className="text-xs opacity-70">Specializing in Rohini</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary-light" />
                <div>
                  <p className="text-sm font-medium">Mon - Sun: 9 AM - 9 PM</p>
                  <p className="text-xs opacity-70">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80">
                © {currentYear} SureDocs Services. All rights reserved.
              </p>
              <p className="text-xs opacity-60 mt-1">
                Trusted by 1000+ customers across Delhi NCR
              </p>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("tel:+919205253438")}
                className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call
              </Button>
              <Button
                variant="whatsapp"
                size="sm"
                onClick={() => window.open("https://wa.me/919205253438?text=Hi! I need help with document services.", "_blank")}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;