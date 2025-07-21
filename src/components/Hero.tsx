import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I need help with document services.", "_blank");
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gray-50"
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-6" itemProp="name">
              Get Your <br/>
              Documents <br/>
              <span className="text-blue-600 underline decoration-blue-300 decoration-4 underline-offset-8">Hassle-Free</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-lg" itemProp="description">
              Professional document services including driving licenses, birth certificates, passports, 
              marriage certificates, property transfers, and comprehensive ITR filing & accounting services in Delhi NCR. 
              Fast, reliable, and completely legal process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="bg-blue-100 p-2 rounded-full mr-3 animate-pulse">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700 font-medium">100% Legal Process</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="bg-yellow-100 p-2 rounded-full mr-3 animate-pulse">
                  <CheckCircle className="h-5 w-5 text-yellow-600" />
                </div>
                <span className="text-gray-700 font-medium">Fast Processing</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start transform hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="bg-green-100 p-2 rounded-full mr-3 animate-pulse">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700 font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Document illustration with floating elements */}
              <div className="bg-white rounded-2xl shadow-xl p-8 w-80 h-80 flex items-center justify-center border border-gray-100 transform group-hover:scale-105 transition-all duration-500">
                <div className="w-48 h-56 bg-blue-50 rounded-lg border-2 border-blue-200 relative overflow-hidden">
                  <div className="absolute top-4 left-4 right-4 h-3 bg-blue-200 rounded animate-pulse"></div>
                  <div className="absolute top-10 left-4 right-8 h-2 bg-gray-200 rounded"></div>
                  <div className="absolute top-14 left-4 right-12 h-2 bg-gray-200 rounded"></div>
                  <div className="absolute top-18 left-4 right-6 h-2 bg-gray-200 rounded"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements with animations */}
              <div className="absolute -top-4 -left-4 bg-green-500 rounded-full p-3 shadow-lg animate-bounce">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-500 rounded-full p-3 shadow-lg animate-pulse">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="absolute top-8 -right-8 bg-orange-500 rounded-full p-2 shadow-lg animate-ping">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact sidebar */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-50 hidden lg:block hover:scale-105 transition-all duration-300">
          <h3 className="font-bold text-gray-800 mb-3 text-center">Quick Contact</h3>
          <div className="space-y-2 text-sm">
            <a href="tel:9205253438" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              9205253438
            </a>
            <a href="mailto:guptaabhay2025@gmail.com" className="text-gray-600 hover:text-gray-800 block text-xs transition-colors">
              guptaabhay2025@gmail.com
            </a>
            <Button
              size="sm"
              className="w-full bg-green-500 hover:bg-green-600 text-white text-xs transform hover:scale-105 transition-all duration-300"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-3 w-3 mr-1" />
              Contact WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;