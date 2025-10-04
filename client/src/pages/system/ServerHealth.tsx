import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function ServerHealth() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Server Health Monitor
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Real-time server health and performance metrics</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="hover-elevate border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">CPU Usage</span>
                <span className="text-sm font-semibold">45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Memory Usage</span>
                <span className="text-sm font-semibold">58%</span>
              </div>
              <Progress value={58} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Disk Usage</span>
                <span className="text-sm font-semibold">32%</span>
              </div>
              <Progress value={32} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle>Server Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Uptime</span>
              <span className="text-sm font-semibold">99.98%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Response Time</span>
              <span className="text-sm font-semibold">145ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Active Connections</span>
              <span className="text-sm font-semibold">1,247</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
