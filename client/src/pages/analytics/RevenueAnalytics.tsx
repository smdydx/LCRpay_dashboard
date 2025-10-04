
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { DollarSign, TrendingUp, CreditCard, Calendar } from "lucide-react";

export default function RevenueAnalytics() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Revenue Analytics</h2>
        <p className="text-muted-foreground mt-2">Track revenue and financial performance</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="₹89,45,231" icon={DollarSign} trend={{ value: 15.3, isPositive: true }} gradient="from-green-500 to-emerald-500" />
        <StatCard title="Monthly Revenue" value="₹12,34,567" icon={TrendingUp} trend={{ value: 8.7, isPositive: true }} gradient="from-blue-500 to-cyan-500" />
        <StatCard title="Today's Revenue" value="₹45,890" icon={CreditCard} trend={{ value: 12.4, isPositive: true }} gradient="from-purple-500 to-pink-500" />
        <StatCard title="Avg. Daily Revenue" value="₹1,23,456" icon={Calendar} trend={{ value: 5.6, isPositive: true }} gradient="from-orange-500 to-amber-500" />
      </div>
    </div>
  );
}
