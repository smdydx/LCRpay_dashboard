import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Zap, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const liveTransactions = [
  { id: "TXN890256", user: "Rahul Kumar", service: "Mobile Recharge", amount: "₹299", status: "Processing", time: "Just now" },
  { id: "TXN890257", user: "Priya Sharma", service: "Electricity Bill", amount: "₹2,450", status: "Processing", time: "2s ago" },
  { id: "TXN890258", user: "Amit Patel", service: "DTH Recharge", amount: "₹599", status: "Completed", time: "5s ago" },
  { id: "TXN890259", user: "Sneha Reddy", service: "Water Bill", amount: "₹850", status: "Processing", time: "8s ago" },
  { id: "TXN890260", user: "Vikram Singh", service: "Gas Bill", amount: "₹1,200", status: "Completed", time: "12s ago" },
  { id: "TXN890261", user: "Anjali Gupta", service: "Broadband Bill", amount: "₹999", status: "Processing", time: "15s ago" },
  { id: "TXN890262", user: "Ravi Verma", service: "Mobile Recharge", amount: "₹199", status: "Completed", time: "18s ago" },
  { id: "TXN890263", user: "Deepa Nair", service: "Insurance Premium", amount: "₹5,500", status: "Processing", time: "20s ago" },
];

export default function LiveTransactions() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
            Live Transactions
          </h1>
          <p className="text-muted-foreground mt-1" data-testid="text-page-description">Real-time transaction monitoring</p>
        </div>
        <Button variant="outline" size="sm" data-testid="button-refresh">
          <RefreshCw className="h-4 w-4 mr-2" />
          Auto-refresh
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover-elevate border-l-4 border-l-blue-500 animate-pulse-subtle" data-testid="card-stat-processing">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Processing Now</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-processing">5</div>
            <p className="text-xs text-muted-foreground">Active transactions</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-green-500" data-testid="card-stat-completed">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed (Last Min)</CardTitle>
            <Zap className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-completed">42</div>
            <p className="text-xs text-muted-foreground">Successful transactions</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500" data-testid="card-stat-volume">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <Activity className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-volume">₹2.4L</div>
            <p className="text-xs text-muted-foreground">Last 5 minutes</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-live-table">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Live Transaction Feed
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
                    <TableCell className="font-semibold" data-testid={`text-amount-${index}`}>{txn.amount}</TableCell>
                    <TableCell data-testid={`badge-status-${index}`}>
                      <Badge 
                        variant="default" 
                        className={txn.status === "Completed" ? "bg-green-500/10 text-green-500" : "bg-blue-500/10 text-blue-500 animate-pulse"}
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
