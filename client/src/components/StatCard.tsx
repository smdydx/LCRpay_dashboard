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
      "relative overflow-hidden border-0 group transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full",
      "bg-gradient-to-br",
      gradient
    )}>
      {/* Shimmer animation */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out">
          <div className="h-full w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
        </div>
      </div>

      {/* Glowing border effect */}
      <div className={cn(
        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
        "before:bg-gradient-to-br before:from-white/50 before:to-transparent",
        "before:-z-10"
      )} />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full blur-3xl" />
      </div>

      <CardContent className="p-3 sm:p-4 md:p-5 lg:p-6 relative z-10">
        <div className="flex items-start justify-between gap-2 md:gap-3">
          <div className="space-y-1 sm:space-y-2 flex-1 min-w-0">
            {/* Title */}
            <p className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-wider drop-shadow-lg truncate">
              {title}
            </p>

            {/* Value */}
            <div className="flex items-baseline gap-1">
              {prefix && (
                <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white drop-shadow-2xl">
                  {prefix}
                </span>
              )}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white drop-shadow-2xl truncate">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </h3>
            </div>

            {/* Trend */}
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold backdrop-blur-md",
                trend.isPositive
                  ? "bg-white/20 text-white"
                  : "bg-white/20 text-white"
              )}>
                <span className={trend.isPositive ? "text-green-300" : "text-red-300"}>
                  {trend.isPositive ? "↑" : "↓"}
                </span>
                <span className="drop-shadow">{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>

          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="p-2 sm:p-2.5 md:p-3 bg-white/20 rounded-lg sm:rounded-xl backdrop-blur-md group-hover:bg-white/30 transition-colors duration-300 shadow-lg">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white drop-shadow-lg" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}