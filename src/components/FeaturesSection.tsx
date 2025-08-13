import FeatureCard from "./FeatureCard";
import { QrCode, Clock, Bot, Shield, BarChart3, Headphones } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: QrCode,
      title: "Smart Barcode Scanning",
      description: "Instantly scan package barcodes to access complete return information. No more manual lookups or data entry errors."
    },
    {
      icon: Clock,
      title: "Lightning Fast Processing", 
      description: "Process returns in just 4 seconds vs 45 seconds manually. Transform your operational efficiency today."
    },
    {
      icon: Bot,
      title: "Automated Restocking",
      description: "Queue items for automatic restocking at 12:00 AM EST daily. Set it and forget it automation."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with encrypted data transmission and secure user authentication systems."
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance metrics, monitor job queues, and get insights into your warehouse operations."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help when you need it with our dedicated support team and comprehensive documentation."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Amaze Software?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of warehouse management with our intelligent automation platform designed for modern businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;