import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";

const services = [
  { name: "Mobile Recharge", enabled: true, maintenance: false },
  { name: "DTH Recharge", enabled: true, maintenance: false },
  { name: "Electricity Bill", enabled: true, maintenance: false },
  { name: "Water Bill", enabled: true, maintenance: false },
];

export default function ServiceSettings() {
  return (
    <div className="p-4 md:p-6 space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent" data-testid="text-page-title">
          Service Settings
        </h1>
        <p className="text-muted-foreground mt-1" data-testid="text-page-description">Configure service availability and settings</p>
      </div>

      <Card className="hover-elevate">
        <CardHeader>
          <CardTitle>Service Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Maintenance Mode</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell><Switch checked={row.enabled} /></TableCell>
                    <TableCell><Switch checked={row.maintenance} /></TableCell>
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
