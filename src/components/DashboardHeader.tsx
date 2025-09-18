import { Home, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

const DashboardHeader = () => {
  const currentTime = new Date().toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  const currentDate = new Date().toLocaleDateString([], { 
    weekday: 'long',
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="bg-gradient-card border-b border-border p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-lg bg-gradient-primary p-3">
            <Home className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Smart Home</h1>
            <p className="text-muted-foreground">{currentDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-2xl font-mono font-bold text-foreground">
              {currentTime}
            </div>
            <div className="text-sm text-muted-foreground">
              Local time
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className={cn(
              "rounded-lg p-2 transition-all duration-300",
              "hover:bg-secondary text-muted-foreground hover:text-foreground"
            )}>
              <Settings size={20} />
            </button>
            <button className={cn(
              "rounded-lg p-2 transition-all duration-300",
              "hover:bg-secondary text-muted-foreground hover:text-foreground"
            )}>
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;