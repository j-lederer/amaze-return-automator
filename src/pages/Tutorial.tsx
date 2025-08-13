import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Play, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  UserPlus, 
  Settings,
  RefreshCw,
  QrCode,
  Plus,
  Rocket
} from "lucide-react";

const Tutorial = () => {
  const steps = [
    {
      title: "Initial Setup",
      icon: UserPlus,
      items: [
        "Go to Account and press the button to connect your Amazon account",
        "Press on the button to Subscribe to Amaze-Software",
        "Optional: Go to home and press 'Refresh Returns and Inventory' to get started immediately"
      ]
    },
    {
      title: "Daily Usage",
      icon: QrCode,
      items: [
        "Scan the barcode of the return label - returns info will appear",
        "If you wish to add the returned item to inventory, press 'Add To Queue'",
        "When done with a batch of returns, press 'Add To Jobs'"
      ]
    },
    {
      title: "Automated Processing",
      icon: Clock,
      items: [
        "Inventory will be increased automatically at 12:00 AM EST",
        "Returns data refreshes automatically every night",
        "You can add multiple queues to the Jobs table as needed"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-primary bg-clip-text text-transparent">
              Tutorial & Guide
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn how to maximize your warehouse efficiency with Amaze Software
          </p>
        </div>

        {/* Video Tutorials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Video Tutorials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="gradient-card shadow-card border border-border/50 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-accent" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center mb-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/0QaBhFqd-Fc?si=yMLPHdhtBLpij6DI" 
                    title="Getting Started Tutorial" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-muted-foreground">
                  Complete walkthrough of initial setup and basic features
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border border-border/50 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Play className="w-6 h-6 text-accent" />
                  Advanced Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted/20 rounded-lg flex items-center justify-center mb-4">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/qyz4n-cT-Gc?si=gYNwI8UchFRhaRE1" 
                    title="Advanced Features Tutorial" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-muted-foreground">
                  Deep dive into advanced workflow optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Step-by-Step Guide</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="gradient-card shadow-card border border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="gradient-primary p-3 rounded-lg">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <Badge variant="outline" className="mt-0.5 px-2 py-1">
                          {itemIndex + 1}
                        </Badge>
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Important Notices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Guidelines</h2>
          <div className="space-y-6">
            <Alert className="border-red-500/50 bg-red-500/10">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <AlertDescription className="text-red-200">
                <strong>Critical Timing:</strong> DO NOT edit your inventory between 11:00 PM - 2:00 AM EST on nights when you have jobs scheduled to execute at midnight.
              </AlertDescription>
            </Alert>

            <Alert className="border-yellow-500/50 bg-yellow-500/10">
              <AlertTriangle className="w-5 h-5 text-yellow-400" />
              <AlertDescription className="text-yellow-200">
                <strong>Manual Execution Warning:</strong> If you manually execute tasks, DO NOT edit inventory in Amazon Seller Central within 1 hour before or 2 hours after execution.
              </AlertDescription>
            </Alert>

            <Alert className="border-green-500/50 bg-green-500/10">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <AlertDescription className="text-green-200">
                <strong>Recommended:</strong> Allow the website to execute inventory increases automatically at midnight EST to avoid timing conflicts.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Data Limitations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Data & System Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="gradient-card shadow-card border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <RefreshCw className="w-6 h-6 text-accent" />
                  Returns Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  • Accesses returns data from the last 60 days only
                </p>
                <p className="text-muted-foreground">
                  • Refresh will show FATAL status if no returns exist in last 60 days
                </p>
                <p className="text-muted-foreground">
                  • Data automatically refreshes every night at midnight
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-accent" />
                  Inventory Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  • SKUs must be actively listed in your inventory
                </p>
                <p className="text-muted-foreground">
                  • Amazon Token must be valid (refresh annually)
                </p>
                <p className="text-muted-foreground">
                  • Failed updates typically due to unlisted SKUs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Troubleshooting */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Troubleshooting</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="gradient-card shadow-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-red-400">Inventory Update Fails</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>Ensure rejected SKUs are actively listed in inventory</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>Check if Amazon Token has expired (refresh in account)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card shadow-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-red-400">Returns Refresh Fails</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>Verify you have returns in the last 60 days</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  <span>Ensure Amazon Token is not expired</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;