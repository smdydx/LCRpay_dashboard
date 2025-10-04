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
import { UserDetailDialog } from "./UserDetailDialog";

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

export function UserTable({ users = [] }: UserTableProps) {
  const [userType, setUserType] = useState<UserType>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const filteredUsers = (users || []).filter(user =>
    userType === "All" ? true : user.userType === userType
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortOrder === "asc"
      ? a.rechargeAmount - b.rechargeAmount
      : b.rechargeAmount - a.rechargeAmount;
  });

  return (
    <Card className="border-border/50 shadow-xl bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-700 group">
      <CardHeader className="p-4 md:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="flex items-center gap-2 text-xl group-hover:text-blue-600 transition-colors duration-300">
              <Users className="h-5 w-5 text-blue-500 animate-bounce-subtle" />
              Active Users
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Recent user activity and transactions</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button
              variant={userType === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setUserType("All")}
              className="hover-elevate transition-all duration-300"
              data-testid="button-filter-all"
            >
              All
            </Button>
            <Button
              variant={userType === "Prime" ? "default" : "outline"}
              size="sm"
              onClick={() => setUserType("Prime")}
              className="hover-elevate transition-all duration-300"
              data-testid="button-filter-prime"
            >
              Prime
            </Button>
            <Button
              variant={userType === "Normal" ? "default" : "outline"}
              size="sm"
              onClick={() => setUserType("Normal")}
              className="hover-elevate transition-all duration-300"
              data-testid="button-filter-normal"
            >
              Normal
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-accent/30 transition-colors duration-200">
                <TableHead className="font-bold">Name</TableHead>
                <TableHead className="font-bold">Type</TableHead>
                <TableHead className="font-bold">Status</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    className="hover:bg-transparent font-bold transition-transform duration-200 hover:scale-105"
                    data-testid="button-sort-amount"
                  >
                    Amount
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedUsers.map((user, index) => (
                <TableRow 
                  key={user.id} 
                  className="hover:bg-accent/50 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                  style={{ animation: `fade-in 0.4s ease-out ${index * 0.1}s both` }}
                  data-testid={`row-user-${user.id}`}
                  onClick={() => handleUserClick(user)}
                >
                  <TableCell>
                    <div>
                      <p className="font-medium text-sm md:text-base">{user.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{user.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.userType === "Prime" ? "default" : "secondary"} 
                      className="font-semibold transition-all duration-300 hover:scale-110"
                      data-testid={`badge-type-${user.id}`}
                    >
                      {user.userType}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={user.status === "Active" ? "default" : "secondary"}
                      className="transition-all duration-300 hover:scale-110"
                      data-testid={`badge-status-${user.id}`}
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-bold text-base md:text-lg" data-testid={`text-amount-${user.id}`}>
                    ₹{user.rechargeAmount.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      
      <UserDetailDialog 
        user={selectedUser}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </Card>
  );
}
