import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, TrendingUp, UserPlus, UserMinus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const growthData = [
  { month: "January 2024", newUsers: 1250, totalUsers: 15420, growth: "+8.8%", status: "Up" },
  { month: "February 2024", newUsers: 1580, totalUsers: 17000, growth: "+10.2%", status: "Up" },
  { month: "March 2024", newUsers: 1820, totalUsers: 18820, growth: "+10.7%", status: "Up" },
  { month: "April 2024", newUsers: 1450, totalUsers: 20270, growth: "+7.7%", status: "Up" },
  { month: "May 2024", newUsers: 1690, totalUsers: 21960, growth: "+8.3%", status: "Up" },
  { month: "June 2024", newUsers: 2100, totalUsers: 24060, growth: "+9.6%", status: "Up" },
  { month: "July 2024", newUsers: 2350, totalUsers: 26410, growth: "+9.8%", status: "Up" },
  { month: "August 2024", newUsers: 1980, totalUsers: 28390, growth: "+7.5%", status: "Up" },
  { month: "September 2024", newUsers: 2200, totalUsers: 30590, growth: "+7.8%", status: "Up" },
];

export default function UserGrowth() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          User Growth Analytics
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Track and analyze user acquisition and growth trends</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover-elevate border-l-4 border-l-blue-500" data-testid="card-stat-total-users">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-total-users">30,590</div>
            <p className="text-xs text-muted-foreground">Active platform users</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-green-500" data-testid="card-stat-new-users">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Users (Sep)</CardTitle>
            <UserPlus className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-new-users">2,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+7.8%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500" data-testid="card-stat-growth-rate">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-growth-rate">8.9%</div>
            <p className="text-xs text-muted-foreground">Monthly average</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-orange-500" data-testid="card-stat-retention">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">User Retention</CardTitle>
            <UserMinus className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold" data-testid="text-retention">94.2%</div>
            <p className="text-xs text-muted-foreground">Active retention rate</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate" data-testid="card-growth-table">
        <CardHeader>
          <CardTitle>Monthly User Growth</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>New Users</TableHead>
                  <TableHead>Total Users</TableHead>
                  <TableHead>Growth Rate</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {growthData.map((row, index) => (
                  <TableRow key={index} data-testid={`row-growth-${index}`}>
                    <TableCell className="font-medium" data-testid={`text-month-${index}`}>{row.month}</TableCell>
                    <TableCell data-testid={`text-new-users-${index}`}>{row.newUsers.toLocaleString()}</TableCell>
                    <TableCell data-testid={`text-total-users-${index}`}>{row.totalUsers.toLocaleString()}</TableCell>
                    <TableCell data-testid={`text-growth-${index}`}>
                      <span className="text-green-500 font-semibold">{row.growth}</span>
                    </TableCell>
                    <TableCell data-testid={`badge-status-${index}`}>
                      <Badge variant="default" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
                        {row.status}
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
