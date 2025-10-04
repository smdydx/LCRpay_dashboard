import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SystemPreferences() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          System Preferences
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Configure system-wide preferences</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>System Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Configure system preferences here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
