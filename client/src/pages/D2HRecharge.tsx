
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tv, Users, DollarSign, TrendingUp, CheckCircle, XCircle, Clock, ArrowUpDown, User, Calendar, CreditCard } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { useState } from "react";

// Sample D2H transaction data
const d2hTransactions = [
  {
    id: "DTH001",
    userName: "Rajesh Kumar",
    userType: "Prime" as const,
    subscriberId: "1234567890",
    operator: "Tata Sky",
    plan: "HD Premium Pack",
    amount: 450,
    status: "Success" as const,
    date: "2024-01-15 11:30 AM",
    transactionId: "TATA2024011512345"
  },
  {
    id: "DTH002",
    userName: "Priya Sharma",
    userType: "Normal" as const,
    subscriberId: "0987654321",
    operator: "Airtel Digital TV",
    plan: "Basic SD Pack",
    amount: 250,
    status: "Success" as const,
    date: "2024-01-15 10:15 AM",
    transactionId: "ADTV2024011509876"
  },
  {
    id: "DTH003",
    userName: "Amit Patel",
    userType: "Prime" as const,
    subscriberId: "5432167890",
    operator: "Dish TV",
    plan: "Family Entertainment",
    amount: 350,
    status: "Success" as const,
    date: "2024-01-15 09:45 AM",
    transactionId: "DISH2024011554321"
  },
  {
    id: "DTH004",
    userName: "Sneha Reddy",
    userType: "Normal" as const,
    subscriberId: "6789054321",
    operator: "Sun Direct",
    plan: "Tamil HD Pack",
    amount: 300,
    status: "Pending" as const,
    date: "2024-01-15 09:00 AM",
    transactionId: "SUN2024011598765"
  },
  {
    id: "DTH005",
    userName: "Vikram Singh",
    userType: "Prime" as const,
    subscriberId: "1357924680",
    operator: "Tata Sky",
    plan: "Sports Premium",
    amount: 650,
    status: "Success" as const,
    date: "2024-01-14 08:20 PM",
    transactionId: "TATA2024011465432"
  },
  {
    id: "DTH006",
    userName: "Ananya Desai",
    userType: "Normal" as const,
    subscriberId: "2468013579",
    operator: "Airtel Digital TV",
    plan: "Regional Pack",
    amount: 200,
    status: "Failed" as const,
    date: "2024-01-14 07:30 PM",
    transactionId: "ADTV2024011487654"
  }
];

type StatusFilter = "All" | "Success" | "Pending" | "Failed";

export default function D2HRecharge() {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredTransactions = d2hTransactions.filter(txn =>
    statusFilter === "All" ? true : txn.status === statusFilter
  );

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
  });

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-slide-in-up">D2H Recharge</h2>
        <p className="text-muted-foreground mt-2 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          Recharge your DTH connection instantly with detailed transaction tracking
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <StatCard
          title="Total D2H Recharges"
          value="8,234"
          icon={Tv}
          trend={{ value: 10.2, isPositive: true }}
          gradient="from-purple-500 to-pink-500"
        />
        <StatCard
          title="Prime Subscribers"
          value="2,145"
          icon={Users}
          trend={{ value: 6.5, isPositive: true }}
          gradient="from-blue-500 to-cyan-500"
        />
        <StatCard
          title="Total Revenue"
          value="₹32,45,678"
          icon={DollarSign}
          trend={{ value: 12.8, isPositive: true }}
          gradient="from-green-500 to-emerald-500"
        />
        <StatCard
          title="Success Rate"
          value="97.5%"
          icon={CheckCircle}
          trend={{ value: 1.8, isPositive: true }}
          gradient="from-emerald-500 to-teal-500"
        />
        <StatCard
          title="Failed Recharges"
          value="89"
          icon={XCircle}
          trend={{ value: 3.2, isPositive: false }}
          gradient="from-red-500 to-rose-500"
        />
        <StatCard
          title="Avg. Recharge"
          value="₹394"
          icon={TrendingUp}
          trend={{ value: 5.1, isPositive: true }}
          gradient="from-orange-500 to-amber-500"
        />
      </div>

      {/* D2H Recharge Form */}
      <div className="max-w-2xl">
        <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Tv className="h-6 w-6 text-purple-500" />
              DTH Recharge
            </CardTitle>
            <CardDescription className="text-base">Enter subscriber ID and select your DTH provider</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="subscriber-id" className="text-base font-medium">Subscriber ID</Label>
              <Input 
                id="subscriber-id" 
                placeholder="Enter subscriber ID" 
                data-testid="input-subscriber-id" 
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dth-operator" className="text-base font-medium">DTH Operator</Label>
              <Select>
                <SelectTrigger id="dth-operator" data-testid="select-dth-operator" className="h-12 text-base">
                  <SelectValue placeholder="Select DTH operator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tatasky">Tata Sky</SelectItem>
                  <SelectItem value="airtel">Airtel Digital TV</SelectItem>
                  <SelectItem value="dish">Dish TV</SelectItem>
                  <SelectItem value="sundirect">Sun Direct</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="d2h-amount" className="text-base font-medium">Amount</Label>
              <Input 
                id="d2h-amount" 
                type="number" 
                placeholder="Enter amount" 
                data-testid="input-d2h-amount" 
                className="h-12 text-base"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="h-12 hover-elevate">₹250</Button>
              <Button variant="outline" className="h-12 hover-elevate">₹350</Button>
              <Button variant="outline" className="h-12 hover-elevate">₹500</Button>
            </div>
            <Button 
              onClick={() => console.log('D2H Recharge initiated')} 
              className="w-full h-12 text-base font-semibold hover-elevate bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" 
              data-testid="button-d2h-recharge"
            >
              Proceed to Recharge
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Detailed D2H Transaction Table */}
      <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CreditCard className="h-6 w-6 text-purple-500" />
                All D2H Transactions
              </CardTitle>
              <CardDescription className="text-base">Complete DTH recharge history with subscriber details</CardDescription>
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
                  <TableHead>Subscriber ID & Operator</TableHead>
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
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
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
                        <p className="font-medium">{txn.subscriberId}</p>
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
