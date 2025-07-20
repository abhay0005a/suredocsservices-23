import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Receipt, 
  Building, 
  CreditCard,
  PieChart,
  Users,
  Award,
  ScrollText,
  MessageCircle,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

const ITRServices = () => {
  const services = [
    { name: "Income Tax Return Filing (All ITR Types)", icon: FileText },
    { name: "GST Registration & Return Filing", icon: Receipt },
    { name: "TDS Return Filing", icon: CreditCard },
    { name: "Advance Tax Payment Assistance", icon: Calculator },
    { name: "Business Ledger & Bookkeeping", icon: ScrollText },
    { name: "Profit & Loss Statement", icon: TrendingUp },
    { name: "Balance Sheet Preparation", icon: PieChart },
    { name: "Freelancers & YouTubers ITR Filing", icon: Users },
    { name: "MSME/Udyam Registration", icon: Building },
    { name: "Income Proof Certificates", icon: Award }
  ];

  const openWhatsApp = () => {
    const message = "Hi! I need help with ITR & Accounting Services. Can you provide more details?";
    window.open(`https://wa.me/919205253438?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="itr-services" className="py-20 bg-secondary/30" itemScope itemType="https://schema.org/FinancialService">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" itemProp="name">
            🧾 ITR & Accounting Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" itemProp="description">
            SureDocs Services now offers end-to-end ITR filing and accounting support for individuals, 
            professionals, and small businesses. We ensure fast, accurate, and compliant services at affordable rates.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:scale-105 bg-background">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{service.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-xl p-8 border shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              💬 Have tax-related queries? Let our experts help you.
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <p className="font-medium">Visit us:</p>
                  <p>E-2/16, 3rd Floor, Sector 11,</p>
                  <p>Rohini, Delhi 110085</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <p className="font-medium">Call/WhatsApp:</p>
                  <p>9205253438</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <div className="text-sm">
                  <p className="font-medium">Email:</p>
                  <p>guptaabhay2025@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              variant="cta"
              size="lg"
              onClick={openWhatsApp}
              className="font-semibold"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Now for ITR Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITRServices;