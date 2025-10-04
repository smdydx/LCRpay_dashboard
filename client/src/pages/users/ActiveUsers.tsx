
import { UserTable } from "@/components/UserTable";

export default function ActiveUsers() {
  const activeUsers = [
    { id: "1", name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91 98765 43210", userType: "Prime" as const, status: "Active" as const, downloadCount: 245, rechargeAmount: 15000 },
    { id: "3", name: "Amit Patel", email: "amit@example.com", phone: "+91 98765 43212", userType: "Normal" as const, status: "Active" as const, downloadCount: 78, rechargeAmount: 3200 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Active Users</h2>
        <p className="text-muted-foreground mt-2">Currently active users on the platform</p>
      </div>
      <UserTable users={activeUsers} />
    </div>
  );
}
