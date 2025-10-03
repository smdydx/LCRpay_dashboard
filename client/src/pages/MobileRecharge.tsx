
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone, Users, CreditCard, TrendingUp, DollarSign, Zap, Clock, CheckCircle, XCircle } from "lucide-react";
import { StatCard } from "@/components/StatCard";

export default function MobileRecharge() {
  return (
    <div className="p-6 space-y-6 animate-fade-in">
      <div className="mb-8">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-slide-in-up">Mobile Recharge</h2>
        <p className="text-muted-foreground mt-2 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
          Quick and easy mobile recharge for all operators with detailed analytics
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

      {/* Recent Transactions */}
      <div className="max-w-4xl">
        <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Recent Transactions</CardTitle>
            <CardDescription>Latest mobile recharge transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { number: "+91 98765 43210", operator: "Airtel", amount: "₹299", status: "Success", time: "2 mins ago" },
                { number: "+91 98765 43211", operator: "Jio", amount: "₹199", status: "Success", time: "15 mins ago" },
                { number: "+91 98765 43212", operator: "Vi", amount: "₹499", status: "Success", time: "1 hour ago" },
                { number: "+91 98765 43213", operator: "BSNL", amount: "₹399", status: "Pending", time: "2 hours ago" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-accent/50 transition-all duration-300 hover-elevate">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{transaction.number}</p>
                      <p className="text-sm text-muted-foreground">{transaction.operator}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{transaction.amount}</p>
                    <div className="flex items-center gap-2 justify-end">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        transaction.status === "Success" 
                          ? "bg-green-500/20 text-green-500" 
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}>
                        {transaction.status}
                      </span>
                      <p className="text-xs text-muted-foreground">{transaction.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
