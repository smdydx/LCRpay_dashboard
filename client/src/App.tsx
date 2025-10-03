import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Loader2 } from "lucide-react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Login from "@/pages/Login";
import DashboardLayout from "@/components/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
import Service from "@/pages/Service";
import MobileRecharge from "@/pages/MobileRecharge";
import D2HRecharge from "@/pages/D2HRecharge";
import BBPSService from "@/pages/BBPSService";
import DownloadUser from "@/pages/DownloadUser";
import Settings from "@/pages/Settings";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
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

  return <>{children}</>;
}

function Router() {
  const [location, setLocation] = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    if (location === "/" && !isAuthenticated) {
      setLocation("/login");
    } else if (location === "/login" && isAuthenticated) {
      setLocation("/");
    }
  }, [location, isAuthenticated, setLocation]);

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        <ProtectedRoute>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/service">
        <ProtectedRoute>
          <DashboardLayout>
            <Service />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/mobile-recharge">
        <ProtectedRoute>
          <DashboardLayout>
            <MobileRecharge />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/d2h-recharge">
        <ProtectedRoute>
          <DashboardLayout>
            <D2HRecharge />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/bbps">
        <ProtectedRoute>
          <DashboardLayout>
            <BBPSService />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/download-user">
        <ProtectedRoute>
          <DashboardLayout>
            <DownloadUser />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/settings">
        <ProtectedRoute>
          <DashboardLayout>
            <Settings />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;