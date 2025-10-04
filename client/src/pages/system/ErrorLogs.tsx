import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const errors = [
  { timestamp: "2024-10-04 15:30", level: "Error", message: "Payment gateway timeout", source: "PaymentService" },
  { timestamp: "2024-10-04 14:20", level: "Warning", message: "High response time detected", source: "APIGateway" },
  { timestamp: "2024-10-04 12:15", level: "Error", message: "Database connection failed", source: "DatabaseService" },
];

export default function ErrorLogs() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Error Logs
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">System error and warning logs</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Recent Errors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Level</TableHead>
                  <TableHead>Message</TableHead>
                  <TableHead>Source</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {errors.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-xs">{row.timestamp}</TableCell>
                    <TableCell>
                      <Badge variant="default" className={row.level === "Error" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"}>
                        {row.level}
                      </Badge>
                    </TableCell>
                    <TableCell>{row.message}</TableCell>
                    <TableCell className="font-mono text-xs">{row.source}</TableCell>
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
