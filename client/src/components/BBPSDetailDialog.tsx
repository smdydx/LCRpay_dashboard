
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Receipt, Building2, DollarSign, Calendar, CheckCircle, Clock, XCircle } from "lucide-react";

interface BBPSDetailDialogProps {
  service: {
    id: string;
    serviceName: string;
    category: string;
    provider: string;
    amount: number;
    status: "Success" | "Pending" | "Failed";
    transactionDate: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BBPSDetailDialog({ service, isOpen, onClose }: BBPSDetailDialogProps) {
  if (!service) return null;

  const getStatusIcon = () => {
    switch (service.status) {
      case "Success":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "Pending":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "Failed":
        return <XCircle className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-accent/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Receipt className="h-6 w-6 text-white" />
            </div>
            BBPS Service Details
          </DialogTitle>
          <DialogDescription>
            Complete transaction information for this BBPS payment
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Service Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Receipt className="h-5 w-5 text-purple-500" />
              Service Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Receipt className="h-4 w-4" />
                  Service Name
                </p>
                <p className="text-base font-semibold">{service.serviceName}</p>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Category
                </p>
                <p className="text-base font-semibold">{service.category}</p>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Service Provider
                </p>
                <p className="text-base font-semibold">{service.provider}</p>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Transaction ID
                </p>
                <p className="text-base font-semibold">{service.id}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Transaction Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              {getStatusIcon()}
              Transaction Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  {getStatusIcon()}
                  Payment Status
                </p>
                <Badge 
                  variant={
                    service.status === "Success"
                      ? "default"
                      : service.status === "Pending"
                      ? "secondary"
                      : "destructive"
                  }
                  className="text-base font-semibold px-3 py-1"
                >
                  {service.status}
                </Badge>
              </div>
              
              <div className="space-y-2 p-4 rounded-lg border border-border/50 bg-card/50 hover:bg-card transition-all">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Transaction Date
                </p>
                <p className="text-base font-semibold">
                  {new Date(service.transactionDate).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Payment Amount */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              Payment Details
            </h3>
            <div className="p-6 rounded-lg border border-border/50 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Total Amount Paid</p>
                  <p className="text-4xl font-bold text-green-600">
                    ₹{service.amount.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-16 w-16 text-green-500/30" />
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={`p-4 rounded-lg border ${
            service.status === "Success" 
              ? "bg-green-500/10 border-green-500/20" 
              : service.status === "Pending"
              ? "bg-yellow-500/10 border-yellow-500/20"
              : "bg-red-500/10 border-red-500/20"
          }`}>
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This {service.category.toLowerCase()} payment for {service.serviceName} via {service.provider} was {service.status.toLowerCase()} on {new Date(service.transactionDate).toLocaleDateString('en-IN')}.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
