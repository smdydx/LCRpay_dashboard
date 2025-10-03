import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Receipt } from "lucide-react";
import { useState } from "react";

type StatusFilter = "All" | "Success" | "Pending" | "Failed";

interface BBPSService {
  id: string;
  serviceName: string;
  category: string;
  provider: string;
  amount: number;
  status: "Success" | "Pending" | "Failed";
  transactionDate: string;
}

interface BBPSTableProps {
  services: BBPSService[];
}

export function BBPSTable({ services }: BBPSTableProps) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filterStatus, setFilterStatus] = useState<StatusFilter>("All");

  const filteredServices = services.filter(service =>
    filterStatus === "All" ? true : service.status === filterStatus
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    return sortOrder === "asc"
      ? a.amount - b.amount
      : b.amount - a.amount;
  });

  return (
    <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Receipt className="h-5 w-5 text-green-500" />
              Recent BBPS Transactions
            </CardTitle>
            <CardDescription>Bill payments and utility services</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterStatus === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("All")}
              className="hover-elevate"
            >
              All
            </Button>
            <Button
              variant={filterStatus === "Success" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("Success")}
              className="hover-elevate"
            >
              Success
            </Button>
            <Button
              variant={filterStatus === "Pending" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("Pending")}
              className="hover-elevate"
            >
              Pending
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Status</TableHead>
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
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedServices.map((service) => (
                <TableRow key={service.id} className="hover:bg-accent/50 transition-colors">
                  <TableCell>
                    <div>
                      <p className="font-medium">{service.serviceName}</p>
                      <p className="text-sm text-muted-foreground">{service.category}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{service.provider}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        service.status === "Success"
                          ? "default"
                          : service.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                      className="font-semibold"
                    >
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-lg">
                    ₹{service.amount.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}