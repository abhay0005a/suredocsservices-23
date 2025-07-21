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
      dir="ltr"
      style={{ direction: 'ltr' }}
    >
      <div className="container mx-auto px-4" style={{ direction: 'ltr' }}>
        <div className="flex items-center justify-between h-20" style={{ direction: 'ltr' }}>
          {/* Logo */}
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.08, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img 
                    src="/attached_assets/Screenshot 2025-07-19 155630_1753088749711.png" 
                    alt="SureDocs Logo" 
                    className="h-10 w-10 object-contain filter brightness-0 invert"
                    onError={(e) => {
                      // Fallback to text logo if image fails to load
                      e.currentTarget.style.display = 'none';
                      const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                      if (fallbackElement) {
                        fallbackElement.style.display = 'block';
                      }
                    }}
                  />
                  <div className="bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold text-lg hidden">
                    SureDocs
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <motion.div 
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  SureDocs
                </motion.div>
                <div className="text-xs text-gray-500 font-medium">Professional Services</div>
              </div>
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