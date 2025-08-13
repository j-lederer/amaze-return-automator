import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="group hover-lift transition-smooth"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="gradient-card p-8 rounded-2xl shadow-card h-full border border-border/50">
        <div className="mb-6">
          <div className="gradient-primary p-4 rounded-xl w-fit shadow-glow">
            <Icon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent transition-smooth">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;