import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, Activity } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

const categoryData = [
  { category: "Utility Bills", transactions: 12450, revenue: "₹45,67,800", share: 42, growth: "+12.5%" },
  { category: "Telecom Services", transactions: 11250, revenue: "₹18,90,500", share: 35, growth: "+8.3%" },
  { category: "Insurance", transactions: 3450, revenue: "₹28,45,000", share: 15, growth: "+15.2%" },
  { category: "Loan Repayment", transactions: 2100, revenue: "₹42,30,000", share: 8, growth: "+9.7%" },
];

export default function BBPSAnalytics() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          BBPS Service Analytics
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Performance analytics for BBPS services</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="hover-elevate border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total BBPS Transactions</CardTitle>
            <Activity className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">29,250</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">BBPS Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1.35Cr</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">+11.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Growth Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">11.4%</div>
            <p className="text-xs text-muted-foreground">Month over month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Category-wise Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Transactions</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Market Share</TableHead>
                  <TableHead>Growth</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categoryData.map((row, index) => (
                  <TableRow key={index} data-testid={`row-category-${index}`}>
                    <TableCell className="font-medium">{row.category}</TableCell>
                    <TableCell>{row.transactions.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold">{row.revenue}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={row.share} className="h-2 w-20" />
                        <span className="text-sm">{row.share}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-green-500 font-semibold">{row.growth}</TableCell>
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
