import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

export default function SecurityDashboard() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Security Dashboard
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Monitor security status and threats</p>
      </div>

      <Card className="hover-elevate border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            System Security Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-500 font-semibold">All security checks passed</p>
          <p className="text-sm text-muted-foreground mt-2">Last scan: 2 hours ago</p>
        </CardContent>
      </Card>
    </div>
  );
}
