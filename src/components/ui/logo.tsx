import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-5xl",
    xl: "text-6xl"
  };

  return (
    <div className={cn("font-light gradient-primary bg-clip-text text-transparent", sizeClasses[size], className)}>
      amaze-software
    </div>
  );
};

export { Logo };