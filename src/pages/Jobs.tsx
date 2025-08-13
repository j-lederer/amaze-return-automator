import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  PlayCircle, 
  Bookmark, 
  Trash2, 
  Info, 
  ArrowLeft, 
  List, 
  Rocket,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react";

// Mock data - replace with actual data fetching
const mockJobs = [
  {
    id: "1",
    name: "Return Processing Batch #001",
    status: "pending",
    complete: false,
    time_added_to_jobs: "2024-01-15 10:30:00",
    time_task_associated_launched: null,
    time_completed: null
  },
  {
    id: "2", 
    name: "Return Processing Batch #002",
    status: "completed",
    complete: true,
    time_added_to_jobs: "2024-01-14 09:15:00",
    time_task_associated_launched: "2024-01-15 00:00:00",
    time_completed: "2024-01-15 00:02:30"
  }
];

const mockSavedJobs = [];

const mockHistory = [
  {
    my_task_tracker: "3",
    name: "Return Processing Batch #003",
    status: "completed",
    complete: true,
    time_added_to_jobs: "2024-01-13 14:20:00",
    time_celery_launch: "2024-01-14 00:00:00", 
    time_completed: "2024-01-14 00:01:45"
  }
];

const Jobs = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/50">completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">pending</Badge>;
      default:
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">{status}</Badge>;
    }
  };

  const getCompleteIcon = (complete: boolean) => {
    return complete ? (
      <CheckCircle className="w-5 h-5 text-green-400" />
    ) : (
      <Clock className="w-5 h-5 text-yellow-400" />
    );
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="gradient-card p-8 rounded-2xl shadow-card mb-8">
          <h1 className="text-4xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
            Jobs Management
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            The Jobs Table will execute at 12:00 AM EST every night.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" asChild>
              <a href="/tasks">
                <List className="w-4 h-4 mr-2" />
                Tasks
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Button>
          </div>
        </div>

        {/* Active Jobs Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <PlayCircle className="w-8 h-8 text-accent" />
              Active Jobs
            </h2>
            <Button 
              variant="hero" 
              onClick={() => confirm('Execute All Jobs in Jobs Table') && console.log('Execute all')}
            >
              <Rocket className="w-4 h-4 mr-2" />
              Execute All Jobs
            </Button>
          </div>
          
          {mockJobs.length < 1 ? (
            <div className="gradient-card p-8 rounded-2xl shadow-card text-center">
              <h4 className="text-xl font-semibold mb-2">No Active Jobs</h4>
              <p className="text-muted-foreground">There are no upcoming jobs in the queue.</p>
            </div>
          ) : (
            <div className="gradient-card rounded-2xl shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/20 border-b border-border">
                    <tr>
                      <th className="text-left p-4 font-semibold">Job ID</th>
                      <th className="text-left p-4 font-semibold">Name</th>
                      <th className="text-left p-4 font-semibold">Status</th>
                      <th className="text-left p-4 font-semibold">Complete</th>
                      <th className="text-left p-4 font-semibold">Added</th>
                      <th className="text-left p-4 font-semibold">Launched</th>
                      <th className="text-left p-4 font-semibold">Completed</th>
                      <th className="text-left p-4 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockJobs.map((job) => (
                      <tr key={job.id} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                        <td className="p-4 font-mono text-accent">{job.id}</td>
                        <td className="p-4 font-semibold">{job.name}</td>
                        <td className="p-4">{getStatusBadge(job.status)}</td>
                        <td className="p-4">{getCompleteIcon(job.complete)}</td>
                        <td className="p-4 text-sm text-muted-foreground">{job.time_added_to_jobs}</td>
                        <td className="p-4 text-sm text-muted-foreground">{job.time_task_associated_launched || '-'}</td>
                        <td className="p-4 text-sm text-muted-foreground">{job.time_completed || '-'}</td>
                        <td className="p-4">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Info className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <PlayCircle className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Saved for Later Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
            <Bookmark className="w-8 h-8 text-accent" />
            Saved for Later
          </h2>
          
          <div className="gradient-card p-8 rounded-2xl shadow-card text-center">
            <h4 className="text-xl font-semibold mb-2">No Saved Jobs</h4>
            <p className="text-muted-foreground">You haven't saved any jobs for later.</p>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Clock className="w-8 h-8 text-accent" />
              History
            </h2>
            <Button 
              variant="outline" 
              onClick={() => confirm('Are you sure you want to delete all history?') && console.log('Delete history')}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete All History
            </Button>
          </div>
          
          {mockHistory.length > 0 && (
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 text-blue-400">
                <Info className="w-5 h-5" />
                <span>This shows the last 30 jobs in History</span>
              </div>
            </div>
          )}
          
          <div className="gradient-card rounded-2xl shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/20 border-b border-border">
                  <tr>
                    <th className="text-left p-4 font-semibold">Job ID</th>
                    <th className="text-left p-4 font-semibold">Name</th>
                    <th className="text-left p-4 font-semibold">Status</th>
                    <th className="text-left p-4 font-semibold">Complete</th>
                    <th className="text-left p-4 font-semibold">Added</th>
                    <th className="text-left p-4 font-semibold">Launched</th>
                    <th className="text-left p-4 font-semibold">Completed</th>
                    <th className="text-left p-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockHistory.map((job) => (
                    <tr key={job.my_task_tracker} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                      <td className="p-4 font-mono text-accent">{job.my_task_tracker}</td>
                      <td className="p-4 font-semibold">{job.name}</td>
                      <td className="p-4">{getStatusBadge(job.status)}</td>
                      <td className="p-4">{getCompleteIcon(job.complete)}</td>
                      <td className="p-4 text-sm text-muted-foreground">{job.time_added_to_jobs}</td>
                      <td className="p-4 text-sm text-muted-foreground">{job.time_celery_launch || '-'}</td>
                      <td className="p-4 text-sm text-muted-foreground">{job.time_completed || '-'}</td>
                      <td className="p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Info className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <PlayCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;