import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Animated glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Your{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Warehouse Operations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            For FBM Sellers - Process Returns Like Never Before. Save hours of unnecessary and tedious labor with our cutting-edge automation platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 group"
              asChild
            >
              <a href="/register">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="text-lg px-8 py-4"
              asChild
            >
              <a href="/tutorial">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="pt-16">
            <p className="text-lg mb-8 text-muted-foreground">
              Trusted by warehouse operations worldwide
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="gradient-card p-6 rounded-xl shadow-card hover-glow transition-smooth">
                  <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    4s
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Per Return<br />Processing
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="gradient-card p-6 rounded-xl shadow-card hover-glow transition-smooth">
                  <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    91%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Time<br />Savings
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="gradient-card p-6 rounded-xl shadow-card hover-glow transition-smooth">
                  <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Automated<br />Processing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;