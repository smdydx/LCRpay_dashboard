
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  gradient?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className, gradient }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const valueStr = String(value);
    const numericValue = parseFloat(valueStr.replace(/[^0-9.]/g, ""));
    const prefix = valueStr.match(/[^0-9.,]+/)?.[0] || "";
    const suffix = valueStr.match(/[^0-9.,]+$/)?.[0] || "";

    if (isNaN(numericValue)) {
      setDisplayValue(valueStr);
      setIsAnimating(false);
      return;
    }

    let currentValue = 0;
    const duration = 1500;
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        currentValue = numericValue;
        clearInterval(timer);
        setIsAnimating(false);
      }
      const formattedValue = currentValue.toLocaleString("en-IN", {
        maximumFractionDigits: 1,
      });
      setDisplayValue(`${prefix}${formattedValue}${suffix}`);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  const selectedGradient = gradient || "from-violet-600 via-purple-600 to-fuchsia-600";

  return (
    <Card
      className={cn(
        "relative overflow-hidden group cursor-pointer border-0 h-full",
        "transition-all duration-500 ease-out",
        "hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]",
        "transform hover:-translate-y-2 hover:scale-105",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main gradient background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-90 transition-opacity duration-700",
        selectedGradient,
        "group-hover:opacity-100"
      )} />

      {/* Animated mesh gradient overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-tr opacity-0 transition-all duration-700",
        "group-hover:opacity-30",
        gradient === "from-blue-500 to-cyan-500" ? "from-cyan-400 to-blue-600" :
        gradient === "from-green-500 to-emerald-500" ? "from-emerald-400 to-green-600" :
        gradient === "from-orange-500 to-red-500" ? "from-red-400 to-orange-600" :
        "from-fuchsia-400 to-violet-600"
      )} />

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
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl" />
      </div>

      <CardContent className="p-4 sm:p-5 relative z-10">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-2 flex-1 min-w-0">
            {/* Title */}
            <p className="text-xs font-bold text-white/90 uppercase tracking-wider drop-shadow-lg truncate">
              {title}
            </p>

            {/* Value with enhanced styling */}
            <div className={cn(
              "text-2xl sm:text-3xl font-black tracking-tight transition-all duration-500",
              "text-white drop-shadow-2xl truncate",
              isAnimating && "animate-pulse"
            )}>
              {displayValue}
            </div>

            {/* Trend indicator */}
            {trend && (
              <div className={cn(
                "inline-flex items-center gap-1.5 px-2 py-1 rounded-full",
                "backdrop-blur-sm transition-all duration-300",
                trend.isPositive 
                  ? "bg-green-500/30 text-green-100" 
                  : "bg-red-500/30 text-red-100"
              )}>
                {trend.isPositive ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                <span className="font-bold text-xs">{Math.abs(trend.value)}%</span>
              </div>
            )}
          </div>

          {/* Icon container with advanced effects */}
          <div className="relative flex-shrink-0">
            {/* Outer glow ring */}
            <div className={cn(
              "absolute -inset-2 rounded-2xl blur-xl opacity-0 transition-all duration-500",
              "group-hover:opacity-60 bg-white/30"
            )} />

            {/* Icon background */}
            <div className={cn(
              "relative h-12 w-12 sm:h-14 sm:w-14 rounded-xl flex items-center justify-center",
              "bg-white/20 backdrop-blur-xl shadow-2xl",
              "border border-white/30",
              "transform transition-all duration-500",
              "group-hover:scale-110 group-hover:rotate-6",
              "group-hover:bg-white/30"
            )}>
              <Icon className={cn(
                "h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow-2xl",
                "transition-all duration-500"
              )} />
            </div>
          </div>
        </div>

        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 right-12 w-3 h-3 bg-white/60 rounded-full animate-ping" />
            <div className="absolute bottom-12 left-10 w-2 h-2 bg-white/40 rounded-full animate-ping animation-delay-200" />
            <div className="absolute top-20 left-6 w-2 h-2 bg-white/50 rounded-full animate-ping animation-delay-400" />
            <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping animation-delay-600" />
          </div>
        )}

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </CardContent>
    </Card>
  );
}
