
import { UserTable } from "@/components/UserTable";

export default function KYCPending() {
  const kycPendingUsers = [
    { id: "6", name: "Ananya Desai", email: "ananya@example.com", phone: "+91 98765 43215", userType: "Normal" as const, status: "Active" as const, downloadCount: 56, rechargeAmount: 2800 },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 animate-fade-in">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">KYC Pending</h2>
        <p className="text-muted-foreground mt-2">Users with pending KYC verification</p>
      </div>
      <UserTable users={kycPendingUsers} />
    </div>
  );
}
