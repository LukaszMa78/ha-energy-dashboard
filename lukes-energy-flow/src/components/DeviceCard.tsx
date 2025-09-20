import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface DeviceCardProps {
  name: string;
  icon: LucideIcon;
  isActive: boolean;
  status?: string;
  onToggle?: () => void;
  className?: string;
  showToggle?: boolean;
}

const DeviceCard = ({ 
  name, 
  icon: Icon, 
  isActive, 
  status,
  onToggle, 
  className,
  showToggle = true 
}: DeviceCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-gradient-card border border-border",
        "p-6 shadow-card transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        isActive && "shadow-active border-device-active/30",
        className
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn(
          "rounded-lg p-3 transition-all duration-300",
          isActive ? "bg-device-active/20 text-device-active" : "bg-device-inactive text-muted-foreground"
        )}>
          <Icon size={24} />
        </div>
        {showToggle && (
          <button
            onClick={onToggle}
            className={cn(
              "h-6 w-11 rounded-full transition-all duration-300 relative",
              "focus:outline-none focus:ring-2 focus:ring-primary/50",
              isActive ? "bg-device-active" : "bg-device-inactive"
            )}
          >
            <div
              className={cn(
                "absolute top-0.5 h-5 w-5 rounded-full bg-background transition-transform duration-300",
                isActive ? "translate-x-5" : "translate-x-0.5"
              )}
            />
          </button>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-foreground">{name}</h3>
        {status && (
          <p className={cn(
            "text-sm",
            isActive ? "text-device-active" : "text-muted-foreground"
          )}>
            {status}
          </p>
        )}
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 h-1 w-full transition-all duration-300",
          isActive ? "bg-gradient-primary" : "bg-transparent"
        )}
      />
    </div>
  );
};

export default DeviceCard;