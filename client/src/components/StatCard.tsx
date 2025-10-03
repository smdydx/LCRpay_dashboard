import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
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
    <Card className={cn(
      "hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 overflow-hidden backdrop-blur-sm bg-card/50 animate-scale-in group",
      className
    )}>
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-500", selectedGradient)} />
      <CardContent className="p-6 relative">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">{title}</p>
            <p className={cn(
              "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300",
              selectedGradient.replace("from-", "from-").replace("to-", "to-")
            )} style={{
              backgroundImage: `linear-gradient(to right, ${selectedGradient.includes("blue") ? "#3b82f6, #06b6d4" : selectedGradient.includes("purple") ? "#a855f7, #ec4899" : selectedGradient.includes("orange") ? "#f97316, #ef4444" : "#10b981, #059669"})`
            }}>
              {displayValue || value}
            </p>
            {trend && (
              <div className={cn(
                "flex items-center gap-1 mt-3 text-sm font-semibold transition-all duration-300",
                trend.isPositive ? "text-emerald-500" : "text-rose-500"
              )}>
                <span className="text-lg">{trend.isPositive ? "↑" : "↓"}</span>
                <span>{Math.abs(trend.value)}%</span>
                <span className="text-xs text-muted-foreground ml-1">vs last month</span>
              </div>
            )}
          </div>
          <div className={cn(
            "h-20 w-20 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
            selectedGradient
          )}>
            <Icon className="h-10 w-10 text-white drop-shadow-lg" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}