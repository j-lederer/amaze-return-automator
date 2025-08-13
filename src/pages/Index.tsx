import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import GetStartedSection from "@/components/GetStartedSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  console.log("Index component rendering");
  
  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-white text-4xl p-8">Test - Landing Page Loading</h1>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComparisonSection />
        <PricingSection />
        <GetStartedSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
