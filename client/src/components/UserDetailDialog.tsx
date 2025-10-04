
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Phone, Mail, Calendar, Activity, DollarSign, Download, Crown } from "lucide-react";

interface UserDetailDialogProps {
  user: {
    id: string;
    name: string;
    email: string;
    phone: string;
    userType: "Prime" | "Normal";
    status: "Active" | "Inactive";
    downloadCount: number;
    rechargeAmount: number;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function UserDetailDialog({ user, isOpen, onClose }: UserDetailDialogProps) {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-accent/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            User Profile Details
          </DialogTitle>
          <DialogDescription>
            Complete information and statistics for this user
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5 text-blue-500" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name
                </p>
                <p className="text-base font-semibold">{user.name}</p>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </p>
                <p className="text-base font-semibold">{user.phone}</p>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address
                </p>
                <p className="text-base font-semibold break-all">{user.email}</p>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  User ID
                </p>
                <p className="text-base font-semibold">{user.id}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Account Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Activity className="h-5 w-5 text-green-500" />
              Account Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Crown className="h-4 w-4" />
                  User Type
                </p>
                <Badge 
                  variant={user.userType === "Prime" ? "default" : "secondary"}
                  className="text-base font-semibold px-3 py-1"
                >
                  {user.userType}
                </Badge>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Status
                </p>
                <Badge 
                  variant={user.status === "Active" ? "default" : "secondary"}
                  className="text-base font-semibold px-3 py-1"
                >
                  {user.status}
                </Badge>
              </div>
            </div>
          </div>

          <Separator />

          {/* Statistics */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-yellow-500" />
              User Statistics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg border border-border/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                      <DollarSign className="h-4 w-4" />
                      Total Recharge Amount
                    </p>
                    <p className="text-3xl font-bold text-blue-600">
                      ₹{user.rechargeAmount.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="h-12 w-12 text-blue-500/30" />
                </div>
              </div>
              
              <div className="p-6 rounded-lg border border-border/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10 hover:from-green-500/20 hover:to-emerald-500/20 transition-all">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                      <Download className="h-4 w-4" />
                      Total Downloads
                    </p>
                    <p className="text-3xl font-bold text-green-600">
                      {user.downloadCount.toLocaleString()}
                    </p>
                  </div>
                  <Download className="h-12 w-12 text-green-500/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This user has been {user.status.toLowerCase()} and has made {user.downloadCount} downloads with a total recharge amount of ₹{user.rechargeAmount.toLocaleString()}.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
