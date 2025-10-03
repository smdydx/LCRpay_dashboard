
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Users, CreditCard, TrendingUp, DollarSign, Zap, Clock, CheckCircle, XCircle, ArrowUpDown, User, Phone, Calendar } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { useState } from "react";

// Sample transaction data with complete details
const transactions = [
  {
    id: "TXN001",
    userName: "Rajesh Kumar",
    userType: "Prime" as const,
    mobile: "+91 98765 43210",
    operator: "Airtel",
    plan: "₹299 - Unlimited",
    amount: 299,
    status: "Success" as const,
    date: "2024-01-15 10:30 AM",
    transactionId: "AIR2024011512345"
  },
  {
    id: "TXN002",
    userName: "Priya Sharma",
    userType: "Normal" as const,
    mobile: "+91 98765 43211",
    operator: "Jio",
    plan: "₹199 - 1.5GB/day",
    amount: 199,
    status: "Success" as const,
    date: "2024-01-15 09:45 AM",
    transactionId: "JIO2024011509876"
  },
  {
    id: "TXN003",
    userName: "Amit Patel",
    userType: "Prime" as const,
    mobile: "+91 98765 43212",
    operator: "Vi",
    plan: "₹499 - Unlimited",
    amount: 499,
    status: "Success" as const,
    date: "2024-01-15 09:15 AM",
    transactionId: "VI2024011554321"
  },
  {
    id: "TXN004",
    userName: "Sneha Reddy",
    userType: "Normal" as const,
    mobile: "+91 98765 43213",
    operator: "BSNL",
    plan: "₹399 - 2GB/day",
    amount: 399,
    status: "Pending" as const,
    date: "2024-01-15 08:30 AM",
    transactionId: "BSN2024011598765"
  },
  {
    id: "TXN005",
    userName: "Vikram Singh",
    userType: "Prime" as const,
    mobile: "+91 98765 43214",
    operator: "Airtel",
    plan: "₹599 - Unlimited Pro",
    amount: 599,
    status: "Success" as const,
    date: "2024-01-15 08:00 AM",
    transactionId: "AIR2024011565432"
  },
  {
    id: "TXN006",
    userName: "Ananya Desai",
    userType: "Normal" as const,
    mobile: "+91 98765 43215",
    operator: "Jio",
    plan: "₹155 - Basic",
    amount: 155,
    status: "Failed" as const,
    date: "2024-01-14 06:20 PM",
    transactionId: "JIO2024011487654"
  },
  {
    id: "TXN007",
    userName: "Karthik Iyer",
    userType: "Prime" as const,
    mobile: "+91 98765 43216",
    operator: "Vi",
    plan: "₹666 - Premium",
    amount: 666,
    status: "Success" as const,
    date: "2024-01-14 05:45 PM",
    transactionId: "VI2024011476543"
  },
  {
    id: "TXN008",
    userName: "Neha Gupta",
    userType: "Normal" as const,
    mobile: "+91 98765 43217",
    operator: "BSNL",
    plan: "₹249 - Standard",
    amount: 249,
    status: "Success" as const,
    date: "2024-01-14 04:30 PM",
    transactionId: "BSN2024011465432"
  }
];

type StatusFilter = "All" | "Success" | "Pending" | "Failed";

export default function MobileRecharge() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredTransactions = transactions.filter(txn =>
    statusFilter === "All" ? true : txn.status === statusFilter
  );

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
  });

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-slide-in-up">Mobile Recharge</h2>
        <p className="text-muted-foreground mt-2 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          Quick and easy mobile recharge for all operators with detailed transaction history
        </p>
      </div>

      {/* Statistics Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Recharges"
          value="15,847"
          icon={Smartphone}
          trend={{ value: 12.5, isPositive: true }}
          gradient="from-blue-500 to-cyan-500"
        />
        <StatCard
          title="Prime Users"
          value="3,421"
          icon={Users}
          trend={{ value: 8.2, isPositive: true }}
          gradient="from-purple-500 to-pink-500"
        />
        <StatCard
          title="Total Revenue"
          value="₹89,45,231"
          icon={DollarSign}
          trend={{ value: 15.3, isPositive: true }}
          gradient="from-green-500 to-emerald-500"
        />
        <StatCard
          title="Success Rate"
          value="98.7%"
          icon={CheckCircle}
          trend={{ value: 2.1, isPositive: true }}
          gradient="from-emerald-500 to-teal-500"
        />
        <StatCard
          title="Failed Transactions"
          value="203"
          icon={XCircle}
          trend={{ value: 5.4, isPositive: false }}
          gradient="from-red-500 to-rose-500"
        />
        <StatCard
          title="Avg. Recharge"
          value="₹564"
          icon={TrendingUp}
          trend={{ value: 3.8, isPositive: true }}
          gradient="from-orange-500 to-amber-500"
        />
        <StatCard
          title="Today's Recharges"
          value="1,234"
          icon={Zap}
          trend={{ value: 18.7, isPositive: true }}
          gradient="from-yellow-500 to-orange-500"
        />
        <StatCard
          title="Pending Recharges"
          value="45"
          icon={Clock}
          trend={{ value: 2.3, isPositive: false }}
          gradient="from-indigo-500 to-blue-500"
        />
        <StatCard
          title="Active Plans"
          value="234"
          icon={CreditCard}
          trend={{ value: 6.9, isPositive: true }}
          gradient="from-pink-500 to-purple-500"
        />
      </div>

      {/* Recharge Form */}
      <div className="max-w-2xl">
        <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Smartphone className="h-6 w-6 text-blue-500" />
              Recharge Your Mobile
            </CardTitle>
            <CardDescription className="text-base">Enter mobile number and select your operator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="mobile-number" className="text-base font-medium">Mobile Number</Label>
              <Input 
                id="mobile-number" 
                placeholder="Enter 10-digit mobile number" 
                data-testid="input-mobile-number"
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="operator" className="text-base font-medium">Operator</Label>
              <Select>
                <SelectTrigger id="operator" data-testid="select-operator" className="h-12 text-base">
                  <SelectValue placeholder="Select operator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="airtel">Airtel</SelectItem>
                  <SelectItem value="jio">Jio</SelectItem>
                  <SelectItem value="vi">Vi (Vodafone Idea)</SelectItem>
                  <SelectItem value="bsnl">BSNL</SelectItem>
                  <SelectItem value="mtnl">MTNL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-base font-medium">Amount</Label>
              <Input 
                id="amount" 
                type="number" 
                placeholder="Enter amount" 
                data-testid="input-amount"
                className="h-12 text-base"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="h-12 hover-elevate" onClick={() => console.log('Quick recharge: ₹199')}>
                ₹199
              </Button>
              <Button variant="outline" className="h-12 hover-elevate" onClick={() => console.log('Quick recharge: ₹299')}>
                ₹299
              </Button>
              <Button variant="outline" className="h-12 hover-elevate" onClick={() => console.log('Quick recharge: ₹499')}>
                ₹499
              </Button>
            </div>
            <Button 
              onClick={() => console.log('Recharge initiated')} 
              className="w-full h-12 text-base font-semibold hover-elevate bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600" 
              data-testid="button-recharge"
            >
              Proceed to Recharge
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Transaction Table */}
      <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Phone className="h-6 w-6 text-blue-500" />
                All Recharge Transactions
              </CardTitle>
              <CardDescription className="text-base">Complete transaction history with user details</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button
                variant={statusFilter === "All" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("All")}
                className="hover-elevate"
              >
                All
              </Button>
              <Button
                variant={statusFilter === "Success" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("Success")}
                className="hover-elevate"
              >
                Success
              </Button>
              <Button
                variant={statusFilter === "Pending" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("Pending")}
                className="hover-elevate"
              >
                Pending
              </Button>
              <Button
                variant={statusFilter === "Failed" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("Failed")}
                className="hover-elevate"
              >
                Failed
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User Details</TableHead>
                  <TableHead>Mobile & Operator</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                      className="hover:bg-transparent"
                    >
                      Amount
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Transaction ID</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTransactions.map((txn) => (
                  <TableRow key={txn.id} className="hover:bg-accent/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <User className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold">{txn.userName}</p>
                          <Badge variant={txn.userType === "Prime" ? "default" : "secondary"} className="text-xs">
                            {txn.userType}
                          </Badge>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{txn.mobile}</p>
                        <p className="text-sm text-muted-foreground">{txn.operator}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{txn.plan}</TableCell>
                    <TableCell className="font-bold text-lg">₹{txn.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          txn.status === "Success"
                            ? "default"
                            : txn.status === "Pending"
                            ? "secondary"
                            : "destructive"
                        }
                        className="font-semibold"
                      >
                        {txn.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{txn.date}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs">{txn.transactionId}</TableCell>
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
