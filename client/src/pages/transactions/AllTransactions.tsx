import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, DollarSign, CheckCircle, XCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const transactions = [
  { id: "TXN890245", date: "2024-10-04", user: "Rahul Kumar", service: "Mobile Recharge", amount: "₹299", status: "Success" },
  { id: "TXN890244", date: "2024-10-04", user: "Priya Sharma", service: "Electricity Bill", amount: "₹2,450", status: "Success" },
  { id: "TXN890243", date: "2024-10-04", user: "Amit Patel", service: "DTH Recharge", amount: "₹599", status: "Failed" },
  { id: "TXN890242", date: "2024-10-03", user: "Sneha Reddy", service: "Water Bill", amount: "₹850", status: "Success" },
  { id: "TXN890241", date: "2024-10-03", user: "Vikram Singh", service: "Gas Bill", amount: "₹1,200", status: "Success" },
  { id: "TXN890240", date: "2024-10-03", user: "Anjali Gupta", service: "Broadband Bill", amount: "₹999", status: "Pending" },
  { id: "TXN890239", date: "2024-10-03", user: "Ravi Verma", service: "Mobile Recharge", amount: "₹199", status: "Success" },
  { id: "TXN890238", date: "2024-10-02", user: "Deepa Nair", service: "Insurance Premium", amount: "₹5,500", status: "Success" },
];

export default function AllTransactions() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          All Transactions
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Complete transaction history and records</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-blue-500" data-testid="card-stat-total">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-total">28,456</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-green-500" data-testid="card-stat-success">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Successful</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-success">27,892</div>
            <p className="text-xs text-muted-foreground">98.0% success rate</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-red-500" data-testid="card-stat-failed">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Failed</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-failed">564</div>
            <p className="text-xs text-muted-foreground">2.0% failure rate</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500" data-testid="card-stat-volume">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-volume">₹156.7L</div>
            <p className="text-xs text-muted-foreground">Transaction value</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-filters">
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <Input placeholder="Search by ID, user, or service..." className="max-w-sm" data-testid="input-search" />
            <Button variant="outline" data-testid="button-filter">Filter</Button>
            <Button variant="outline" data-testid="button-export">Export</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="hover-elevate" data-testid="card-transactions-table">
        <CardHeader>
          <CardTitle>Transaction Records</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn, index) => (
                  <TableRow key={txn.id} data-testid={`row-transaction-${index}`}>
                    <TableCell className="font-mono text-xs" data-testid={`text-id-${index}`}>{txn.id}</TableCell>
                    <TableCell data-testid={`text-date-${index}`}>{txn.date}</TableCell>
                    <TableCell data-testid={`text-user-${index}`}>{txn.user}</TableCell>
                    <TableCell data-testid={`text-service-${index}`}>{txn.service}</TableCell>
                    <TableCell className="font-semibold" data-testid={`text-amount-${index}`}>{txn.amount}</TableCell>
                    <TableCell data-testid={`badge-status-${index}`}>
                      <Badge 
                        variant="default" 
                        className={
                          txn.status === "Success" ? "bg-green-500/10 text-green-500" :
                          txn.status === "Failed" ? "bg-red-500/10 text-red-500" :
                          "bg-yellow-500/10 text-yellow-500"
                        }
                      >
                        {txn.status}
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
