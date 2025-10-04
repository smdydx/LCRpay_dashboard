

import { 
  Download, CreditCard, Wrench, Settings, ChevronDown, 
  Users, Receipt, TrendingUp, Shield, Bell, FileText,
  Building, BarChart3, UserCircle, History, Activity, DollarSign, Zap, Calendar
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
  const [location, setLocation] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setLocation("/login");
  };

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
      
      {/* Professional Sidebar Footer */}
      <div className="mt-auto border-t border-border/50 bg-gradient-to-b from-background to-background/80">
        {/* Time Period Filter */}
        <div className="px-4 py-3 border-b border-border/30">
          <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
            <Calendar className="h-3 w-3" />
            <span>Time Period</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            <button className="px-2 py-1.5 text-xs rounded-md bg-gradient-to-r from-blue-500/20 to-blue-500/10 hover:from-blue-500 hover:to-blue-600 hover:text-white border border-blue-500/30 transition-all duration-200">
              Day
            </button>
            <button className="px-2 py-1.5 text-xs rounded-md bg-gradient-to-r from-orange-500/20 to-orange-500/10 hover:from-orange-500 hover:to-orange-600 hover:text-white border border-orange-500/30 transition-all duration-200">
              Week
            </button>
            <button className="px-2 py-1.5 text-xs rounded-md bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 hover:from-emerald-500 hover:to-emerald-600 hover:text-white border border-emerald-500/30 transition-all duration-200">
              Month
            </button>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="px-4 py-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">System Status</span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500 font-medium">Online</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-2 border border-blue-500/20">
              <div className="text-[10px] text-muted-foreground mb-0.5">Active Users</div>
              <div className="text-sm font-bold text-blue-500">2,547</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-2 border border-green-500/20">
              <div className="text-[10px] text-muted-foreground mb-0.5">Revenue</div>
              <div className="text-sm font-bold text-green-500">₹45.2K</div>
            </div>
          </div>
        </div>

        {/* User Profile Section */}
        <div className="p-3 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold shadow-lg">
                <UserCircle className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-foreground truncate">Admin User</div>
              <div className="text-xs text-muted-foreground truncate">admin@lcrpay.com</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handleLogout}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-red-500/10 to-red-500/5 hover:from-red-500/20 hover:to-red-500/10 border border-red-500/20 rounded-lg text-xs font-medium text-red-500 transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Version Info */}
        <div className="px-4 py-2 bg-background/50 border-t border-border/30">
          <div className="flex items-center justify-between text-[10px] text-muted-foreground">
            <span>v1.0.0</span>
            <span>© 2024 LCR Pay</span>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
