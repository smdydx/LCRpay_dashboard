import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const logs = [
  { timestamp: "2024-10-04 15:30", user: "admin@lcr.com", action: "Login", status: "Success" },
  { timestamp: "2024-10-04 14:20", user: "admin@lcr.com", action: "Updated Settings", status: "Success" },
];

export default function AuditLogs() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Audit Logs
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Track all system activities</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {logs.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-xs">{row.timestamp}</TableCell>
                    <TableCell>{row.user}</TableCell>
                    <TableCell>{row.action}</TableCell>
                    <TableCell className="text-green-500">{row.status}</TableCell>
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
