import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardLayout } from "@/components/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import DownloadUser from "@/pages/DownloadUser";
import MobileRecharge from "@/pages/MobileRecharge";
import D2HRecharge from "@/pages/D2HRecharge";
import BBPSService from "@/pages/BBPSService";
import Service from "@/pages/Service";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/download/user" component={DownloadUser} />
      <Route path="/recharge/mobile" component={MobileRecharge} />
      <Route path="/recharge/d2h" component={D2HRecharge} />
      <Route path="/bbps" component={BBPSService} />
      <Route path="/service" component={Service} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DashboardLayout>
          <Router />
        </DashboardLayout>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
