import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, CheckCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const providers = [
  { name: "BSES Rajdhani", category: "Electricity", services: 1, transactions: 2450, status: "Active" },
  { name: "Tata Power", category: "Electricity", services: 1, transactions: 1890, status: "Active" },
  { name: "Delhi Jal Board", category: "Water", services: 1, transactions: 1650, status: "Active" },
  { name: "Indraprastha Gas", category: "Gas", services: 1, transactions: 1480, status: "Active" },
  { name: "Airtel", category: "Telecom", services: 3, transactions: 4200, status: "Active" },
  { name: "Jio", category: "Telecom", services: 3, transactions: 3950, status: "Active" },
  { name: "Vodafone Idea", category: "Telecom", services: 3, transactions: 3100, status: "Active" },
  { name: "HDFC Life", category: "Insurance", services: 2, transactions: 890, status: "Active" },
];

export default function ProviderManagement() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Provider Management
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Manage BBPS service providers</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Active Providers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Provider Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Services</TableHead>
                  <TableHead>Monthly Transactions</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {providers.map((row, index) => (
                  <TableRow key={index} data-testid={`row-provider-${index}`}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>{row.category}</TableCell>
                    <TableCell>{row.services}</TableCell>
                    <TableCell>{row.transactions.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="default" className="bg-green-500/10 text-green-500">
                        {row.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">Manage</Button>
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
