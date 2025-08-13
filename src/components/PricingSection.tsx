import { Button } from "@/components/ui/button";
import { CheckCircle, Flame, Rocket } from "lucide-react";

const PricingSection = () => {
  const features = [
    "Unlimited return processing",
    "Automated restocking", 
    "Real-time analytics",
    "24/7 support",
    "Secure Amazon integration",
    "Enterprise security"
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple,{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start your transformation today with our risk-free trial
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Popular badge */}
            <div className="absolute -top-4 right-8 z-10">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <Flame className="w-4 h-4" />
                Popular
              </div>
            </div>
            
            <div className="gradient-card rounded-2xl shadow-elegant border-2 border-accent/50 overflow-hidden hover-glow transition-smooth">
              {/* Header */}
              <div className="gradient-primary p-8 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Professional Plan</h3>
                <div className="text-6xl font-bold mb-2">$14.99</div>
                <div className="text-xl opacity-90">/month</div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                {/* Trial offer */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold mb-2 text-green-400">
                    30-Day Free Trial
                  </div>
                  <p className="text-muted-foreground">No credit card required</p>
                </div>
                
                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <div className="text-center space-y-4">
                  <Button 
                    variant="hero" 
                    size="lg" 
                    className="text-lg px-12 py-4"
                    asChild
                  >
                    <a href="/register">
                      <Rocket className="w-5 h-5 mr-2" />
                      Start Free Trial
                    </a>
                  </Button>
                  
                  <div className="text-sm text-muted-foreground">
                    <p>
                      <strong>Annual Plan:</strong> $149.99/year{" "}
                      <span className="text-green-400 font-semibold">(Save $30!)</span>
                    </p>
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

export default PricingSection;