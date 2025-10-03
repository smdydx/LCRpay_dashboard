import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, RefreshCw, Database, Shield } from "lucide-react";

export default function Service() {
  const services = [
    {
      title: "System Maintenance",
      description: "Run system diagnostics and cleanup tasks",
      icon: Settings,
      action: "Run Diagnostics",
    },
    {
      title: "Cache Management",
      description: "Clear cache and optimize performance",
      icon: RefreshCw,
      action: "Clear Cache",
    },
    {
      title: "Database Backup",
      description: "Create backup of all system data",
      icon: Database,
      action: "Start Backup",
    },
    {
      title: "Security Scan",
      description: "Scan for vulnerabilities and threats",
      icon: Shield,
      action: "Run Scan",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Services</h2>
        <p className="text-muted-foreground">Manage system services and maintenance tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.title} className="hover-elevate transition-all duration-200" data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="flex items-center gap-2">
                    <service.icon className="h-5 w-5 text-primary" />
                    {service.title}
                  </CardTitle>
                  <CardDescription className="mt-2">{service.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => console.log(`${service.action} triggered`)} 
                data-testid={`button-${service.action.toLowerCase().replace(/\s+/g, '-')}`}
                className="w-full hover-elevate"
              >
                {service.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
