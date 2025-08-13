import { CheckCircle, XCircle, Zap, Snail } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Difference Is{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Clear
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how Amaze Software transforms your workflow
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* With Amaze Software */}
          <div className="group">
            <div className="gradient-card rounded-2xl shadow-card border-2 border-green-500/50 hover-lift transition-smooth overflow-hidden">
              <div className="bg-green-500/10 p-6 border-b border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400">
                    With Amaze Software
                  </h3>
                </div>
                <div className="text-4xl font-bold text-green-400">
                  4 Seconds Per Return
                </div>
              </div>
              
              <div className="p-6">
                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </span>
                    <span className="text-foreground text-lg">
                      Scan the barcode of the returned package to instantly see all return information
                    </span>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </span>
                    <span className="text-foreground text-lg">
                      Add to queue for automatic restocking at 12:00 AM EST every night
                    </span>
                  </li>
                </ol>
                
                <div className="mt-8 p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                  <p className="text-lg font-semibold text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    It's as simple as that!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Manual Process */}
          <div className="group">
            <div className="gradient-card rounded-2xl shadow-card border-2 border-red-500/50 hover-lift transition-smooth overflow-hidden">
              <div className="bg-red-500/10 p-6 border-b border-red-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <Snail className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-red-400">
                    Manual Process
                  </h3>
                </div>
                <div className="text-4xl font-bold text-red-400">
                  45+ Seconds Per Return
                </div>
              </div>
              
              <div className="p-6">
                <ol className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </span>
                    <span className="text-foreground text-lg">
                      Manually look up order ID or buyer's name in "Manage Returns"
                    </span>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </span>
                    <span className="text-foreground text-lg">
                      Click to check if it was refunded
                    </span>
                  </li>
                  
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </span>
                    <span className="text-foreground text-lg">
                      Search SKU in "Manage Inventory" and manually enter new quantity
                    </span>
                  </li>
                </ol>
                
                <div className="mt-8 p-6 bg-red-500/10 rounded-xl border border-red-500/20">
                  <p className="text-lg font-semibold text-red-400 flex items-center gap-2">
                    <XCircle className="w-6 h-6" />
                    Time-consuming and error-prone
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

export default ComparisonSection;