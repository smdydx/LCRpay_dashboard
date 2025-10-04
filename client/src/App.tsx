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

// User Management Pages
import AllUsers from "@/pages/users/AllUsers";
import PrimeUsers from "@/pages/users/PrimeUsers";
import ActiveUsers from "@/pages/users/ActiveUsers";
import InactiveUsers from "@/pages/users/InactiveUsers";
import KYCPending from "@/pages/users/KYCPending";

// Analytics Pages
import RevenueAnalytics from "@/pages/analytics/RevenueAnalytics";
import TransactionAnalytics from "@/pages/analytics/TransactionAnalytics";
import UserGrowth from "@/pages/analytics/UserGrowth";
import ServicePerformance from "@/pages/analytics/ServicePerformance";
import RealtimeMetrics from "@/pages/analytics/RealtimeMetrics";

// Transaction Pages
import LiveTransactions from "@/pages/transactions/LiveTransactions";
import AllTransactions from "@/pages/transactions/AllTransactions";
import FailedTransactions from "@/pages/transactions/FailedTransactions";
import PendingApprovals from "@/pages/transactions/PendingApprovals";
import Refunds from "@/pages/transactions/Refunds";

// Reports Pages
import DailyReports from "@/pages/reports/DailyReports";
import MonthlyReports from "@/pages/reports/MonthlyReports";
import ServiceWiseReports from "@/pages/reports/ServiceWiseReports";
import CommissionReports from "@/pages/reports/CommissionReports";
import TaxReports from "@/pages/reports/TaxReports";

// BBPS Pages
import ServiceStatus from "@/pages/bbps/ServiceStatus";
import ProviderManagement from "@/pages/bbps/ProviderManagement";
import BBPSAnalytics from "@/pages/bbps/BBPSAnalytics";
import CommissionSettings from "@/pages/bbps/CommissionSettings";

// Finance Pages
import RevenueDashboard from "@/pages/finance/RevenueDashboard";
import SettlementReports from "@/pages/finance/SettlementReports";
import CommissionTracking from "@/pages/finance/CommissionTracking";
import WalletBalances from "@/pages/finance/WalletBalances";

// System Pages
import ServerHealth from "@/pages/system/ServerHealth";
import APIPerformance from "@/pages/system/APIPerformance";
import ErrorLogs from "@/pages/system/ErrorLogs";
import SystemAlerts from "@/pages/system/SystemAlerts";

// Notifications Pages
import SendNotifications from "@/pages/notifications/SendNotifications";
import PushCampaigns from "@/pages/notifications/PushCampaigns";
import UserAlerts from "@/pages/notifications/UserAlerts";
import SMSManagement from "@/pages/notifications/SMSManagement";

// Security Pages
import SecurityDashboard from "@/pages/security/SecurityDashboard";
import FraudDetection from "@/pages/security/FraudDetection";
import AuditLogs from "@/pages/security/AuditLogs";
import ComplianceReports from "@/pages/security/ComplianceReports";

// Config Pages
import ServiceSettings from "@/pages/config/ServiceSettings";
import APIConfiguration from "@/pages/config/APIConfiguration";
import PaymentGateway from "@/pages/config/PaymentGateway";
import PricingManagement from "@/pages/config/PricingManagement";

// Settings Pages
import AdminUsers from "@/pages/settings/AdminUsers";
import RolesPermissions from "@/pages/settings/RolesPermissions";
import SystemPreferences from "@/pages/settings/SystemPreferences";

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
      
      {/* User Management Routes */}
      <Route path="/users/all">
        <ProtectedRoute>
          <DashboardLayout>
            <AllUsers />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/users/prime">
        <ProtectedRoute>
          <DashboardLayout>
            <PrimeUsers />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/users/active">
        <ProtectedRoute>
          <DashboardLayout>
            <ActiveUsers />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/users/inactive">
        <ProtectedRoute>
          <DashboardLayout>
            <InactiveUsers />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/users/kyc-pending">
        <ProtectedRoute>
          <DashboardLayout>
            <KYCPending />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Analytics Routes */}
      <Route path="/analytics/revenue">
        <ProtectedRoute>
          <DashboardLayout>
            <RevenueAnalytics />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/analytics/transactions">
        <ProtectedRoute>
          <DashboardLayout>
            <TransactionAnalytics />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/analytics/user-growth">
        <ProtectedRoute>
          <DashboardLayout>
            <UserGrowth />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/analytics/services">
        <ProtectedRoute>
          <DashboardLayout>
            <ServicePerformance />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/analytics/realtime">
        <ProtectedRoute>
          <DashboardLayout>
            <RealtimeMetrics />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Transaction Routes */}
      <Route path="/transactions/live">
        <ProtectedRoute>
          <DashboardLayout>
            <LiveTransactions />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/transactions/all">
        <ProtectedRoute>
          <DashboardLayout>
            <AllTransactions />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/transactions/failed">
        <ProtectedRoute>
          <DashboardLayout>
            <FailedTransactions />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/transactions/pending">
        <ProtectedRoute>
          <DashboardLayout>
            <PendingApprovals />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/transactions/refunds">
        <ProtectedRoute>
          <DashboardLayout>
            <Refunds />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Reports Routes */}
      <Route path="/reports/daily">
        <ProtectedRoute>
          <DashboardLayout>
            <DailyReports />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/reports/monthly">
        <ProtectedRoute>
          <DashboardLayout>
            <MonthlyReports />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/reports/service-wise">
        <ProtectedRoute>
          <DashboardLayout>
            <ServiceWiseReports />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/reports/commission">
        <ProtectedRoute>
          <DashboardLayout>
            <CommissionReports />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/reports/tax">
        <ProtectedRoute>
          <DashboardLayout>
            <TaxReports />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* BBPS Routes */}
      <Route path="/bbps/status">
        <ProtectedRoute>
          <DashboardLayout>
            <ServiceStatus />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/bbps/providers">
        <ProtectedRoute>
          <DashboardLayout>
            <ProviderManagement />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/bbps/analytics">
        <ProtectedRoute>
          <DashboardLayout>
            <BBPSAnalytics />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/bbps/commission">
        <ProtectedRoute>
          <DashboardLayout>
            <CommissionSettings />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Finance Routes */}
      <Route path="/finance/revenue">
        <ProtectedRoute>
          <DashboardLayout>
            <RevenueDashboard />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/finance/settlements">
        <ProtectedRoute>
          <DashboardLayout>
            <SettlementReports />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/finance/commission">
        <ProtectedRoute>
          <DashboardLayout>
            <CommissionTracking />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/finance/wallets">
        <ProtectedRoute>
          <DashboardLayout>
            <WalletBalances />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* System Routes */}
      <Route path="/system/health">
        <ProtectedRoute>
          <DashboardLayout>
            <ServerHealth />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/system/api">
        <ProtectedRoute>
          <DashboardLayout>
            <APIPerformance />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/system/errors">
        <ProtectedRoute>
          <DashboardLayout>
            <ErrorLogs />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/system/alerts">
        <ProtectedRoute>
          <DashboardLayout>
            <SystemAlerts />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Notifications Routes */}
      <Route path="/notifications/send">
        <ProtectedRoute>
          <DashboardLayout>
            <SendNotifications />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/notifications/campaigns">
        <ProtectedRoute>
          <DashboardLayout>
            <PushCampaigns />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/notifications/alerts">
        <ProtectedRoute>
          <DashboardLayout>
            <UserAlerts />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/notifications/sms">
        <ProtectedRoute>
          <DashboardLayout>
            <SMSManagement />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Security Routes */}
      <Route path="/security/dashboard">
        <ProtectedRoute>
          <DashboardLayout>
            <SecurityDashboard />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/security/fraud">
        <ProtectedRoute>
          <DashboardLayout>
            <FraudDetection />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/security/audit">
        <ProtectedRoute>
          <DashboardLayout>
            <AuditLogs />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/security/compliance">
        <ProtectedRoute>
          <DashboardLayout>
            <ComplianceReports />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Config Routes */}
      <Route path="/config/services">
        <ProtectedRoute>
          <DashboardLayout>
            <ServiceSettings />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/config/api">
        <ProtectedRoute>
          <DashboardLayout>
            <APIConfiguration />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/config/payment">
        <ProtectedRoute>
          <DashboardLayout>
            <PaymentGateway />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/config/pricing">
        <ProtectedRoute>
          <DashboardLayout>
            <PricingManagement />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>

      {/* Settings Routes */}
      <Route path="/settings/admins">
        <ProtectedRoute>
          <DashboardLayout>
            <AdminUsers />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/settings/roles">
        <ProtectedRoute>
          <DashboardLayout>
            <RolesPermissions />
          </DashboardLayout>
        </ProtectedRoute>
      </Route>
      <Route path="/settings/preferences">
        <ProtectedRoute>
          <DashboardLayout>
            <SystemPreferences />
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