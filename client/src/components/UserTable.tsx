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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
  const [filterType, setFilterType] = useState<UserType>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const filteredUsers = users.filter(user => 
    filterType === "All" ? true : user.userType === filterType
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortOrder === "asc" 
      ? a.rechargeAmount - b.rechargeAmount 
      : b.rechargeAmount - a.rechargeAmount;
  });

  return (
    <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Users className="h-5 w-5 text-blue-500" />
              Active Users
            </CardTitle>
            <CardDescription>Recent user activity and transactions</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant={filterType === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("All")}
              className="hover-elevate"
            >
              All
            </Button>
            <Button
              variant={filterType === "Prime" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("Prime")}
              className="hover-elevate"
            >
              Prime
            </Button>
            <Button
              variant={filterType === "Normal" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType("Normal")}
              className="hover-elevate"
            >
              Normal
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
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
              {sortedUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-accent/50 transition-colors">
                  <TableCell>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.userType === "Prime" ? "default" : "secondary"} className="font-semibold">
                      {user.userType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-lg">
                    ₹{user.rechargeAmount.toLocaleString()}
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