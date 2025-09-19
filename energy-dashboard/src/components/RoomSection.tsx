import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RoomSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const RoomSection = ({ title, children, className }: RoomSectionProps) => {
  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
        {title}
        <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {children}
      </div>
    </section>
  );
};

export default RoomSection;