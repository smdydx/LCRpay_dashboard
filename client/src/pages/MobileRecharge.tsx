import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Smartphone } from "lucide-react";

export default function MobileRecharge() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Mobile Recharge</h2>
        <p className="text-muted-foreground">Quick and easy mobile recharge for all operators</p>
      </div>

      <div className="max-w-2xl">
        <Card className="border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-primary" />
              Recharge Your Mobile
            </CardTitle>
            <CardDescription>Enter mobile number and select your operator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mobile-number">Mobile Number</Label>
              <Input id="mobile-number" placeholder="Enter 10-digit mobile number" data-testid="input-mobile-number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="operator">Operator</Label>
              <Select>
                <SelectTrigger id="operator" data-testid="select-operator">
                  <SelectValue placeholder="Select operator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="airtel">Airtel</SelectItem>
                  <SelectItem value="jio">Jio</SelectItem>
                  <SelectItem value="vi">Vi (Vodafone Idea)</SelectItem>
                  <SelectItem value="bsnl">BSNL</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" type="number" placeholder="Enter amount" data-testid="input-amount" />
            </div>
            <Button onClick={() => console.log('Recharge initiated')} className="w-full hover-elevate" data-testid="button-recharge">
              Proceed to Recharge
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
