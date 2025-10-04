import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, DollarSign, TrendingUp, Zap, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const liveTransactions = [
  { id: "TXN890234", user: "Rahul Kumar", service: "Mobile Recharge", amount: "₹299", status: "Processing", time: "2s ago" },
  { id: "TXN890235", user: "Priya Sharma", service: "Electricity Bill", amount: "₹2,450", status: "Success", time: "5s ago" },
  { id: "TXN890236", user: "Amit Patel", service: "DTH Recharge", amount: "₹599", status: "Success", time: "8s ago" },
  { id: "TXN890237", user: "Sneha Reddy", service: "Water Bill", amount: "₹850", status: "Processing", time: "12s ago" },
  { id: "TXN890238", user: "Vikram Singh", service: "Gas Bill", amount: "₹1,200", status: "Success", time: "15s ago" },
];

export default function RealtimeMetrics() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Real-time Metrics Dashboard
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Live monitoring of system activity and performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-green-500 animate-pulse-subtle" data-testid="card-stat-active-users">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Users Now</CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-active-users">1,247</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">●</span> Online right now
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-blue-500 animate-pulse-subtle" data-testid="card-stat-transactions">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Transactions/Min</CardTitle>
            <Zap className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-tpm">42</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-500">+12%</span> from avg
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500 animate-pulse-subtle" data-testid="card-stat-revenue">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue Today</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-revenue">₹3.2L</div>
            <p className="text-xs text-muted-foreground">Last updated: now</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-orange-500 animate-pulse-subtle" data-testid="card-stat-success-rate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-success-rate">98.7%</div>
            <p className="text-xs text-muted-foreground">Live success rate</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-elevate" data-testid="card-system-health">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              System Health
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">API Response Time</span>
              <Badge variant="default" className="bg-green-500/10 text-green-500" data-testid="badge-api-status">
                145ms
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Database Load</span>
              <Badge variant="default" className="bg-green-500/10 text-green-500" data-testid="badge-db-status">
                32%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Server CPU</span>
              <Badge variant="default" className="bg-blue-500/10 text-blue-500" data-testid="badge-cpu-status">
                45%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Memory Usage</span>
              <Badge variant="default" className="bg-blue-500/10 text-blue-500" data-testid="badge-memory-status">
                58%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate" data-testid="card-alerts">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-orange-500" />
              Active Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-green-500 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              All systems operational
            </div>
            <div className="text-sm text-muted-foreground">
              No critical alerts in the last 24 hours
            </div>
            <div className="text-sm text-muted-foreground">
              Uptime: 99.98%
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-live-transactions">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-blue-500" />
            Live Transactions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {liveTransactions.map((txn, index) => (
                  <TableRow key={txn.id} data-testid={`row-transaction-${index}`} className="animate-slide-in-bottom">
                    <TableCell className="font-mono text-xs" data-testid={`text-id-${index}`}>{txn.id}</TableCell>
                    <TableCell data-testid={`text-user-${index}`}>{txn.user}</TableCell>
                    <TableCell data-testid={`text-service-${index}`}>{txn.service}</TableCell>
                    <TableCell data-testid={`text-amount-${index}`}>{txn.amount}</TableCell>
                    <TableCell data-testid={`badge-status-${index}`}>
                      <Badge 
                        variant="default" 
                        className={txn.status === "Success" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}
                      >
                        {txn.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground" data-testid={`text-time-${index}`}>{txn.time}</TableCell>
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
