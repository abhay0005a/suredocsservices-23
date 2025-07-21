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

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I need help with document services.", "_blank");
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50" itemScope itemType="https://schema.org/Organization">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-4 py-2.5 rounded-xl font-bold text-xl shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <span className="text-white">Sure</span>
                <span className="text-yellow-300">Docs</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-gray-800">Professional Services</div>
              <div className="text-xs text-gray-500 flex items-center space-x-1">
                <Shield className="h-3 w-3 text-green-500" />
                <span>Legal & Verified</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="relative px-3 py-2 text-blue-600 hover:text-blue-800 transition-all duration-300 font-medium group"
            >
              <span>Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <span>Services</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <span>About Us</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              <span>Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-800 group-hover:w-full transition-all duration-300"></div>
            </button>
            <Button
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-5 py-2.5 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              onClick={openWhatsApp}
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 space-y-2 md:hidden bg-gray-50 rounded-xl p-4 border border-gray-200">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3 px-4 rounded-lg font-medium"
            >
              Contact
            </button>
            <Button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg mt-4 flex items-center justify-center space-x-2"
              onClick={openWhatsApp}
            >
              <Phone className="h-4 w-4" />
              <span>Contact WhatsApp</span>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;