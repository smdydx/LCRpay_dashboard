
import { UserTable } from "@/components/UserTable";

export default function InactiveUsers() {
  const inactiveUsers = [
    { id: "4", name: "Sneha Reddy", email: "sneha@example.com", phone: "+91 98765 43213", userType: "Normal" as const, status: "Inactive" as const, downloadCount: 12, rechargeAmount: 500 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Inactive Users</h2>
        <p className="text-muted-foreground mt-2">Users who are currently inactive</p>
      </div>
      <UserTable users={inactiveUsers} />
    </div>
  );
}
