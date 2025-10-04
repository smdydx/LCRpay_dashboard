import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const wallets = [
  { user: "Rahul Kumar", balance: "₹12,450", lastTxn: "2024-10-04", status: "Active" },
  { user: "Priya Sharma", balance: "₹8,900", lastTxn: "2024-10-04", status: "Active" },
  { user: "Amit Patel", balance: "₹25,670", lastTxn: "2024-10-03", status: "Active" },
];

export default function WalletBalances() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Wallet Balances
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Monitor user wallet balances</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>User Wallets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Last Transaction</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wallets.map((row, index) => (
                  <TableRow key={index} data-testid={`row-wallet-${index}`}>
                    <TableCell className="font-medium">{row.user}</TableCell>
                    <TableCell className="font-semibold">{row.balance}</TableCell>
                    <TableCell>{row.lastTxn}</TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-500/10 text-green-500">{row.status}</Badge>
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
