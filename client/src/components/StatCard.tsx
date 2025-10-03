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

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  prefix = "",
  gradient = "from-blue-500 to-purple-500"
}: StatCardProps) {
  return (
    <Card className={cn(
      "relative overflow-hidden border-0 group transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl h-full",
      "bg-gradient-to-br animate-card-enter",
      gradient
    )}>
      {/* Shimmer animation on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out">
          <div className="h-full w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </div>
      </div>

      {/* Animated glowing border */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
        "before:bg-gradient-to-br before:from-white/50 before:to-transparent",
        "before:-z-10 before:animate-pulse-slow"
      )} />

      {/* Floating background orbs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white rounded-full blur-3xl animate-float-slow-delayed" />
      </div>

      <CardContent className="p-4 sm:p-5 md:p-6 relative z-10">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
            {/* Title - Responsive text */}
            <p className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-wider drop-shadow-lg line-clamp-2">
              {title}
            </p>

            {/* Value - Fluid responsive sizing */}
            <div className="flex items-baseline gap-1 flex-wrap">
              {prefix && (
                <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-black text-white drop-shadow-2xl">
                  {prefix}
                </span>
              )}
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white drop-shadow-2xl break-all">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </h3>
            </div>

            {/* Trend - Responsive badge */}
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-full text-[9px] xs:text-[10px] sm:text-xs font-bold backdrop-blur-md",
                "transition-all duration-300 group-hover:scale-105",
                trend.isPositive
                  ? "bg-white/20 text-white"
                  : "bg-white/20 text-white"
              )}>
                <span className={cn(
                  "text-xs sm:text-sm",
                  trend.isPositive ? "text-green-300" : "text-red-300"
                )}>
                  {trend.isPositive ? "↑" : "↓"}
                </span>
                <span className="drop-shadow whitespace-nowrap">{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>

          {/* Icon - Responsive sizing */}
          <div className="flex-shrink-0">
            <div className="p-1.5 xs:p-2 sm:p-2.5 md:p-3 bg-white/20 rounded-lg sm:rounded-xl backdrop-blur-md group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:rotate-12 group-hover:scale-110">
              <Icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white drop-shadow-lg" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
