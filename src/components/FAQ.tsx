import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to get a certificate?",
      answer: "Processing time varies by document type. Birth/Death certificates typically take 7-15 days, Driving License 15-30 days, and Passport 30-45 days. We provide expedited services where available."
    },
    {
      question: "Do you work on weekends?",
      answer: "Yes! We understand that government offices may be closed on weekends, but our team is available to assist you with consultations, document preparation, and follow-ups. We work 7 days a week for your convenience."
    },
    {
      question: "Are your services completely legal?",
      answer: "Absolutely! We follow all official government procedures and work through proper channels. We never engage in any illegal activities and ensure all your documents are processed through legitimate means."
    },
    {
      question: "What documents do I need to provide?",
      answer: "Required documents vary by service. Generally, you'll need identity proof (Aadhar/PAN), address proof, and specific documents related to your application. We'll provide a complete checklist after understanding your requirements."
    },
    {
      question: "Do you handle emergency or urgent cases?",
      answer: "Yes, we offer expedited services for urgent requirements. Tatkal passport services, urgent DL processing, and emergency certificate issuance are available with additional express charges."
    },
    {
      question: "What are your charges?",
      answer: "Our charges vary based on the service and urgency. We provide transparent pricing with no hidden costs. Government fees are separate from our service charges. Contact us for detailed quotations."
    },
    {
      question: "Do you provide home pickup and delivery?",
      answer: "Yes, we offer doorstep pickup of documents and delivery of completed certificates within Delhi NCR. This service ensures maximum convenience for our customers."
    },
    {
      question: "What if my application gets rejected?",
      answer: "While our success rate is 99%, if any application faces issues, we provide complete support to resolve them. We guide you through corrections, additional documentation, or alternative approaches at no extra cost."
    },
    {
      question: "Can you help with document corrections?",
      answer: "Yes, we specialize in correcting errors in existing documents - name spelling, date of birth, address changes, etc. We handle the entire correction process through proper legal channels."
    },
    {
      question: "Do you provide updates on application status?",
      answer: "Absolutely! We provide regular updates via WhatsApp/SMS about your application status. You'll know exactly where your application stands at each stage of processing."
    }
  ];

  const openWhatsApp = () => {
    window.open("https://wa.me/919205253438?text=Hi! I have a question not covered in the FAQ.", "_blank");
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers! Find solutions to the most common 
            queries about our document services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 p-8 bg-secondary/30 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help you with any specific queries.
            </p>
            <Button
              variant="cta"
              size="lg"
              onClick={openWhatsApp}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Ask Your Question
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;