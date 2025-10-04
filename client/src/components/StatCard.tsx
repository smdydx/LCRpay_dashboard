
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
      
      {/* Indian Leaf & Vine Decorative Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        {/* Top Left Leaf Pattern */}
        <svg className="absolute -top-2 -left-2 w-20 h-20" viewBox="0 0 100 100">
          <path d="M10,50 Q30,10 50,30 Q70,50 50,70 Q30,90 10,50 Z" fill="white" opacity="0.3"/>
          <path d="M10,50 Q20,30 30,40 Q40,50 30,60 Q20,70 10,50 Z" fill="white" opacity="0.5"/>
        </svg>
        
        {/* Bottom Right Vine Pattern */}
        <svg className="absolute -bottom-3 -right-3 w-24 h-24" viewBox="0 0 100 100">
          <path d="M90,10 Q70,30 60,50 Q50,70 70,90" stroke="white" strokeWidth="2" fill="none" opacity="0.4"/>
          <circle cx="70" cy="30" r="4" fill="white" opacity="0.5"/>
          <circle cx="60" cy="50" r="3" fill="white" opacity="0.5"/>
          <circle cx="70" cy="70" r="4" fill="white" opacity="0.5"/>
          {/* Leaf shapes */}
          <path d="M75,25 Q80,30 75,35 Q70,30 75,25 Z" fill="white" opacity="0.4"/>
          <path d="M65,45 Q70,50 65,55 Q60,50 65,45 Z" fill="white" opacity="0.4"/>
        </svg>
        
        {/* Top Right Corner Patta Pattern */}
        <svg className="absolute top-0 right-0 w-16 h-16" viewBox="0 0 80 80">
          <path d="M80,0 L80,20 Q70,15 60,20 L80,0 Z" fill="white" opacity="0.3"/>
          <path d="M70,10 Q65,15 60,20" stroke="white" strokeWidth="1" fill="none" opacity="0.4"/>
        </svg>
        
        {/* Bottom Left Corner Design */}
        <svg className="absolute bottom-0 left-0 w-16 h-16" viewBox="0 0 80 80">
          <path d="M0,80 L20,80 Q15,70 20,60 L0,80 Z" fill="white" opacity="0.3"/>
          <circle cx="15" cy="70" r="2" fill="white" opacity="0.5"/>
        </svg>
      </div>

      {/* Subtle Gradient Overlay with Indian Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50/5 to-orange-50/10 opacity-50" />

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
