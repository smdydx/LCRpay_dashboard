import { StatCard } from '../StatCard';
import { Download, Users, DollarSign } from 'lucide-react';

export default function StatCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-background">
      <StatCard
        title="Total Download"
        value={45820}
        icon={Download}
        trend={{ value: 12.5, isPositive: true }}
      />
      <StatCard
        title="Prime Users"
        value={1234}
        icon={Users}
        trend={{ value: 8.2, isPositive: true }}
      />
      <StatCard
        title="Total Recharge"
        value={89450}
        icon={DollarSign}
        prefix="₹"
        trend={{ value: 15.3, isPositive: true }}
      />
    </div>
  );
}
