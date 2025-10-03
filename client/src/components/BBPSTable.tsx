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

export function BBPSTable({ services = [] }: BBPSTableProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredServices = services.filter(service =>
    statusFilter === "All" ? true : service.status === statusFilter
  );

  const sortedServices = [...filteredServices].sort((a, b) => {
    return sortOrder === "asc"
      ? a.amount - b.amount
      : b.amount - a.amount;
  });

  return (
    <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 overflow-hidden group">
      <CardHeader className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-base md:text-lg group-hover:text-purple-600 transition-colors duration-300">
              <Receipt className="h-4 w-4 md:h-5 md:w-5 text-primary animate-bounce-subtle" />
              Recent BBPS Transactions
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Bill payments and utility services</CardDescription>
          </div>
          <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
            <Button
              variant={statusFilter === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("All")}
              className="hover-elevate transition-all duration-300"
              data-testid="button-filter-all"
            >
              All
            </Button>
            <Button
              variant={statusFilter === "Success" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("Success")}
              className="hover-elevate transition-all duration-300"
              data-testid="button-filter-success"
            >
              Success
            </Button>
            <Button
              variant={statusFilter === "Pending" ? "default" : "outline"}
              size="sm"
              onClick={() => setStatusFilter("Pending")}
              className="hover-elevate transition-all duration-300"
              data-testid="button-filter-pending"
            >
              Pending
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="rounded-lg border-none overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-accent/30 transition-colors duration-200">
                <TableHead className="font-bold">Service</TableHead>
                <TableHead className="font-bold">Provider</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    className="hover:bg-transparent p-0 h-auto font-bold transition-transform duration-200 hover:scale-105"
                    data-testid="button-sort-amount"
                  >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedServices.map((service, index) => (
                <TableRow 
                  key={service.id} 
                  className="hover:bg-accent/50 transition-all duration-300 hover:scale-[1.01]"
                  style={{ animation: `fade-in 0.4s ease-out ${index * 0.1}s both` }}
                  data-testid={`row-service-${service.id}`}
                >
                  <TableCell>
                    <div className="flex flex-col">
                      <p className="font-medium text-sm md:text-base">{service.serviceName}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{service.category}</p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium text-sm md:text-base">{service.provider}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        service.status === "Success"
                          ? "default"
                          : service.status === "Pending"
                          ? "secondary"
                          : "destructive"
                      }
                      className="font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-110"
                      data-testid={`badge-status-${service.id}`}
                    >
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell 
                    className="font-bold text-sm md:text-lg text-right" 
                    data-testid={`text-amount-${service.id}`}
                  >
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
