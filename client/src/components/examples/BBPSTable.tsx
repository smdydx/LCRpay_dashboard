import { BBPSTable } from '../BBPSTable';

export default function BBPSTableExample() {
  const mockServices = [
    { id: "1", serviceName: "Electricity Bill", category: "Utilities", provider: "MSEB", amount: 2500, status: "Success" as const, transactionDate: "2025-10-01" },
    { id: "2", serviceName: "Gas Bill", category: "Utilities", provider: "Indane Gas", amount: 850, status: "Success" as const, transactionDate: "2025-10-02" },
    { id: "3", serviceName: "Water Bill", category: "Utilities", provider: "Municipal Corp", amount: 450, status: "Pending" as const, transactionDate: "2025-10-03" },
    { id: "4", serviceName: "Broadband", category: "Telecom", provider: "Airtel", amount: 1200, status: "Failed" as const, transactionDate: "2025-10-03" },
  ];

  return (
    <div className="p-6 bg-background">
      <BBPSTable services={mockServices} />
    </div>
  );
}
