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
    <header className="bg-white shadow-sm sticky top-0 z-50" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
              SureDocs
            </div>
            <div className="text-sm text-gray-600">Services</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium"
              onClick={() => window.open("https://wa.me/919205253438", "_blank")}
            >
              WhatsApp
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
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Contact
            </button>
            <Button
              className="w-full bg-green-500 hover:bg-green-600 text-white"
              onClick={() => window.open("https://wa.me/919205253438", "_blank")}
            >
              WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;