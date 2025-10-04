
import { UserTable } from "@/components/UserTable";
import { Card } from "@/components/ui/card";

export default function AllUsers() {
  const mockUsers = [
    { id: "1", name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91 98765 43210", userType: "Prime" as const, status: "Active" as const, downloadCount: 245, rechargeAmount: 15000 },
    { id: "2", name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43211", userType: "Prime" as const, status: "Active" as const, downloadCount: 189, rechargeAmount: 12500 },
    { id: "3", name: "Amit Patel", email: "amit@example.com", phone: "+91 98765 43212", userType: "Normal" as const, status: "Active" as const, downloadCount: 78, rechargeAmount: 3200 },
    { id: "4", name: "Sneha Reddy", email: "sneha@example.com", phone: "+91 98765 43213", userType: "Normal" as const, status: "Inactive" as const, downloadCount: 12, rechargeAmount: 500 },
    { id: "5", name: "Vikram Singh", email: "vikram@example.com", phone: "+91 98765 43214", userType: "Prime" as const, status: "Active" as const, downloadCount: 312, rechargeAmount: 22000 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">All Users</h2>
        <p className="text-muted-foreground mt-2">Complete list of all registered users</p>
      </div>
      <UserTable users={mockUsers} />
    </div>
  );
}
