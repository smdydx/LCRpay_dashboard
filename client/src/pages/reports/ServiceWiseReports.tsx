import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const serviceReports = [
  { service: "Mobile Recharge", transactions: 8540, revenue: "₹12,45,000", share: 32, avgTicket: "₹146" },
  { service: "Electricity Bill", transactions: 3890, revenue: "₹15,67,000", share: 28, avgTicket: "₹403" },
  { service: "DTH Recharge", transactions: 4320, revenue: "₹6,78,000", share: 18, avgTicket: "₹157" },
  { service: "Gas Bill", transactions: 1980, revenue: "₹5,67,000", share: 12, avgTicket: "₹286" },
  { service: "Water Bill", transactions: 2150, revenue: "₹4,32,000", share: 10, avgTicket: "₹201" },
];

export default function ServiceWiseReports() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Service-wise Reports
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Performance breakdown by service category</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Service Performance Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Transactions</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Market Share</TableHead>
                  <TableHead>Avg Ticket Size</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceReports.map((row, index) => (
                  <TableRow key={index} data-testid={`row-service-${index}`}>
                    <TableCell className="font-medium">{row.service}</TableCell>
                    <TableCell>{row.transactions.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold">{row.revenue}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={row.share} className="h-2 w-20" />
                        <span className="text-sm">{row.share}%</span>
                      </div>
                    </TableCell>
                    <TableCell>{row.avgTicket}</TableCell>
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
