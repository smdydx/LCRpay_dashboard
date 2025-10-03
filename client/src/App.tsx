import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DashboardLayout } from "@/components/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import DownloadUser from "@/pages/DownloadUser";
import MobileRecharge from "@/pages/MobileRecharge";
import D2HRecharge from "@/pages/D2HRecharge";
import BBPSService from "@/pages/BBPSService";
import Service from "@/pages/Service";
import Settings from "@/pages/Settings";
import Login from "@/pages/Login";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

function ProtectedRoute({ component: Component }: { component: React.ComponentType }) {
  const [, setLocation] = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, setLocation]);

  if (!isAuthenticated) {
    return null;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" component={() => <ProtectedRoute component={Dashboard} />} />
      <Route path="/download/user" component={() => <ProtectedRoute component={DownloadUser} />} />
      <Route path="/recharge/mobile" component={() => <ProtectedRoute component={MobileRecharge} />} />
      <Route path="/recharge/d2h" component={() => <ProtectedRoute component={D2HRecharge} />} />
      <Route path="/bbps" component={() => <ProtectedRoute component={BBPSService} />} />
      <Route path="/service" component={() => <ProtectedRoute component={Service} />} />
      <Route path="/settings" component={() => <ProtectedRoute component={Settings} />} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const isLoginPage = location === "/login";

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="lcr-pay-theme">
        <TooltipProvider>
          {isLoginPage ? (
            <>
              <Router />
              <Toaster />
            </>
          ) : (
            <DashboardLayout>
              <Router />
              <Toaster />
            </DashboardLayout>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
