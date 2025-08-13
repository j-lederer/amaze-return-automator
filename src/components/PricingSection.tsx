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
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Plan */}
            <div className="relative">
              {/* Popular badge */}
              <div className="absolute -top-4 right-8 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Flame className="w-4 h-4" />
                  Popular
                </div>
              </div>
              
              <div className="gradient-card rounded-2xl shadow-elegant border-2 border-accent/50 overflow-hidden hover-glow transition-smooth h-full">
                {/* Header */}
                <div className="gradient-primary p-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Professional Plan</h3>
                  <div className="text-5xl font-bold mb-2">$14.99</div>
                  <div className="text-lg opacity-90">/month</div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  {/* Trial offer */}
                  <div>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold mb-2 text-green-400">
                        30-Day Free Trial
                      </div>
                      <p className="text-muted-foreground">No credit card required</p>
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="text-center space-y-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="text-lg px-8 py-3 w-full"
                      asChild
                    >
                      <a href="/register">
                        <Rocket className="w-4 h-4 mr-2" />
                        Start Free Trial
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Annual Plan */}
            <div className="relative">
              {/* Popular badge */}
              <div className="absolute -top-4 right-8 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                  <Flame className="w-4 h-4" />
                  Popular
                </div>
              </div>
              
              <div className="gradient-card rounded-2xl shadow-elegant border-2 border-accent/50 overflow-hidden hover-glow transition-smooth h-full">
                {/* Header */}
                <div className="gradient-primary p-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">Annual Plan</h3>
                  <div className="text-5xl font-bold mb-2">$149.99</div>
                  <div className="text-lg opacity-90">/year</div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  {/* Savings offer */}
                  <div>
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold mb-2 text-green-400">
                        Save $30!
                      </div>
                      <p className="text-muted-foreground">2 months free + 30-day trial</p>
                    </div>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="text-center space-y-4">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="text-lg px-8 py-3 w-full"
                      asChild
                    >
                      <a href="/register">
                        <Rocket className="w-4 h-4 mr-2" />
                        Start Annual Plan
                      </a>
                    </Button>
                    
                    <div className="text-xs text-muted-foreground">
                      <p>
                        Equivalent to <strong>$12.49/month</strong>
                      </p>
                    </div>
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