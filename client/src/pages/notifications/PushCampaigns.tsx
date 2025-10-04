import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Megaphone } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const campaigns = [
  { name: "Welcome Campaign", sent: 1250, opened: 890, ctr: "71.2%", status: "Active" },
  { name: "Transaction Updates", sent: 8540, opened: 7245, ctr: "84.8%", status: "Active" },
  { name: "Special Offers", sent: 3200, opened: 1920, ctr: "60.0%", status: "Paused" },
];

export default function PushCampaigns() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Push Campaigns
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Manage notification campaigns</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Active Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign Name</TableHead>
                  <TableHead>Sent</TableHead>
                  <TableHead>Opened</TableHead>
                  <TableHead>Click Rate</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell>{row.sent.toLocaleString()}</TableCell>
                    <TableCell>{row.opened.toLocaleString()}</TableCell>
                    <TableCell className="font-semibold">{row.ctr}</TableCell>
                    <TableCell>
                      <Badge variant="default" className={row.status === "Active" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}>
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
