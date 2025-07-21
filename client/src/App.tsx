import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { queryClient } from "@/lib/queryClient";
import Navigation from "./components/Navigation";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
        <WhatsAppFloat />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
