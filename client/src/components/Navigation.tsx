import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I need help with document services.", "_blank");
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const isActiveLink = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <img 
                src="/attached_assets/Pi7_Tool_Screenshot2025-07-19155630_1753085216252.jpeg" 
                alt="SureDocs Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallbackElement) {
                    fallbackElement.style.display = 'block';
                  }
                }}
              />
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-xl hidden">
                SureDocs
              </div>
              <div className="text-sm text-gray-600 hidden sm:block">Services</div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium transition-colors duration-300 relative py-2 ${
                    isActiveLink(item.href)
                      ? "text-blue-600" 
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  {isActiveLink(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </motion.button>
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
                onClick={openWhatsApp}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-4"
          >
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                      isActiveLink(item.href)
                        ? "text-blue-600 bg-blue-50" 
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white mt-4"
                onClick={() => {
                  openWhatsApp();
                  setIsMenuOpen(false);
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navigation;