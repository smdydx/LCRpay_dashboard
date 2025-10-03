import { UserTable } from "@/components/UserTable";

export default function DownloadUser() {
  const mockUsers = [
    { id: "1", name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91 98765 43210", userType: "Prime" as const, status: "Active" as const, downloadCount: 245, rechargeAmount: 15000 },
    { id: "2", name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43211", userType: "Prime" as const, status: "Active" as const, downloadCount: 189, rechargeAmount: 12500 },
    { id: "3", name: "Amit Patel", email: "amit@example.com", phone: "+91 98765 43212", userType: "Normal" as const, status: "Active" as const, downloadCount: 78, rechargeAmount: 3200 },
    { id: "4", name: "Sneha Reddy", email: "sneha@example.com", phone: "+91 98765 43213", userType: "Normal" as const, status: "Inactive" as const, downloadCount: 12, rechargeAmount: 500 },
    { id: "5", name: "Vikram Singh", email: "vikram@example.com", phone: "+91 98765 43214", userType: "Prime" as const, status: "Active" as const, downloadCount: 312, rechargeAmount: 22000 },
    { id: "6", name: "Ananya Desai", email: "ananya@example.com", phone: "+91 98765 43215", userType: "Normal" as const, status: "Active" as const, downloadCount: 56, rechargeAmount: 2800 },
    { id: "7", name: "Karthik Iyer", email: "karthik@example.com", phone: "+91 98765 43216", userType: "Prime" as const, status: "Active" as const, downloadCount: 198, rechargeAmount: 18500 },
    { id: "8", name: "Neha Gupta", email: "neha@example.com", phone: "+91 98765 43217", userType: "Normal" as const, status: "Active" as const, downloadCount: 89, rechargeAmount: 4200 },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">User Management</h2>
        <p className="text-muted-foreground">View and manage all registered users with detailed metrics</p>
      </div>

      <UserTable users={mockUsers} />
    </div>
  );
}
