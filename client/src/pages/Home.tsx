import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { InteractiveStats, ServicePreview, ScrollToTop } from "@/components/InteractiveElements";
import EnhancedHero from "@/components/EnhancedHero";
import ParallaxSection from "@/components/ParallaxSection";
import StickyNotification from "@/components/StickyNotification";
import InteractiveServiceCards from "@/components/InteractiveServiceCards";
import AdvancedInteractions from "@/components/AdvancedInteractions";
import FloatingElements from "@/components/FloatingElements";

const Home = () => {
  return (
    <>
      <SEOHead 
        title="Home - Professional Document Services"
        description="Get your documents hassle-free in Delhi NCR. Birth certificates, driving licenses, passports, property mutation, ITR filing & more. 100% legal process."
        keywords="document services Delhi NCR, birth certificate Delhi, driving license Delhi, passport services Delhi, property mutation Delhi, ITR filing Delhi"
      />
      {/* Enhanced Hero Section */}
      <EnhancedHero />
      
      {/* Interactive Service Cards */}
      <InteractiveServiceCards />
      
      {/* Parallax Features Section */}
      <ParallaxSection />
      
      {/* Advanced Interactions Section */}
      <AdvancedInteractions />
      
      <div className="bg-gradient-to-br from-gray-50 to-blue-50">
      <main className="container mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-gray-800 leading-tight mb-6"
          >
            Get Your <br/>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-blue-600 underline decoration-blue-300 decoration-4 underline-offset-8"
            >
              Documents
            </motion.span>
            <br/>
            Hassle-Free
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Complete government document assistance, municipal services, legal & notary work, and professional 
            accounting & tax services in Delhi NCR. From birth certificates to business registration - we handle it all.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-4 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 text-lg"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16"
          >
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">100% Legal Process</h3>
              <p className="text-gray-600 text-center">All documents processed through official government channels</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Processing</h3>
              <p className="text-gray-600 text-center">Quick turnaround times with expert handling</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Guidance</h3>
              <p className="text-gray-600 text-center">Professional support throughout the process</p>
            </div>
          </motion.div>

          {/* Interactive Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mb-16"
          >
            <InteractiveStats />
          </motion.div>

          {/* Service Preview Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-2xl mx-auto"
          >
            <ServicePreview />
          </motion.div>
        </motion.div>
      </main>
      <ScrollToTop />
      <StickyNotification />
      <FloatingElements />
      </div>
    </>
  );
};

export default Home;