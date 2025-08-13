import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageSquare, Clock, Shield, Headphones } from "lucide-react";
import { useState } from "react";

const Support = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback("");
    // Show success message
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Support Center
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get the help you need to maximize your warehouse efficiency
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="gradient-card shadow-card border border-border/50 hover-lift transition-smooth">
            <CardHeader className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Phone Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Call or text us directly for immediate assistance
              </p>
              <a 
                href="tel:+15165002711" 
                className="text-accent hover:text-accent/80 font-semibold text-lg transition-colors"
              >
                +1 (516) 500-2711
              </a>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card border border-border/50 hover-lift transition-smooth">
            <CardHeader className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>Email Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Send us detailed questions or feedback
              </p>
              <a 
                href="mailto:amaze.software.solutions@gmail.com" 
                className="text-accent hover:text-accent/80 font-semibold transition-colors break-all"
              >
                amaze.software.solutions@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card border border-border/50 hover-lift transition-smooth">
            <CardHeader className="text-center">
              <Headphones className="w-12 h-12 mx-auto mb-4 text-accent" />
              <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Round-the-clock assistance when you need it
              </p>
              <span className="text-green-400 font-semibold">
                Always Available
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Support Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="gradient-card shadow-card border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-accent" />
                Response Times
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone/Text:</span>
                <span className="font-semibold">Immediate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-semibold">Within 2 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Critical Issues:</span>
                <span className="font-semibold text-accent">15 minutes</span>
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-card shadow-card border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                Support Types
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Technical troubleshooting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Account & billing assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Integration guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Training & best practices</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback Form */}
        <Card className="gradient-card shadow-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-accent" />
              Send Us Feedback
            </CardTitle>
            <p className="text-muted-foreground">
              Help us improve by sharing your suggestions and experiences
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Textarea
                placeholder="Please share your feedback, suggestions, or feature requests..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={6}
                className="resize-none"
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={!feedback.trim()}
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Submit Feedback
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" asChild>
              <a href="/tutorial">View Tutorial</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/account">Account Settings</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/jobs">Manage Jobs</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;