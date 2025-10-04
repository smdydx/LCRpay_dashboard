
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  prefix?: string;
  gradient?: string;
}

export function StatCard({ title, value, icon: Icon, trend, prefix = "", gradient = "from-blue-500 to-purple-600" }: StatCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-0 shadow-xl transition-all duration-300",
      "bg-gradient-to-br", gradient,
      "hover:shadow-2xl cursor-pointer",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
    )}>
      {/* Premium Glass Morphism Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl opacity-70" />
      
      {/* Subtle Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" opacity="0.3"/>
              <circle cx="0" cy="0" r="1" fill="white" opacity="0.3"/>
              <circle cx="40" cy="0" r="1" fill="white" opacity="0.3"/>
              <circle cx="0" cy="40" r="1" fill="white" opacity="0.3"/>
              <circle cx="40" cy="40" r="1" fill="white" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-50" />

      <CardContent className="relative p-6 z-10">
        <div className="flex items-start justify-between gap-4">
          {/* Left section - Title and Value */}
          <div className="flex-1 min-w-0 space-y-3">
            {/* Premium Title */}
            <p className="text-white/90 text-sm font-semibold tracking-wide uppercase truncate group-hover:text-white transition-colors duration-300">
              {title}
            </p>

            {/* Premium Value */}
            <div className="flex items-baseline gap-2">
              {prefix && (
                <span className="text-white font-bold text-2xl drop-shadow-lg">
                  {prefix}
                </span>
              )}
              <h3 className="text-white font-bold text-3xl tracking-tight truncate drop-shadow-lg">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </h3>
            </div>

            {/* Premium Trend Badge */}
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md",
                "transition-all duration-300",
                "bg-white/15 border border-white/20 text-white shadow-lg"
              )}>
                <span className={cn(
                  "text-sm",
                  trend.isPositive 
                    ? "text-emerald-300" 
                    : "text-rose-300"
                )}>
                  {trend.isPositive ? "↑" : "↓"}
                </span>
                <span>{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>

          {/* Premium Icon */}
          <div className="flex-shrink-0 relative">
            <div className="relative p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg transition-all duration-300 group-hover:bg-white/25">
              <Icon className="h-7 w-7 text-white drop-shadow-md" />
            </div>
          </div>
        </div>
      </CardContent>

      {/* Subtle Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-60" />
    </Card>
  );
}
