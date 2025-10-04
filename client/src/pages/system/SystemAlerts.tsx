import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function SystemAlerts() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          System Alerts
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Manage system notifications and alerts</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Active Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-green-500 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            All systems operational - No active alerts
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
