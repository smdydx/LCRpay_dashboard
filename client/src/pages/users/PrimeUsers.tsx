
import { UserTable } from "@/components/UserTable";

export default function PrimeUsers() {
  const primeUsers = [
    { id: "1", name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91 98765 43210", userType: "Prime" as const, status: "Active" as const, downloadCount: 245, rechargeAmount: 15000 },
    { id: "2", name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43211", userType: "Prime" as const, status: "Active" as const, downloadCount: 189, rechargeAmount: 12500 },
    { id: "5", name: "Vikram Singh", email: "vikram@example.com", phone: "+91 98765 43214", userType: "Prime" as const, status: "Active" as const, downloadCount: 312, rechargeAmount: 22000 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Prime Users</h2>
        <p className="text-muted-foreground mt-2">Premium membership users with enhanced features</p>
      </div>
      <UserTable users={primeUsers} />
    </div>
  );
}
