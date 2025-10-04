import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const dailyReports = [
  { date: "2024-10-04", transactions: 1245, revenue: "₹4,56,780", commission: "₹12,450", services: 8, status: "Generated" },
  { date: "2024-10-03", transactions: 1180, revenue: "₹4,23,560", commission: "₹11,890", services: 8, status: "Generated" },
  { date: "2024-10-02", transactions: 1298, revenue: "₹4,78,920", commission: "₹13,120", services: 8, status: "Generated" },
  { date: "2024-10-01", transactions: 1156, revenue: "₹3,98,450", commission: "₹10,980", services: 8, status: "Generated" },
];

export default function DailyReports() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
            Daily Reports
          </h1>
          <p className="text-muted-foreground mt-1" data-testid="text-page-description">Daily transaction and revenue reports</p>
        </div>
        <Button data-testid="button-generate">
          <Calendar className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      <Card className="hover-elevate" data-testid="card-reports-table">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-500" />
            Daily Report History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Transactions</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Services</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dailyReports.map((report, index) => (
                  <TableRow key={index} data-testid={`row-report-${index}`}>
                    <TableCell className="font-medium" data-testid={`text-date-${index}`}>{report.date}</TableCell>
                    <TableCell data-testid={`text-transactions-${index}`}>{report.transactions.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold" data-testid={`text-revenue-${index}`}>{report.revenue}</TableCell>
                    <TableCell data-testid={`text-commission-${index}`}>{report.commission}</TableCell>
                    <TableCell data-testid={`text-services-${index}`}>{report.services}</TableCell>
                    <TableCell data-testid={`badge-status-${index}`}>
                      <Badge variant="default" className="bg-green-500/10 text-green-500">{report.status}</Badge>
                    </TableCell>
                    <TableCell data-testid={`button-download-${index}`}>
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
