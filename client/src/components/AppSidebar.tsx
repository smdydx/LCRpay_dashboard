

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
      {/* Animated Leaf Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Floating Leaves */}
        <div className="absolute top-10 left-8 animate-float-slow">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-emerald-500/40">
            <path d="M20,5 Q30,15 25,30 Q20,35 15,30 Q10,15 20,5 Z" fill="currentColor" opacity="0.6"/>
            <path d="M20,5 L20,30" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>
        
        <div className="absolute top-32 right-6 animate-float-slow-delayed">
          <svg width="35" height="35" viewBox="0 0 35 35" className="text-blue-500/40">
            <path d="M17.5,3 Q26,12 22,25 Q17.5,30 13,25 Q9,12 17.5,3 Z" fill="currentColor" opacity="0.6"/>
            <path d="M17.5,3 L17.5,25" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
          </svg>
        </div>

        <div className="absolute top-64 left-4 animate-float">
          <svg width="30" height="30" viewBox="0 0 30 30" className="text-orange-500/40">
            <path d="M15,4 Q22,11 19,22 Q15,26 11,22 Q8,11 15,4 Z" fill="currentColor" opacity="0.6"/>
            <path d="M15,4 L15,22" stroke="currentColor" strokeWidth="0.7" opacity="0.4"/>
          </svg>
        </div>

        <div className="absolute bottom-40 right-8 animate-float-slow">
          <svg width="45" height="45" viewBox="0 0 45 45" className="text-purple-500/40">
            <path d="M22.5,5 Q33,16 28,32 Q22.5,38 17,32 Q12,16 22.5,5 Z" fill="currentColor" opacity="0.6"/>
            <path d="M22.5,5 L22.5,32" stroke="currentColor" strokeWidth="1.2" opacity="0.4"/>
          </svg>
        </div>

        <div className="absolute bottom-16 left-10 animate-float-slow-delayed">
          <svg width="38" height="38" viewBox="0 0 38 38" className="text-pink-500/40">
            <path d="M19,4 Q28,13 24,27 Q19,32 14,27 Q10,13 19,4 Z" fill="currentColor" opacity="0.6"/>
            <path d="M19,4 L19,27" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          </svg>
        </div>

        {/* Decorative Vines */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 300 800">
          <path d="M20,50 Q40,100 30,150 Q20,200 35,250 Q50,300 40,350" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                fill="none" 
                className="text-emerald-500/20" 
                opacity="0.5"/>
          <path d="M280,100 Q260,150 270,200 Q280,250 265,300 Q250,350 260,400" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                fill="none" 
                className="text-blue-500/20" 
                opacity="0.5"/>
        </svg>
      </div>

      <SidebarContent className="relative z-10">
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
      
      {/* Premium Sidebar Footer */}
      <div className="mt-auto border-t border-border/50 bg-gradient-to-b from-background via-blue-500/5 to-purple-500/5">
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

        {/* Premium User Profile Section */}
        <div className="p-4 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-sm border-t border-border/30">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-white font-semibold shadow-xl ring-2 ring-blue-500/30 transition-all duration-300 group-hover:scale-105">
                <UserCircle className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-background shadow-lg animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-foreground truncate bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Admin User</div>
              <div className="text-xs text-muted-foreground truncate flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span>admin@lcrpay.com</span>
              </div>
            </div>
          </div>

          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:scale-[1.02] active:scale-95"
          >
            <Download className="h-4 w-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Premium Version Info */}
        <div className="px-4 py-3 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 border-t border-border/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
              <span className="text-[10px] font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">v1.0.0 Pro</span>
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">© 2024 LCR Pay</span>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
