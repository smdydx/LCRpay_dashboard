import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, TrendingUp } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const monthlyReports = [
  { month: "September 2024", transactions: 36540, revenue: "₹1,34,56,780", commission: "₹3,68,450", growth: "+8.5%" },
  { month: "August 2024", transactions: 33680, revenue: "₹1,23,98,560", commission: "₹3,39,890", growth: "+7.2%" },
  { month: "July 2024", transactions: 31420, revenue: "₹1,15,78,920", commission: "₹3,16,120", growth: "+9.1%" },
];

export default function MonthlyReports() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Monthly Reports
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Monthly performance and revenue reports</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Monthly Report History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>Transactions</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Growth</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {monthlyReports.map((report, index) => (
                  <TableRow key={index} data-testid={`row-report-${index}`}>
                    <TableCell className="font-medium">{report.month}</TableCell>
                    <TableCell>{report.transactions.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold">{report.revenue}</TableCell>
                    <TableCell>{report.commission}</TableCell>
                    <TableCell>
                      <span className="text-green-500 font-semibold">{report.growth}</span>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
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
