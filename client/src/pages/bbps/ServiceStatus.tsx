import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CheckCircle, XCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const services = [
  { service: "Electricity Bill Payment", provider: "Multiple", status: "Active", uptime: "99.8%", lastCheck: "2 mins ago" },
  { service: "Water Bill Payment", provider: "Multiple", status: "Active", uptime: "99.5%", lastCheck: "5 mins ago" },
  { service: "Gas Bill Payment", provider: "Multiple", status: "Active", uptime: "99.9%", lastCheck: "1 min ago" },
  { service: "Mobile Postpaid", provider: "All Operators", status: "Active", uptime: "99.7%", lastCheck: "3 mins ago" },
  { service: "DTH Recharge", provider: "All Operators", status: "Active", uptime: "99.6%", lastCheck: "4 mins ago" },
  { service: "Broadband Bill", provider: "Multiple ISPs", status: "Active", uptime: "98.9%", lastCheck: "10 mins ago" },
  { service: "Insurance Premium", provider: "Multiple Insurers", status: "Active", uptime: "99.4%", lastCheck: "6 mins ago" },
  { service: "Loan Repayment", provider: "Banks & NBFCs", status: "Active", uptime: "99.3%", lastCheck: "8 mins ago" },
];

export default function ServiceStatus() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          BBPS Service Status
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Real-time status of all BBPS services</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover-elevate border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24/24</div>
            <p className="text-xs text-muted-foreground">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Uptime</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.5%</div>
            <p className="text-xs text-muted-foreground">Last 30 days</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Providers</CardTitle>
            <Activity className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Connected providers</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Service Health Monitor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Uptime</TableHead>
                  <TableHead>Last Check</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((row, index) => (
                  <TableRow key={index} data-testid={`row-service-${index}`}>
                    <TableCell className="font-medium">{row.service}</TableCell>
                    <TableCell>{row.provider}</TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-500/10 text-green-500">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{row.uptime}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{row.lastCheck}</TableCell>
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
