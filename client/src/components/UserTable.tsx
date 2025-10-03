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
import { ArrowUpDown, Users } from "lucide-react";
import { useState } from "react";

type UserType = "All" | "Prime" | "Normal";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType: "Prime" | "Normal";
  status: "Active" | "Inactive";
  downloadCount: number;
  rechargeAmount: number;
}

interface UserTableProps {
  users: User[];
}

export function UserTable({ users }: UserTableProps) {
  const [filter, setFilter] = useState<UserType>("All");
  const [sortField, setSortField] = useState<keyof User | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (field: keyof User) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredUsers = users.filter(user => {
    if (filter === "All") return true;
    return user.userType === filter;
  });

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = a[sortField];
    const bValue = b[sortField];
    const order = sortOrder === "asc" ? 1 : -1;
    return aValue > bValue ? order : -order;
  });

  return (
    <div className="space-y-4 animate-slide-in-right">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-500" />
          User Management
        </h3>
        <Badge variant="secondary" className="text-xs">
          {filteredUsers.length} {filteredUsers.length === 1 ? "User" : "Users"}
        </Badge>
      </div>
      
      <div className="flex gap-2">
        {(["All", "Prime", "Normal"] as UserType[]).map((type) => (
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
                <Button variant="ghost" size="sm" onClick={() => handleSort("name")} data-testid="button-sort-name" className="hover-elevate -ml-3">
                  Name <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-medium">Email</TableHead>
              <TableHead className="font-medium">Phone</TableHead>
              <TableHead className="font-medium">Type</TableHead>
              <TableHead className="font-medium">Status</TableHead>
              <TableHead className="font-medium">
                <Button variant="ghost" size="sm" onClick={() => handleSort("downloadCount")} data-testid="button-sort-downloads" className="hover-elevate -ml-3">
                  Downloads <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
              <TableHead className="font-medium">
                <Button variant="ghost" size="sm" onClick={() => handleSort("rechargeAmount")} data-testid="button-sort-recharge" className="hover-elevate -ml-3">
                  Recharge <ArrowUpDown className="ml-2 h-3 w-3" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedUsers.map((user) => (
              <TableRow key={user.id} className="hover-elevate" data-testid={`row-user-${user.id}`}>
                <TableCell className="font-medium" data-testid={`text-name-${user.id}`}>{user.name}</TableCell>
                <TableCell className="text-muted-foreground">{user.email}</TableCell>
                <TableCell className="text-muted-foreground">{user.phone}</TableCell>
                <TableCell>
                  <Badge variant={user.userType === "Prime" ? "default" : "secondary"} data-testid={`badge-type-${user.id}`}>
                    {user.userType}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === "Active" ? "default" : "secondary"} className={user.status === "Active" ? "bg-chart-2 hover:bg-chart-2" : ""} data-testid={`badge-status-${user.id}`}>
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono" data-testid={`text-downloads-${user.id}`}>{user.downloadCount}</TableCell>
                <TableCell className="font-mono" data-testid={`text-recharge-${user.id}`}>₹{user.rechargeAmount.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
