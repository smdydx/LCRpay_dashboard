import { StatCard } from "@/components/StatCard";
import { Download, Users, DollarSign, TrendingUp, Activity, Zap, ShoppingCart, CreditCard, BarChart3 } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Total Download", value: 45820, icon: Download, trend: { value: 12.5, isPositive: true } },
    { title: "Prime Users", value: 1234, icon: Users, trend: { value: 8.2, isPositive: true } },
    { title: "Total Recharge", value: 89450, icon: DollarSign, prefix: "₹", trend: { value: 15.3, isPositive: true } },
    { title: "Revenue Growth", value: 23, icon: TrendingUp, suffix: "%", trend: { value: 5.8, isPositive: true } },
    { title: "Active Sessions", value: 892, icon: Activity, trend: { value: -3.2, isPositive: false } },
    { title: "Transactions", value: 5642, icon: Zap, trend: { value: 18.7, isPositive: true } },
    { title: "Orders", value: 3421, icon: ShoppingCart, trend: { value: 9.4, isPositive: true } },
    { title: "Payment Success", value: 98, icon: CreditCard, suffix: "%", trend: { value: 2.1, isPositive: true } },
    { title: "Conversion Rate", value: 12, icon: BarChart3, suffix: "%", trend: { value: 4.3, isPositive: true } },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Monitor your key performance metrics in real-time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}
