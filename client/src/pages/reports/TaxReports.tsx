import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const taxData = [
  { period: "Q3 2024 (Jul-Sep)", revenue: "₹3,74,34,260", gst: "₹67,38,167", tds: "₹3,74,343", netAmount: "₹3,03,21,750" },
  { period: "Q2 2024 (Apr-Jun)", revenue: "₹3,45,67,890", gst: "₹62,22,220", tds: "₹3,45,679", netAmount: "₹2,79,99,991" },
  { period: "Q1 2024 (Jan-Mar)", revenue: "₹3,21,45,670", gst: "₹57,86,221", tds: "₹3,21,457", netAmount: "₹2,60,37,992" },
];

export default function TaxReports() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Tax Reports
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">GST and TDS reports for compliance</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Quarterly Tax Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Period</TableHead>
                  <TableHead>Total Revenue</TableHead>
                  <TableHead>GST (18%)</TableHead>
                  <TableHead>TDS (1%)</TableHead>
                  <TableHead>Net Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {taxData.map((row, index) => (
                  <TableRow key={index} data-testid={`row-tax-${index}`}>
                    <TableCell className="font-medium">{row.period}</TableCell>
                    <TableCell className="font-semibold">{row.revenue}</TableCell>
                    <TableCell>{row.gst}</TableCell>
                    <TableCell>{row.tds}</TableCell>
                    <TableCell className="text-green-500 font-semibold">{row.netAmount}</TableCell>
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
