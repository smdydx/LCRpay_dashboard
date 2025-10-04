
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
      
      {/* Indian Leaf & Vine Decorative Elements - Enhanced */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Top Left - Elaborate Peepal Leaf Pattern */}
        <svg className="absolute -top-3 -left-3 w-28 h-28" viewBox="0 0 120 120">
          {/* Main large leaf */}
          <path d="M15,60 Q20,20 40,25 Q60,30 50,50 Q40,70 30,75 Q20,80 15,60 Z" fill="white" opacity="0.4" className="drop-shadow-lg"/>
          {/* Smaller decorative leaf */}
          <path d="M25,50 Q30,35 40,38 Q48,42 43,52 Q38,62 33,64 Q28,65 25,50 Z" fill="white" opacity="0.6"/>
          {/* Leaf veins */}
          <path d="M20,60 Q30,50 40,45" stroke="white" strokeWidth="0.8" fill="none" opacity="0.3"/>
          <path d="M25,65 Q32,58 38,53" stroke="white" strokeWidth="0.6" fill="none" opacity="0.3"/>
          {/* Small dots */}
          <circle cx="35" cy="42" r="1.5" fill="white" opacity="0.5"/>
          <circle cx="30" cy="55" r="1" fill="white" opacity="0.5"/>
        </svg>
        
        {/* Bottom Right - Elegant Vine with Multiple Leaves */}
        <svg className="absolute -bottom-4 -right-4 w-32 h-32" viewBox="0 0 130 130">
          {/* Main curving vine */}
          <path d="M120,15 Q100,35 90,50 Q80,65 75,80 Q70,95 85,115" stroke="white" strokeWidth="2.5" fill="none" opacity="0.5" className="drop-shadow-md"/>
          {/* Secondary vine branch */}
          <path d="M90,50 Q100,55 105,65" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4"/>
          
          {/* Decorative leaves along vine */}
          <path d="M105,30 Q112,35 105,42 Q98,35 105,30 Z" fill="white" opacity="0.5"/>
          <path d="M92,48 Q98,53 92,60 Q86,53 92,48 Z" fill="white" opacity="0.6"/>
          <path d="M78,68 Q84,73 78,80 Q72,73 78,68 Z" fill="white" opacity="0.5"/>
          <path d="M82,90 Q88,95 82,102 Q76,95 82,90 Z" fill="white" opacity="0.6"/>
          
          {/* Small berries/dots */}
          <circle cx="100" cy="36" r="3" fill="white" opacity="0.6"/>
          <circle cx="88" cy="54" r="2.5" fill="white" opacity="0.5"/>
          <circle cx="76" cy="74" r="3" fill="white" opacity="0.6"/>
          <circle cx="80" cy="96" r="2" fill="white" opacity="0.5"/>
          
          {/* Flower detail */}
          <circle cx="107" cy="67" r="4" fill="white" opacity="0.4"/>
          <circle cx="103" cy="67" r="2" fill="white" opacity="0.6"/>
          <circle cx="111" cy="67" r="2" fill="white" opacity="0.6"/>
        </svg>
        
        {/* Top Right - Lotus Patta Corner Pattern */}
        <svg className="absolute -top-2 -right-2 w-24 h-24" viewBox="0 0 100 100">
          {/* Lotus petal shapes */}
          <path d="M100,0 L95,25 Q85,20 80,25 Q90,15 100,0 Z" fill="white" opacity="0.4"/>
          <path d="M100,0 L85,15 Q80,10 75,15 Q85,5 100,0 Z" fill="white" opacity="0.5"/>
          {/* Decorative curves */}
          <path d="M95,20 Q88,18 82,22" stroke="white" strokeWidth="1.2" fill="none" opacity="0.4"/>
          <path d="M85,12 Q80,11 76,14" stroke="white" strokeWidth="1" fill="none" opacity="0.3"/>
          {/* Small accent dots */}
          <circle cx="88" cy="16" r="1.5" fill="white" opacity="0.6"/>
          <circle cx="80" cy="19" r="1" fill="white" opacity="0.5"/>
        </svg>
        
        {/* Bottom Left - Traditional Mandala Corner */}
        <svg className="absolute -bottom-2 -left-2 w-24 h-24" viewBox="0 0 100 100">
          {/* Mandala petal base */}
          <path d="M0,100 L25,95 Q20,85 25,80 Q15,90 0,100 Z" fill="white" opacity="0.4"/>
          <path d="M0,100 L15,85 Q10,80 15,75 Q5,85 0,100 Z" fill="white" opacity="0.5"/>
          {/* Inner details */}
          <circle cx="18" cy="88" r="2.5" fill="white" opacity="0.6"/>
          <circle cx="12" cy="82" r="1.5" fill="white" opacity="0.5"/>
          {/* Decorative curves */}
          <path d="M20,88 Q16,85 13,82" stroke="white" strokeWidth="1" fill="none" opacity="0.4"/>
          {/* Small leaf accent */}
          <path d="M22,92 Q25,90 22,87 Q19,90 22,92 Z" fill="white" opacity="0.5"/>
        </svg>
        
        {/* Center Top - Small Paisley Accent */}
        <svg className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-12" viewBox="0 0 80 60">
          <path d="M40,10 Q50,15 52,25 Q50,35 45,40 Q35,42 32,35 Q30,25 35,18 Q38,12 40,10 Z" fill="white" opacity="0.15"/>
          <circle cx="42" cy="25" r="2" fill="white" opacity="0.2"/>
        </svg>
        
        {/* Center Bottom - Decorative Border Element */}
        <svg className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-10" viewBox="0 0 100 50">
          <path d="M30,40 Q40,35 50,40 Q60,35 70,40" stroke="white" strokeWidth="1.5" fill="none" opacity="0.15"/>
          <circle cx="40" cy="37" r="1" fill="white" opacity="0.2"/>
          <circle cx="50" cy="38" r="1.5" fill="white" opacity="0.2"/>
          <circle cx="60" cy="37" r="1" fill="white" opacity="0.2"/>
        </svg>
      </div>

      {/* Layered Gradient Overlays with Rich Indian Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-100/8 to-orange-100/12 opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-tl from-yellow-50/5 via-transparent to-transparent opacity-40" />
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

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
