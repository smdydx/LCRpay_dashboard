import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown, CreditCard } from "lucide-react";
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
  const [filter, setFilter] = useState<StatusFilter>("All");
  const [sortField, setSortField] = useState<keyof BBPSService | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof BBPSService) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredServices = services.filter(service => {
    if (filter === "All") return true;
    return service.status === filter;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];
    const order = sortOrder === "asc" ? 1 : -1;
    return aValue > bValue ? order : -order;
  });

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Success": return "default";
      case "Pending": return "secondary";
      case "Failed": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-4 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <CreditCard className="h-5 w-5 text-purple-500" />
          BBPS Transactions
        </h3>
        <Badge variant="secondary" className="text-xs">
          {filteredServices.length} {filteredServices.length === 1 ? "Transaction" : "Transactions"}
        </Badge>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        {(["All", "Success", "Pending", "Failed"] as StatusFilter[]).map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(type)}
            data-testid={`button-filter-${type.toLowerCase()}`}
            className="hover-elevate transition-all duration-300"
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="rounded-xl border border-border/50 overflow-hidden shadow-xl bg-card/50 backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-card hover:bg-card">
              <TableHead className="font-medium">
                <Button variant="ghost" size="sm" onClick={() => handleSort("serviceName")} data-testid="button-sort-service" className="hover-elevate -ml-3">
                  Service <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-medium">Category</TableHead>
              <TableHead className="font-medium">Provider</TableHead>
              <TableHead className="font-medium">
                <Button variant="ghost" size="sm" onClick={() => handleSort("amount")} data-testid="button-sort-amount" className="hover-elevate -ml-3">
                  Amount <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">
                <Button variant="ghost" size="sm" onClick={() => handleSort("transactionDate")} data-testid="button-sort-date" className="hover-elevate -ml-3">
                  Date <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedServices.map((service) => (
              <TableRow key={service.id} className="hover-elevate" data-testid={`row-service-${service.id}`}>
                <TableCell className="font-medium" data-testid={`text-service-${service.id}`}>{service.serviceName}</TableCell>
                <TableCell className="text-muted-foreground">{service.category}</TableCell>
                <TableCell className="text-muted-foreground">{service.provider}</TableCell>
                <TableCell className="font-mono" data-testid={`text-amount-${service.id}`}>₹{service.amount.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(service.status)} className={service.status === "Success" ? "bg-chart-2 hover:bg-chart-2" : ""} data-testid={`badge-status-${service.id}`}>
                    {service.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground" data-testid={`text-date-${service.id}`}>{service.transactionDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
