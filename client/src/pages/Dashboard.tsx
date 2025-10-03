import { StatCard } from "@/components/StatCard";
import { UserTable } from "@/components/UserTable";
import { BBPSTable } from "@/components/BBPSTable";
import { Users, CreditCard, TrendingUp, DollarSign } from "lucide-react";

const sampleUsers = [
  {
    id: "1",
    name: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    phone: "+91 98765 43210",
    userType: "Prime" as const,
    status: "Active" as const,
    downloadCount: 145,
    rechargeAmount: 25000,
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43211",
    userType: "Normal" as const,
    status: "Active" as const,
    downloadCount: 87,
    rechargeAmount: 12500,
  },
  {
    id: "3",
    name: "Amit Patel",
    email: "amit.patel@example.com",
    phone: "+91 98765 43212",
    userType: "Prime" as const,
    status: "Inactive" as const,
    downloadCount: 203,
    rechargeAmount: 45000,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "+91 98765 43213",
    userType: "Normal" as const,
    status: "Active" as const,
    downloadCount: 56,
    rechargeAmount: 8900,
  },
  {
    id: "5",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91 98765 43214",
    userType: "Prime" as const,
    status: "Active" as const,
    downloadCount: 312,
    rechargeAmount: 67000,
  },
];

const sampleServices = [
  {
    id: "1",
    serviceName: "Electricity Bill",
    category: "Utilities",
    provider: "BSES Rajdhani",
    amount: 2500,
    status: "Success" as const,
    transactionDate: "2024-01-15",
  },
  {
    id: "2",
    serviceName: "Water Bill",
    category: "Utilities",
    provider: "Delhi Jal Board",
    amount: 850,
    status: "Success" as const,
    transactionDate: "2024-01-14",
  },
  {
    id: "3",
    serviceName: "Gas Bill",
    category: "Utilities",
    provider: "Indraprastha Gas",
    amount: 1200,
    status: "Pending" as const,
    transactionDate: "2024-01-13",
  },
  {
    id: "4",
    serviceName: "Mobile Postpaid",
    category: "Telecom",
    provider: "Airtel",
    amount: 599,
    status: "Success" as const,
    transactionDate: "2024-01-12",
  },
  {
    id: "5",
    serviceName: "DTH Recharge",
    category: "Entertainment",
    provider: "Tata Sky",
    amount: 450,
    status: "Failed" as const,
    transactionDate: "2024-01-11",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-slide-in-up">Dashboard</h2>
        <p className="text-muted-foreground mt-2 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
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
        <UserTable users={sampleUsers} />
        <BBPSTable services={sampleServices} />
      </div>
    </div>
  );
}