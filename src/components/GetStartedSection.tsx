import { UserPlus, Link, Play, Shield, CreditCard } from "lucide-react";

const GetStartedSection = () => {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: "Create Account",
      description: "Sign up for your free 30-day trial. No credit card required to get started."
    },
    {
      number: 2, 
      icon: Link,
      title: "Connect Amazon",
      description: "Securely link your Amazon account using OAuth 2.0. You can unlink anytime."
    },
    {
      number: 3,
      icon: Play,
      title: "Start Processing", 
      description: "Begin scanning barcodes and processing returns in seconds, not minutes."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started in{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Minutes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Simple setup process to get you processing returns faster
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative mb-8">
                <div className="gradient-primary w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-glow group-hover:scale-110 transition-smooth">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                )}
              </div>
              
              <div className="gradient-card p-6 rounded-xl shadow-card hover-lift transition-smooth">
                <step.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Security info */}
        <div className="max-w-4xl mx-auto">
          <div className="gradient-card rounded-2xl shadow-card border border-accent/20 overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-accent" />
                Security & Payment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-400">
                    <Shield className="w-5 h-5" />
                    Amazon Integration
                  </h4>
                  <p className="text-muted-foreground">
                    We use Amazon's official OAuth 2.0 secure protocol. Your credentials are never stored on our servers.
                  </p>
                </div>
                
                <div className="text-center md:text-left">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-400">
                    <CreditCard className="w-5 h-5" />
                    Payment Security
                  </h4>
                  <p className="text-muted-foreground">
                    All payments are processed securely through Stripe, trusted by millions of businesses worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;