import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, TrendingUp, DollarSign, Zap } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const serviceData = [
  { service: "Mobile Recharge", transactions: 8540, revenue: "₹12,45,000", successRate: 98.5, avgTime: "2.3s", status: "Excellent" },
  { service: "DTH Recharge", transactions: 4320, revenue: "₹6,78,000", successRate: 97.8, avgTime: "2.8s", status: "Excellent" },
  { service: "Electricity Bill", transactions: 3890, revenue: "₹15,67,000", successRate: 96.2, avgTime: "3.1s", status: "Good" },
  { service: "Water Bill", transactions: 2150, revenue: "₹4,32,000", successRate: 95.8, avgTime: "2.9s", status: "Good" },
  { service: "Gas Bill", transactions: 1980, revenue: "₹5,67,000", successRate: 97.1, avgTime: "2.7s", status: "Excellent" },
  { service: "Broadband Bill", transactions: 2640, revenue: "₹7,89,000", successRate: 96.8, avgTime: "3.2s", status: "Good" },
  { service: "Insurance Premium", transactions: 1540, revenue: "₹18,90,000", successRate: 98.2, avgTime: "4.1s", status: "Excellent" },
  { service: "Loan Repayment", transactions: 980, revenue: "₹22,45,000", successRate: 97.9, avgTime: "3.8s", status: "Excellent" },
];

export default function ServicePerformance() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Service Performance Analytics
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Monitor service efficiency and performance metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-blue-500" data-testid="card-stat-total-services">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-total-services">24</div>
            <p className="text-xs text-muted-foreground">Operational services</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-green-500" data-testid="card-stat-transactions">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-transactions">26,040</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500" data-testid="card-stat-revenue">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-revenue">₹94.13L</div>
            <p className="text-xs text-muted-foreground">Generated revenue</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-orange-500" data-testid="card-stat-success-rate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-success-rate">97.3%</div>
            <p className="text-xs text-muted-foreground">Across all services</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-service-table">
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
                  <TableHead>Success Rate</TableHead>
                  <TableHead>Avg Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {serviceData.map((row, index) => (
                  <TableRow key={index} data-testid={`row-service-${index}`}>
                    <TableCell className="font-medium" data-testid={`text-service-${index}`}>{row.service}</TableCell>
                    <TableCell data-testid={`text-transactions-${index}`}>{row.transactions.toLocaleString()}</TableCell>
                    <TableCell data-testid={`text-revenue-${index}`}>{row.revenue}</TableCell>
                    <TableCell data-testid={`progress-success-${index}`}>
                      <div className="flex items-center gap-2">
                        <Progress value={row.successRate} className="h-2 w-20" />
                        <span className="text-sm">{row.successRate}%</span>
                      </div>
                    </TableCell>
                    <TableCell data-testid={`text-avgtime-${index}`}>{row.avgTime}</TableCell>
                    <TableCell data-testid={`badge-status-${index}`}>
                      <Badge 
                        variant="default" 
                        className={row.status === "Excellent" ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" : "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"}
                      >
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
