import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone } from "lucide-react";
import logoImage from "@/assets/suredocs-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-background shadow-soft sticky top-0 z-50" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logoImage} alt="SureDocs Services Logo - Professional Document Services in Delhi NCR" className="h-10 w-10" itemProp="logo" />
            <div>
              <h1 className="text-xl font-bold text-primary" itemProp="name">SureDocs Services</h1>
              <p className="text-xs text-muted-foreground" itemProp="slogan">Documents & ITR Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Document Services
            </button>
            <button
              onClick={() => scrollToSection("itr-services")}
              className="text-foreground hover:text-primary transition-colors"
            >
              ITR & Accounting
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button
              variant="cta"
              size="sm"
              onClick={() => window.open("tel:+919205253438")}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 space-y-4 md:hidden">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Document Services
            </button>
            <button
              onClick={() => scrollToSection("itr-services")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              ITR & Accounting
            </button>
            <button
              onClick={() => scrollToSection("why-choose-us")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <Button
              variant="cta"
              className="w-full"
              onClick={() => window.open("tel:+919205253438")}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;