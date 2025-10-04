import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const commissionData = [
  { service: "Mobile Recharge", transactions: 8540, commission: "₹1,28,100", rate: "1.5%", earned: "₹1,28,100" },
  { service: "Electricity Bill", transactions: 3890, commission: "₹94,020", rate: "0.6%", earned: "₹94,020" },
  { service: "DTH Recharge", transactions: 4320, commission: "₹67,800", rate: "1.0%", earned: "₹67,800" },
  { service: "Insurance", transactions: 1540, commission: "₹1,89,000", rate: "1.0%", earned: "₹1,89,000" },
];

export default function CommissionReports() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Commission Reports
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Track commission earnings by service</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Commission Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Transactions</TableHead>
                  <TableHead>Commission Rate</TableHead>
                  <TableHead>Total Commission</TableHead>
                  <TableHead>Amount Earned</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {commissionData.map((row, index) => (
                  <TableRow key={index} data-testid={`row-commission-${index}`}>
                    <TableCell className="font-medium">{row.service}</TableCell>
                    <TableCell>{row.transactions.toLocaleString()}</TableCell>
                    <TableCell>{row.rate}</TableCell>
                    <TableCell className="font-semibold">{row.commission}</TableCell>
                    <TableCell className="text-green-500 font-semibold">{row.earned}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
