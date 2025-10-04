import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const settlements = [
  { id: "SET890125", date: "2024-10-04", amount: "₹4,56,780", status: "Completed", accountNo: "****1234" },
  { id: "SET890124", date: "2024-10-03", amount: "₹4,23,560", status: "Completed", accountNo: "****1234" },
  { id: "SET890123", date: "2024-10-02", amount: "₹4,78,920", status: "Pending", accountNo: "****1234" },
];

export default function SettlementReports() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Settlement Reports
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Track payment settlements and transfers</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Settlement History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Settlement ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Account No</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {settlements.map((row, index) => (
                  <TableRow key={row.id} data-testid={`row-settlement-${index}`}>
                    <TableCell className="font-mono text-xs">{row.id}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell className="font-semibold">{row.amount}</TableCell>
                    <TableCell className="font-mono text-xs">{row.accountNo}</TableCell>
                    <TableCell>
                      <Badge variant="default" className={row.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}>
                        {row.status}
                      </Badge>
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
