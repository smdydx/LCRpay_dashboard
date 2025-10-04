
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
      "group relative overflow-hidden border-0 shadow-2xl transition-all duration-700",
      "bg-gradient-to-br", gradient,
      "hover:scale-[1.05] hover:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.6)] cursor-pointer",
      "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/30 before:via-white/10 before:to-transparent before:opacity-0 before:transition-all before:duration-700 hover:before:opacity-100",
      "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.15),transparent)] after:opacity-0 after:transition-all after:duration-700 hover:after:opacity-100",
      "animate-card-float"
    )}>
      {/* Premium Glass Morphism Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-3xl opacity-60" />
      
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl animate-mesh-1" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-white/10 rounded-full blur-3xl animate-mesh-2" />
        <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 bg-white/5 rounded-full blur-2xl animate-mesh-3" />
      </div>

      {/* Premium Border Shine Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/40 to-transparent animate-border-shine" />
      </div>

      <CardContent className="relative p-6 z-10">
        <div className="flex items-start justify-between gap-4">
          {/* Left section - Title and Value */}
          <div className="flex-1 min-w-0 space-y-3">
            {/* Premium Title with Shimmer */}
            <p className="text-white/95 text-sm font-bold tracking-wider uppercase truncate group-hover:text-white transition-all duration-500 relative">
              <span className="relative z-10">{title}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer-slow" style={{ backgroundSize: '200% 100%' }} />
            </p>

            {/* Premium Value with 3D Effect */}
            <div className="flex items-baseline gap-2 transform transition-all duration-700 group-hover:scale-110 origin-left">
              {prefix && (
                <span className="text-white/95 font-black text-2xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_6px_20px_rgba(255,255,255,0.4)] transition-all duration-500">
                  {prefix}
                </span>
              )}
              <h3 className="text-white font-black text-4xl tracking-tight truncate drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_8px_30px_rgba(255,255,255,0.5)] transition-all duration-700">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </h3>
            </div>

            {/* Premium Trend Badge with Neon Glow */}
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black backdrop-blur-2xl",
                "transition-all duration-700 transform group-hover:scale-110",
                "bg-white/20 border-2 border-white/30 text-white shadow-2xl",
                "group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]",
                "animate-trend-pulse"
              )}>
                <span className={cn(
                  "text-base transition-all duration-500 group-hover:scale-150",
                  trend.isPositive 
                    ? "text-emerald-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.9)]" 
                    : "text-rose-300 drop-shadow-[0_0_10px_rgba(251,113,133,0.9)]"
                )}>
                  {trend.isPositive ? "↑" : "↓"}
                </span>
                <span className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>

          {/* Premium Icon with 3D Rotation & Glow */}
          <div className="flex-shrink-0 relative perspective-1000">
            {/* Multi-layer Icon Glow */}
            <div className="absolute inset-0 bg-white/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 animate-glow-pulse scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700 scale-125" />
            
            <div className="relative p-5 bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-2xl rounded-3xl border-2 border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-700 group-hover:bg-white/35 group-hover:rotate-y-180 group-hover:scale-125 group-hover:shadow-[0_12px_48px_rgba(255,255,255,0.3)]">
              <Icon className="h-8 w-8 text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]" />
            </div>
          </div>
        </div>
      </CardContent>

      {/* Premium Bottom Shine Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-shine-slide" />
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-white/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </Card>
  );
}
