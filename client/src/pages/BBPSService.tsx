import { BBPSTable } from "@/components/BBPSTable";

export default function BBPSService() {
  const mockServices = [
    { id: "1", serviceName: "Electricity Bill", category: "Utilities", provider: "MSEB", amount: 2500, status: "Success" as const, transactionDate: "2025-10-01" },
    { id: "2", serviceName: "Gas Bill", category: "Utilities", provider: "Indane Gas", amount: 850, status: "Success" as const, transactionDate: "2025-10-02" },
    { id: "3", serviceName: "Water Bill", category: "Utilities", provider: "Municipal Corp", amount: 450, status: "Pending" as const, transactionDate: "2025-10-03" },
    { id: "4", serviceName: "Broadband", category: "Telecom", provider: "Airtel", amount: 1200, status: "Failed" as const, transactionDate: "2025-10-03" },
    { id: "5", serviceName: "DTH Recharge", category: "Entertainment", provider: "Tata Sky", amount: 599, status: "Success" as const, transactionDate: "2025-10-02" },
    { id: "6", serviceName: "Mobile Postpaid", category: "Telecom", provider: "Jio", amount: 799, status: "Success" as const, transactionDate: "2025-10-01" },
    { id: "7", serviceName: "LPG Cylinder", category: "Utilities", provider: "HP Gas", amount: 1050, status: "Pending" as const, transactionDate: "2025-10-03" },
    { id: "8", serviceName: "Insurance Premium", category: "Finance", provider: "LIC", amount: 15000, status: "Success" as const, transactionDate: "2025-09-30" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">BBPS Services</h2>
        <p className="text-muted-foreground">Track all bill payment and service transactions</p>
      </div>

      <BBPSTable services={mockServices} />
    </div>
  );
}
