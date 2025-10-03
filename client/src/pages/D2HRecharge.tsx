import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tv } from "lucide-react";

export default function D2HRecharge() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">D2H Recharge</h2>
        <p className="text-muted-foreground">Recharge your DTH connection instantly</p>
      </div>

      <div className="max-w-2xl">
        <Card className="border-card-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Tv className="h-5 w-5 text-primary" />
              DTH Recharge
            </CardTitle>
            <CardDescription>Enter subscriber ID and select your DTH provider</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subscriber-id">Subscriber ID</Label>
              <Input id="subscriber-id" placeholder="Enter subscriber ID" data-testid="input-subscriber-id" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dth-operator">DTH Operator</Label>
              <Select>
                <SelectTrigger id="dth-operator" data-testid="select-dth-operator">
                  <SelectValue placeholder="Select DTH operator" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tatasky">Tata Sky</SelectItem>
                  <SelectItem value="airtel">Airtel Digital TV</SelectItem>
                  <SelectItem value="dish">Dish TV</SelectItem>
                  <SelectItem value="sundirect">Sun Direct</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="d2h-amount">Amount</Label>
              <Input id="d2h-amount" type="number" placeholder="Enter amount" data-testid="input-d2h-amount" />
            </div>
            <Button onClick={() => console.log('D2H Recharge initiated')} className="w-full hover-elevate" data-testid="button-d2h-recharge">
              Proceed to Recharge
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
