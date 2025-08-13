import { Button } from "@/components/ui/button";
import { Rocket, Mail, Clock, Shield, Headphones } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Ready to Transform Your Operations?
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
          Join the future of warehouse management. Our software brings your processing into the 21st century and streamlines your business so you can focus on growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
            asChild
          >
            <a href="/register">
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
          </Button>
          
          <Button 
            variant="glass" 
            size="lg" 
            className="text-lg px-8 py-4"
            asChild
          >
            <a href="/support">
              <Mail className="w-5 h-5 mr-2" />
              Contact Sales
            </a>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm opacity-75">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Setup takes less than 5 minutes
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Enterprise-grade security
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4" />
            24/7 support
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;