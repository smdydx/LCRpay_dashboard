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
      "group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500",
      "bg-gradient-to-br", gradient,
      "hover:scale-[1.02] cursor-pointer"
    )}>
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          {/* Left section - Title and Value */}
          <div className="flex-1 min-w-0">
            {/* Title - Compact */}
            <p className="text-white/80 text-xs font-medium mb-2 truncate">
              {title}
            </p>

            {/* Value - Prominent */}
            <div className="flex items-baseline gap-1 mb-2">
              {prefix && (
                <span className="text-white font-bold text-lg">
                  {prefix}
                </span>
              )}
              <h3 className="text-white font-bold text-2xl tracking-tight truncate">
                {typeof value === 'number' ? value.toLocaleString() : value}
              </h3>
            </div>

            {/* Trend - Compact badge */}
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-md",
                "transition-all duration-300",
                "bg-white/20 text-white"
              )}>
                <span className={cn(
                  "text-xs",
                  trend.isPositive ? "text-green-300" : "text-red-300"
                )}>
                  {trend.isPositive ? "↑" : "↓"}
                </span>
                <span className="drop-shadow">{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>

          {/* Right section - Icon */}
          <div className="flex-shrink-0">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:rotate-12 group-hover:scale-110">
              <Icon className="h-6 w-6 text-white drop-shadow-lg" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}