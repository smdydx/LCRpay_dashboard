import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const apiMetrics = [
  { endpoint: "/api/transactions", calls: 12450, avgTime: "145ms", successRate: "99.8%" },
  { endpoint: "/api/users", calls: 8900, avgTime: "98ms", successRate: "99.9%" },
  { endpoint: "/api/services", calls: 6780, avgTime: "112ms", successRate: "99.7%" },
];

export default function APIPerformance() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          API Performance
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Monitor API endpoint performance</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>API Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Endpoint</TableHead>
                  <TableHead>API Calls</TableHead>
                  <TableHead>Avg Response Time</TableHead>
                  <TableHead>Success Rate</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiMetrics.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-xs">{row.endpoint}</TableCell>
                    <TableCell>{row.calls.toLocaleString()}</TableCell>
                    <TableCell>{row.avgTime}</TableCell>
                    <TableCell className="text-green-500 font-semibold">{row.successRate}</TableCell>
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
