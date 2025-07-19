import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, Phone, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

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
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/10 to-primary-light/10"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
      itemScope 
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Shield className="h-16 w-16 text-white mr-4" />
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight" itemProp="name">
                  Get Your Documents
                </h1>
                <h2 className="text-3xl md:text-5xl font-bold text-white/90 mt-2">
                  Hassle-Free
                </h2>
              </div>
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0" itemProp="description">
              Professional document services for driving licenses, birth certificates, passports, 
              marriage certificates, and property transfers in Delhi NCR. Fast, reliable, and completely legal process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="cta"
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-primary hover:bg-white/90"
              >
                Get Started Today
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                onClick={openWhatsApp}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-6 w-6 text-white mr-2" />
                <span className="text-white">100% Legal Process</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-6 w-6 text-white mr-2" />
                <span className="text-white">Fast Processing</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <CheckCircle className="h-6 w-6 text-white mr-2" />
                <span className="text-white">Expert Guidance</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>📞 9205253438</span>
                </div>
                <div className="flex items-center text-white">
                  <MessageCircle className="h-5 w-5 mr-3" />
                  <span>✉️ guptaabhay2025@gmail.com</span>
                </div>
                <Button
                  variant="whatsapp"
                  className="w-full mt-4"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;