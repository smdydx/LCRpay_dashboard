import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code } from "lucide-react";

export default function APIConfiguration() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          API Configuration
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Configure API endpoints and settings</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>API Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Configure API endpoints and authentication settings here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
