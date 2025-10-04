
import { StatCard } from "@/components/StatCard";
import { Activity, CheckCircle, XCircle, Clock } from "lucide-react";

export default function TransactionAnalytics() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">Transaction Analytics</h2>
        <p className="text-muted-foreground mt-2">Monitor transaction trends and patterns</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Transactions" value="45,892" icon={Activity} trend={{ value: 12.5, isPositive: true }} gradient="from-blue-500 to-cyan-500" />
        <StatCard title="Successful" value="45,321" icon={CheckCircle} trend={{ value: 15.2, isPositive: true }} gradient="from-green-500 to-emerald-500" />
        <StatCard title="Failed" value="234" icon={XCircle} trend={{ value: 3.1, isPositive: false }} gradient="from-red-500 to-rose-500" />
        <StatCard title="Pending" value="337" icon={Clock} trend={{ value: 1.8, isPositive: false }} gradient="from-amber-500 to-orange-500" />
      </div>
    </div>
  );
}
