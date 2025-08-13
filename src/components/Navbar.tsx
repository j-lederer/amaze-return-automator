import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="sm" className="hover-glow transition-smooth cursor-pointer" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-accent transition-smooth">
              Home
            </a>
            <a href="/tutorial" className="text-foreground hover:text-accent transition-smooth">
              Tutorial
            </a>
            <a href="/support" className="text-foreground hover:text-accent transition-smooth">
              Support
            </a>
            <Button variant="ghost" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button variant="hero" asChild>
              <a href="/register">Start Free Trial</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-lg border-b border-border">
            <a href="/" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth">
              Home
            </a>
            <a href="/tutorial" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth">
              Tutorial
            </a>
            <a href="/support" className="block px-3 py-2 text-foreground hover:text-accent transition-smooth">
              Support
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="ghost" asChild className="w-full">
                <a href="/login">Login</a>
              </Button>
              <Button variant="hero" asChild className="w-full">
                <a href="/register">Start Free Trial</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;