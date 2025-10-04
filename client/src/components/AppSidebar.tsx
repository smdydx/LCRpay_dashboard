

import { 
  Download, CreditCard, Wrench, Settings, ChevronDown, 
  Users, Receipt, TrendingUp, Shield, Bell, FileText,
  Building, BarChart3, UserCircle, History, Activity, DollarSign, Zap
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useLocation } from "wouter";

const menuItems = [
  {
    title: "Dashboard",
    icon: BarChart3,
    path: "/",
  },
  {
    title: "Users Management",
    icon: Users,
    items: [
      { title: "All Users", path: "/users/all" },
      { title: "Prime Users", path: "/users/prime" },
      { title: "Active Users", path: "/users/active" },
      { title: "Inactive Users", path: "/users/inactive" },
      { title: "KYC Pending", path: "/users/kyc-pending" },
    ],
  },
  {
    title: "Analytics",
    icon: TrendingUp,
    items: [
      { title: "Revenue Analytics", path: "/analytics/revenue" },
      { title: "Transaction Analytics", path: "/analytics/transactions" },
      { title: "User Growth", path: "/analytics/user-growth" },
      { title: "Service Performance", path: "/analytics/services" },
      { title: "Real-time Metrics", path: "/analytics/realtime" },
    ],
  },
  {
    title: "Transaction Monitoring",
    icon: Activity,
    items: [
      { title: "Live Transactions", path: "/transactions/live" },
      { title: "All Transactions", path: "/transactions/all" },
      { title: "Failed Transactions", path: "/transactions/failed" },
      { title: "Pending Approvals", path: "/transactions/pending" },
      { title: "Refunds", path: "/transactions/refunds" },
    ],
  },
  {
    title: "Reports",
    icon: FileText,
    items: [
      { title: "Daily Reports", path: "/reports/daily" },
      { title: "Monthly Reports", path: "/reports/monthly" },
      { title: "Service-wise Reports", path: "/reports/service-wise" },
      { title: "Commission Reports", path: "/reports/commission" },
      { title: "Tax Reports", path: "/reports/tax" },
    ],
  },
  {
    title: "BBPS Management",
    icon: CreditCard,
    items: [
      { title: "Service Status", path: "/bbps/status" },
      { title: "Provider Management", path: "/bbps/providers" },
      { title: "Service Analytics", path: "/bbps/analytics" },
      { title: "Commission Settings", path: "/bbps/commission" },
    ],
  },
  {
    title: "Financial Overview",
    icon: DollarSign,
    items: [
      { title: "Revenue Dashboard", path: "/finance/revenue" },
      { title: "Settlement Reports", path: "/finance/settlements" },
      { title: "Commission Tracking", path: "/finance/commission" },
      { title: "Wallet Balances", path: "/finance/wallets" },
    ],
  },
  {
    title: "System Monitoring",
    icon: Zap,
    items: [
      { title: "Server Health", path: "/system/health" },
      { title: "API Performance", path: "/system/api" },
      { title: "Error Logs", path: "/system/errors" },
      { title: "System Alerts", path: "/system/alerts" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    items: [
      { title: "Send Notifications", path: "/notifications/send" },
      { title: "Push Campaigns", path: "/notifications/campaigns" },
      { title: "User Alerts", path: "/notifications/alerts" },
      { title: "SMS Management", path: "/notifications/sms" },
    ],
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    items: [
      { title: "Security Dashboard", path: "/security/dashboard" },
      { title: "Fraud Detection", path: "/security/fraud" },
      { title: "Audit Logs", path: "/security/audit" },
      { title: "Compliance Reports", path: "/security/compliance" },
    ],
  },
  {
    title: "Configuration",
    icon: Wrench,
    items: [
      { title: "Service Settings", path: "/config/services" },
      { title: "API Configuration", path: "/config/api" },
      { title: "Payment Gateway", path: "/config/payment" },
      { title: "Pricing Management", path: "/config/pricing" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    items: [
      { title: "General Settings", path: "/settings" },
      { title: "Admin Users", path: "/settings/admins" },
      { title: "Roles & Permissions", path: "/settings/roles" },
      { title: "System Preferences", path: "/settings/preferences" },
    ],
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  const iconColors = {
    BarChart3: "text-blue-500",
    Users: "text-purple-500",
    TrendingUp: "text-green-500",
    Activity: "text-indigo-500",
    FileText: "text-orange-500",
    CreditCard: "text-pink-500",
    DollarSign: "text-emerald-500",
    Zap: "text-yellow-500",
    Bell: "text-amber-500",
    Shield: "text-red-500",
    Wrench: "text-violet-500",
    Settings: "text-gray-500",
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const iconColorClass = iconColors[item.icon.name as keyof typeof iconColors] || "text-primary";

                if (item.items) {
                  const isActive = item.items.some(subItem => location === subItem.path);
                  return (
                    <Collapsible key={item.title} defaultOpen={isActive} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton data-testid={`button-menu-${item.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover-elevate hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
                            <item.icon className={`h-4 w-4 ${iconColorClass}`} />
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.path}>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={location === subItem.path}
                                  data-testid={`link-${subItem.title.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="hover-elevate hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200"
                                >
                                  <a href={subItem.path}>
                                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.path}
                      data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover-elevate hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200"
                    >
                      <a href={item.path}>
                        <item.icon className={`h-4 w-4 ${iconColorClass}`} />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
