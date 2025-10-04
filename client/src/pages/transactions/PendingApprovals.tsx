import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, AlertCircle, CheckCircle, XCircle } from "lucide-react";
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

const pendingTransactions = [
  { id: "TXN890265", date: "2024-10-04 15:45", user: "Rajesh Kumar", service: "Loan Repayment", amount: "₹25,000", priority: "High", waitTime: "45 mins" },
  { id: "TXN890264", date: "2024-10-04 15:20", user: "Kavita Sharma", service: "Insurance Premium", amount: "₹18,500", priority: "High", waitTime: "1h 10m" },
  { id: "TXN890263", date: "2024-10-04 14:50", user: "Manish Patel", service: "Money Transfer", amount: "₹50,000", priority: "Critical", waitTime: "1h 40m" },
  { id: "TXN890262", date: "2024-10-04 14:15", user: "Sunita Gupta", service: "Credit Card Payment", amount: "₹15,200", priority: "Medium", waitTime: "2h 15m" },
  { id: "TXN890261", date: "2024-10-04 13:30", user: "Arun Verma", service: "Loan Repayment", amount: "₹35,000", priority: "High", waitTime: "3h" },
  { id: "TXN890260", date: "2024-10-04 12:45", user: "Neha Singh", service: "Money Transfer", amount: "₹75,000", priority: "Critical", waitTime: "3h 45m" },
];

export default function PendingApprovals() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Pending Approvals
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Review and approve high-value transactions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-yellow-500" data-testid="card-stat-pending">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-pending">18</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-red-500" data-testid="card-stat-critical">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Critical Priority</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-critical">5</div>
            <p className="text-xs text-muted-foreground">Urgent attention</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-green-500" data-testid="card-stat-approved-today">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-approved">42</div>
            <p className="text-xs text-muted-foreground">Successfully approved</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-blue-500" data-testid="card-stat-total-value">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending Value</CardTitle>
            <AlertCircle className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-value">₹4.5L</div>
            <p className="text-xs text-muted-foreground">Total pending amount</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-pending-table">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            Transactions Awaiting Approval
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
                  <TableHead>Priority</TableHead>
                  <TableHead>Wait Time</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingTransactions.map((txn, index) => (
                  <TableRow key={txn.id} data-testid={`row-transaction-${index}`}>
                    <TableCell className="font-mono text-xs" data-testid={`text-id-${index}`}>{txn.id}</TableCell>
                    <TableCell className="text-xs" data-testid={`text-date-${index}`}>{txn.date}</TableCell>
                    <TableCell data-testid={`text-user-${index}`}>{txn.user}</TableCell>
                    <TableCell data-testid={`text-service-${index}`}>{txn.service}</TableCell>
                    <TableCell className="font-semibold" data-testid={`text-amount-${index}`}>{txn.amount}</TableCell>
                    <TableCell data-testid={`badge-priority-${index}`}>
                      <Badge 
                        variant="default" 
                        className={
                          txn.priority === "Critical" ? "bg-red-500/10 text-red-500" :
                          txn.priority === "High" ? "bg-orange-500/10 text-orange-500" :
                          "bg-blue-500/10 text-blue-500"
                        }
                      >
                        {txn.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground" data-testid={`text-wait-${index}`}>{txn.waitTime}</TableCell>
                    <TableCell data-testid={`buttons-action-${index}`}>
                      <div className="flex gap-2">
                        <Button size="sm" variant="default" className="bg-green-500 hover:bg-green-600 text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">
                          <XCircle className="h-3 w-3 mr-1" />
                          Reject
                        </Button>
                      </div>
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
