import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const commissionSettings = [
  { service: "Electricity Bill", currentRate: "0.6%", minAmount: "₹0", maxAmount: "₹10,000", type: "Percentage" },
  { service: "Water Bill", currentRate: "0.5%", minAmount: "₹0", maxAmount: "₹5,000", type: "Percentage" },
  { service: "Gas Bill", currentRate: "0.7%", minAmount: "₹0", maxAmount: "₹8,000", type: "Percentage" },
  { service: "Mobile Recharge", currentRate: "1.5%", minAmount: "₹10", maxAmount: "₹2,000", type: "Percentage" },
  { service: "DTH Recharge", currentRate: "1.0%", minAmount: "₹100", maxAmount: "₹3,000", type: "Percentage" },
  { service: "Insurance", currentRate: "1.0%", minAmount: "₹500", maxAmount: "₹50,000", type: "Percentage" },
  { service: "Loan Repayment", currentRate: "0.8%", minAmount: "₹1,000", maxAmount: "₹1,00,000", type: "Percentage" },
];

export default function CommissionSettings() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Commission Settings
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Configure commission rates for BBPS services</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Service Commission Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Current Rate</TableHead>
                  <TableHead>Min Amount</TableHead>
                  <TableHead>Max Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {commissionSettings.map((row, index) => (
                  <TableRow key={index} data-testid={`row-service-${index}`}>
                    <TableCell className="font-medium">{row.service}</TableCell>
                    <TableCell>
                      <Input defaultValue={row.currentRate} className="w-20" />
                    </TableCell>
                    <TableCell>{row.minAmount}</TableCell>
                    <TableCell>{row.maxAmount}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Update</Button>
                    </TableCell>
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
