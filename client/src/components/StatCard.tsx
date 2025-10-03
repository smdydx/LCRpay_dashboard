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
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

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
    const duration = 1000;
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

  const selectedGradient = gradient || "from-blue-500 to-cyan-500";

  return (
    <Card
      className={cn(
        "relative overflow-hidden transition-all duration-500 group cursor-pointer",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-5 hover:shadow-2xl hover:border-primary/30",
        "transform hover:-translate-y-2 hover:scale-[1.02]",
        selectedGradient && `before:${selectedGradient}`,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={cn(
          "absolute inset-0 rounded-xl blur-xl bg-gradient-to-br opacity-30",
          selectedGradient
        )} />
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out">
        <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
      </div>

      <CardContent className="p-6 relative z-10">
        <div className="flex items-start justify-between">
          <div className="space-y-3 flex-1">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {title}
            </p>
            <p className={cn(
              "text-4xl font-bold tracking-tight transition-all duration-500",
              isAnimating && "animate-pulse",
              isHovered && "text-primary scale-105"
            )}>
              {displayValue}
            </p>
            {trend && (
              <div className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-all duration-300",
                trend.isPositive ? "text-green-500" : "text-red-500",
                isHovered && "scale-110"
              )}>
                {trend.isPositive ? (
                  <TrendingUp className="h-4 w-4 animate-bounce" />
                ) : (
                  <TrendingDown className="h-4 w-4 animate-bounce" />
                )}
                <span>{Math.abs(trend.value)}%</span>
                <span className="text-xs text-muted-foreground ml-1">vs last month</span>
              </div>
            )}
          </div>

          {/* Icon with enhanced animations */}
          <div className="relative">
            {/* Glow effect */}
            <div className={cn(
              "absolute inset-0 rounded-2xl bg-gradient-to-br blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500",
              selectedGradient
            )} />

            <div className={cn(
              "relative h-20 w-20 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-2xl",
              "transform transition-all duration-500",
              "group-hover:scale-110 group-hover:rotate-12",
              selectedGradient
            )}>
              <Icon className={cn(
                "h-10 w-10 text-white drop-shadow-lg transition-transform duration-500",
                isHovered && "scale-110 rotate-12"
              )} />

              {/* Pulse ring effect */}
              <div className={cn(
                "absolute inset-0 rounded-2xl border-2 border-white/30",
                "animate-ping opacity-0 group-hover:opacity-100"
              )} />
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        {isHovered && (
          <>
            <div className="absolute top-4 right-4 w-2 h-2 bg-primary/40 rounded-full animate-ping" />
            <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping animation-delay-200" />
            <div className="absolute top-1/2 left-4 w-1 h-1 bg-primary/20 rounded-full animate-ping animation-delay-400" />
          </>
        )}
      </CardContent>
    </Card>
  );
}