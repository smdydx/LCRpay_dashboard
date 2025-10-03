import { StatCard } from "@/components/StatCard";
import { UserTable } from "@/components/UserTable";
import { BBPSTable } from "@/components/BBPSTable";
import { Users, CreditCard, TrendingUp, DollarSign } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Dashboard</h2>
        <p className="text-muted-foreground mt-2">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value="2,847"
          icon={Users}
          trend={{ value: 12.5, isPositive: true }}
          gradient="from-blue-500 to-cyan-500"
        />
        <StatCard
          title="Transactions"
          value="1,234"
          icon={CreditCard}
          trend={{ value: 8.2, isPositive: true }}
          gradient="from-purple-500 to-pink-500"
        />
        <StatCard
          title="Revenue"
          value="₹45,231"
          icon={DollarSign}
          trend={{ value: 3.1, isPositive: false }}
          gradient="from-orange-500 to-red-500"
        />
        <StatCard
          title="Growth"
          value="23.5%"
          icon={TrendingUp}
          trend={{ value: 5.4, isPositive: true }}
          gradient="from-green-500 to-emerald-500"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <UserTable />
        <BBPSTable />
      </div>
    </div>
  );
}