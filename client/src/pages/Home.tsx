import SEOHead from "@/components/SEOHead";
import { ScrollToTop } from "@/components/InteractiveElements";
import ModernHero from "@/components/ModernHero";
import VisuallyEnhanced from "@/components/VisuallyEnhanced";
import StickyNotification from "@/components/StickyNotification";
import FloatingElements from "@/components/FloatingElements";

const Home = () => {
  return (
    <>
      <SEOHead 
        title="Home - Professional Document Services"
        description="Get your documents hassle-free in Delhi NCR. Birth certificates, driving licenses, passports, property mutation, ITR filing & more. 100% legal process."
        keywords="document services Delhi NCR, birth certificate Delhi, driving license Delhi, passport services Delhi, property mutation Delhi, ITR filing Delhi"
      />
      {/* Modern Hero Section */}
      <ModernHero />
      
      {/* Visually Enhanced Services */}
      <VisuallyEnhanced />
      
      <ScrollToTop />
      <StickyNotification />
      <FloatingElements />
    </>
  );
};

export default Home;