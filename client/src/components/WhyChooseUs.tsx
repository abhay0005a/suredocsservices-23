import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  Phone, 
  Star,
  FileCheck,
  HeartHandshake
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "100% Legal & Secure",
      description: "All our processes follow official government procedures. Your documents are handled with complete safety and confidentiality.",
      icon: Shield,
      color: "text-blue-600"
    },
    {
      title: "Fast Processing",
      description: "We expedite your document processing through our established network and expertise, saving you valuable time.",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Expert Team",
      description: "Our experienced professionals handle all types of documentation with precision and care.",
      icon: Users,
      color: "text-purple-600"
    },
    {
      title: "Guaranteed Results",
      description: "We ensure successful completion of your document requirements with a proven track record.",
      icon: CheckCircle,
      color: "text-emerald-600"
    },
    {
      title: "24/7 Support",
      description: "Get assistance whenever you need it. Our support team is always available to help you.",
      icon: Phone,
      color: "text-orange-600"
    },
    {
      title: "Customer Satisfaction",
      description: "Over 1000+ satisfied customers trust us for their document needs. Join our happy family!",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      title: "Transparent Process",
      description: "No hidden charges. We provide clear timelines and keep you updated throughout the process.",
      icon: FileCheck,
      color: "text-indigo-600"
    },
    {
      title: "Personal Touch",
      description: "We understand each case is unique and provide personalized solutions for your specific needs.",
      icon: HeartHandshake,
      color: "text-pink-600"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      service: "Driving License",
      text: "Got my DL renewed in just 3 days! Excellent service and very professional team.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      service: "Birth Certificate",
      text: "They helped me get my son's birth certificate quickly. Very reliable and trustworthy.",
      rating: 5
    },
    {
      name: "Amit Singh",
      service: "Property Transfer",
      text: "Smooth property transfer in Rohini. They handled all paperwork perfectly.",
      rating: 5
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose SureDocs Services?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another document service provider. We're your trusted partners 
            in making official paperwork simple, fast, and stress-free.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-background rounded-2xl p-8 shadow-soft">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">What Our Customers Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <h4 className="text-3xl font-bold text-primary">1000+</h4>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary">5+</h4>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary">50+</h4>
            <p className="text-muted-foreground">Document Types</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-primary">99%</h4>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;