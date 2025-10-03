import { UserTable } from '../UserTable';

export default function UserTableExample() {
  const mockUsers = [
    { id: "1", name: "Rajesh Kumar", email: "rajesh@example.com", phone: "+91 98765 43210", userType: "Prime" as const, status: "Active" as const, downloadCount: 245, rechargeAmount: 15000 },
    { id: "2", name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 43211", userType: "Prime" as const, status: "Active" as const, downloadCount: 189, rechargeAmount: 12500 },
    { id: "3", name: "Amit Patel", email: "amit@example.com", phone: "+91 98765 43212", userType: "Normal" as const, status: "Active" as const, downloadCount: 78, rechargeAmount: 3200 },
    { id: "4", name: "Sneha Reddy", email: "sneha@example.com", phone: "+91 98765 43213", userType: "Normal" as const, status: "Inactive" as const, downloadCount: 12, rechargeAmount: 500 },
  ];

  return (
    <div className="p-6 bg-background">
      <UserTable users={mockUsers} />
    </div>
  );
}
