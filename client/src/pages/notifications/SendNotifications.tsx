import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function SendNotifications() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Send Notifications
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Send push notifications to users</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Create New Notification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Notification title" data-testid="input-title" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Notification message" rows={4} data-testid="input-message" />
          </div>
          <div>
            <Label htmlFor="target">Target Audience</Label>
            <Input id="target" placeholder="All users / Specific segment" data-testid="input-target" />
          </div>
          <Button data-testid="button-send">
            <Send className="h-4 w-4 mr-2" />
            Send Notification
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
