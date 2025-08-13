import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  RefreshCw, 
  Trash2, 
  Download, 
  Plus,
  QrCode,
  MapPin,
  Package,
  Hash,
  AlertCircle,
  DollarSign,
  CheckCircle,
  Clock
} from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  
  // Mock data - replace with actual data
  const [returnData, setReturnData] = useState(null);
  const [queueData, setQueueData] = useState([
    {
      tracking: "TRK123456789",
      SKU: "ABC-123",
      return_quantity: 2
    },
    {
      tracking: "TRK987654321", 
      SKU: "DEF-456",
      return_quantity: 1
    }
  ]);
  
  const [refreshStatus, setRefreshStatus] = useState({
    status: "idle",
    complete: true,
    time_clicked: "2024-01-15 14:30:00",
    time_completed: "2024-01-15 14:32:15"
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Mock return data
      setReturnData({
        address: "123 Main St, City, State 12345",
        item_name: "Sample Product Name",
        sku: searchValue,
        reason_returned: "Defective item",
        order_quantity: 3,
        return_quantity: 2,
        Inventory: 45,
        order_id: "ORDER123456",
        refund_amount: "$29.99"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="gradient-card border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Logo size="lg" className="mb-4" />
            <p className="text-muted-foreground">Warehouse Return Processing System</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section */}
        <div className="gradient-card p-8 rounded-2xl shadow-card mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Search Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <QrCode className="w-8 h-8 text-accent" />
                Scan For Info
              </h2>
              
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    type="text"
                    placeholder="Barcode"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="flex-1 text-lg"
                    autoFocus
                  />
                  <Button type="submit" variant="hero" size="lg">
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Return Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Return Information</h3>
              
              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address:
                  </span>
                  <span className="text-right">{returnData?.address || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Item Name:
                  </span>
                  <span className="text-right">{returnData?.item_name || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Hash className="w-4 h-4" />
                    SKU:
                  </span>
                  <span className="text-right font-mono">{returnData?.sku || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    Reason:
                  </span>
                  <span className="text-right">{returnData?.reason_returned || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items Bought:</span>
                  <span className="text-right">{returnData?.order_quantity || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Items Returned:</span>
                  <span className="text-right">{returnData?.return_quantity || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Est. Inventory:</span>
                  <span className="text-right">{returnData?.Inventory || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span className="text-right font-mono">{returnData?.order_id || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Refund Amount:
                  </span>
                  <span className="text-right font-semibold text-green-400">{returnData?.refund_amount || "-"}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">In Queue:</span>
                  <span className="text-right">
                    {queueData.some(item => item.tracking === searchValue) ? (
                      <Badge className="bg-green-500/20 text-green-400">Yes</Badge>
                    ) : (
                      <Badge className="bg-gray-500/20 text-gray-400">No</Badge>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Add to Queue Button */}
          {returnData && (
            <div className="mt-8 text-center">
              <Button variant="hero" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Add to Queue
              </Button>
            </div>
          )}
        </div>

        {/* Controls Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Button variant="outline" className="h-auto py-4">
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh Data
          </Button>
          
          <Button variant="outline" className="h-auto py-4">
            <Trash2 className="w-5 h-5 mr-2" />
            Clear Search
          </Button>
          
          <Button variant="outline" className="h-auto py-4">
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </Button>
          
          <Button variant="outline" className="h-auto py-4">
            <Download className="w-5 h-5 mr-2" />
            Download Slim
          </Button>
        </div>

        {/* Refresh Status */}
        <div className="gradient-card p-6 rounded-2xl shadow-card mb-8">
          <h3 className="text-xl font-semibold mb-4">Refresh Status</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Complete</th>
                  <th className="text-left p-2">Last Attempt</th>
                  <th className="text-left p-2">Last Successful</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">
                    <Badge className="bg-green-500/20 text-green-400">{refreshStatus.status}</Badge>
                  </td>
                  <td className="p-2">
                    {refreshStatus.complete ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-yellow-400" />
                    )}
                  </td>
                  <td className="p-2 text-sm text-muted-foreground">{refreshStatus.time_clicked}</td>
                  <td className="p-2 text-sm text-muted-foreground">{refreshStatus.time_completed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Queue Section */}
        <div className="gradient-card p-8 rounded-2xl shadow-card">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Queue</h2>
            <div className="flex gap-4">
              <Button variant="outline">
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Queue
              </Button>
              <Button variant="hero">
                <Plus className="w-4 h-4 mr-2" />
                Add Queue to Jobs
              </Button>
            </div>
          </div>
          
          {queueData.length < 1 ? (
            <div className="text-center py-12">
              <h4 className="text-xl font-semibold mb-2">No items in queue</h4>
              <p className="text-muted-foreground">Add tracking IDs to get started!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Tracking IDs</th>
                    <th className="text-left p-4 font-semibold">SKU</th>
                    <th className="text-left p-4 font-semibold">Quantity Returned</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {queueData.map((item, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                      <td className="p-4 font-mono text-accent">{item.tracking}</td>
                      <td className="p-4">{item.SKU}</td>
                      <td className="p-4">{item.return_quantity}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;