
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
      "group relative overflow-hidden border border-white/10 shadow-2xl transition-all duration-700",
      "bg-gradient-to-br", gradient,
      "hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
      "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)] after:opacity-0 after:transition-opacity after:duration-700 hover:after:opacity-100"
    )}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl animate-float-slow-delayed" />
      </div>

      <CardContent className="relative p-6 z-10">
        <div className="flex items-start justify-between gap-4">
          {/* Left section - Title and Value */}
          <div className="flex-1 min-w-0 space-y-3">
            {/* Title with shimmer effect */}
            <p className="text-white/90 text-sm font-semibold tracking-wide truncate group-hover:text-white transition-colors duration-300 relative">
              {title}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
            </p>

            {/* Value with scale animation */}
            <div className="flex items-baseline gap-1.5 transform transition-transform duration-500 group-hover:scale-110 origin-left">
              {prefix && (
                <span className="text-white/95 font-bold text-xl drop-shadow-lg">
                  {prefix}
                </span>
              )}
              <h3 className="text-white font-bold text-3xl tracking-tight truncate drop-shadow-2xl">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </h3>
            </div>

            {/* Trend with glow effect */}
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-xl",
                "transition-all duration-500 transform group-hover:scale-110",
                "bg-white/15 border border-white/20 text-white shadow-lg",
                "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              )}>
                <span className={cn(
                  "text-sm transition-transform duration-300 group-hover:scale-125",
                  trend.isPositive ? "text-green-300 drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]" : "text-red-300 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]"
                )}>
                  {trend.isPositive ? "↑" : "↓"}
                </span>
                <span className="drop-shadow-lg">{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>

          {/* Right section - Icon with 3D effect */}
          <div className="flex-shrink-0 relative">
            {/* Icon glow background */}
            <div className="absolute inset-0 bg-white/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
            
            <div className="relative p-4 bg-white/15 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl transition-all duration-500 group-hover:bg-white/25 group-hover:rotate-[360deg] group-hover:scale-125">
              <Icon className="h-7 w-7 text-white drop-shadow-2xl transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </div>
          </div>
        </div>
      </CardContent>

      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </Card>
  );
}
