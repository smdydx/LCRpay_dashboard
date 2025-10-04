import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, DollarSign, CheckCircle, Clock } from "lucide-react";
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

const refunds = [
  { id: "REF890125", txnId: "TXN890243", date: "2024-10-04", user: "Amit Patel", service: "DTH Recharge", amount: "₹599", status: "Processing", eta: "1-2 days" },
  { id: "REF890124", txnId: "TXN890215", date: "2024-10-04", user: "Sanjay Kumar", service: "Mobile Recharge", amount: "₹299", status: "Completed", eta: "-" },
  { id: "REF890123", txnId: "TXN890198", date: "2024-10-03", user: "Meera Shah", service: "Electricity Bill", amount: "₹3,200", status: "Pending", eta: "3-5 days" },
  { id: "REF890122", txnId: "TXN890187", date: "2024-10-03", user: "Karan Malhotra", service: "Water Bill", amount: "₹1,100", status: "Completed", eta: "-" },
  { id: "REF890121", txnId: "TXN890165", date: "2024-10-02", user: "Pooja Desai", service: "Gas Bill", amount: "₹850", status: "Processing", eta: "2-3 days" },
  { id: "REF890120", txnId: "TXN890142", date: "2024-10-02", user: "Arjun Reddy", service: "Broadband Bill", amount: "₹1,499", status: "Completed", eta: "-" },
];

export default function Refunds() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Refund Management
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Track and manage transaction refunds</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-blue-500" data-testid="card-stat-total-refunds">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Refunds</CardTitle>
            <RefreshCw className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-total">248</div>
            <p className="text-xs text-muted-foreground">All time refunds</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-yellow-500" data-testid="card-stat-pending">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-pending">8</div>
            <p className="text-xs text-muted-foreground">Awaiting processing</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-green-500" data-testid="card-stat-completed">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-completed">240</div>
            <p className="text-xs text-muted-foreground">Successfully processed</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500" data-testid="card-stat-amount">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Refund Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-amount">₹8.9L</div>
            <p className="text-xs text-muted-foreground">Total refunded</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-refunds-table">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="h-5 w-5 text-blue-500" />
            Refund Records
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Refund ID</TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>ETA</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {refunds.map((refund, index) => (
                  <TableRow key={refund.id} data-testid={`row-refund-${index}`}>
                    <TableCell className="font-mono text-xs" data-testid={`text-refund-id-${index}`}>{refund.id}</TableCell>
                    <TableCell className="font-mono text-xs" data-testid={`text-txn-id-${index}`}>{refund.txnId}</TableCell>
                    <TableCell data-testid={`text-date-${index}`}>{refund.date}</TableCell>
                    <TableCell data-testid={`text-user-${index}`}>{refund.user}</TableCell>
                    <TableCell data-testid={`text-service-${index}`}>{refund.service}</TableCell>
                    <TableCell className="font-semibold" data-testid={`text-amount-${index}`}>{refund.amount}</TableCell>
                    <TableCell data-testid={`badge-status-${index}`}>
                      <Badge 
                        variant="default" 
                        className={
                          refund.status === "Completed" ? "bg-green-500/10 text-green-500" :
                          refund.status === "Processing" ? "bg-blue-500/10 text-blue-500" :
                          "bg-yellow-500/10 text-yellow-500"
                        }
                      >
                        {refund.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground" data-testid={`text-eta-${index}`}>{refund.eta}</TableCell>
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
