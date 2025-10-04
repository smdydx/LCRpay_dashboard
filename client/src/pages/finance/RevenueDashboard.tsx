import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingUp, Activity } from "lucide-react";

export default function RevenueDashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Revenue Dashboard
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Comprehensive revenue analytics and insights</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹156.7L</div>
            <p className="text-xs text-muted-foreground">All time revenue</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹13.4L</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+11.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today's Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹4.2L</div>
            <p className="text-xs text-muted-foreground">Active earnings</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Daily Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹4.5L</div>
            <p className="text-xs text-muted-foreground">Last 30 days avg</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
