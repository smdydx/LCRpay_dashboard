import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, XCircle, RefreshCw, TrendingDown } from "lucide-react";
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

const failedTransactions = [
  { id: "TXN890243", date: "2024-10-04 14:30", user: "Amit Patel", service: "DTH Recharge", amount: "₹599", reason: "Payment Gateway Timeout", action: "Retry" },
  { id: "TXN890215", date: "2024-10-04 12:15", user: "Sanjay Kumar", service: "Mobile Recharge", amount: "₹299", reason: "Insufficient Balance", action: "Refund" },
  { id: "TXN890198", date: "2024-10-04 10:45", user: "Meera Shah", service: "Electricity Bill", amount: "₹3,200", reason: "Invalid Account Number", action: "Contact" },
  { id: "TXN890187", date: "2024-10-03 18:20", user: "Karan Malhotra", service: "Water Bill", amount: "₹1,100", reason: "Network Error", action: "Retry" },
  { id: "TXN890165", date: "2024-10-03 15:10", user: "Pooja Desai", service: "Gas Bill", amount: "₹850", reason: "Provider Service Down", action: "Retry" },
  { id: "TXN890142", date: "2024-10-03 11:30", user: "Arjun Reddy", service: "Broadband Bill", amount: "₹1,499", reason: "Transaction Declined", action: "Refund" },
];

export default function FailedTransactions() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Failed Transactions
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Monitor and resolve failed transaction issues</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-red-500" data-testid="card-stat-total-failed">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Failed</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-total-failed">564</div>
            <p className="text-xs text-muted-foreground">All time failures</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-orange-500" data-testid="card-stat-today">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Failed Today</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-today">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">-15%</span> from yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-yellow-500" data-testid="card-stat-pending-retry">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Retry</CardTitle>
            <RefreshCw className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-pending">8</div>
            <p className="text-xs text-muted-foreground">Awaiting retry</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-blue-500" data-testid="card-stat-failure-rate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Failure Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-rate">2.0%</div>
            <p className="text-xs text-muted-foreground">Overall rate</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-failed-table">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <XCircle className="h-5 w-5 text-red-500" />
            Failed Transaction Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Failure Reason</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {failedTransactions.map((txn, index) => (
                  <TableRow key={txn.id} data-testid={`row-transaction-${index}`}>
                    <TableCell className="font-mono text-xs" data-testid={`text-id-${index}`}>{txn.id}</TableCell>
                    <TableCell className="text-xs" data-testid={`text-date-${index}`}>{txn.date}</TableCell>
                    <TableCell data-testid={`text-user-${index}`}>{txn.user}</TableCell>
                    <TableCell data-testid={`text-service-${index}`}>{txn.service}</TableCell>
                    <TableCell className="font-semibold" data-testid={`text-amount-${index}`}>{txn.amount}</TableCell>
                    <TableCell data-testid={`text-reason-${index}`}>
                      <span className="text-xs text-red-500">{txn.reason}</span>
                    </TableCell>
                    <TableCell data-testid={`button-action-${index}`}>
                      <Button size="sm" variant="outline" className="text-xs">
                        {txn.action}
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
