

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
      {/* Static Decorative Root/Vine Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {/* Static Root Systems */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 300 1000">
          {/* Main Root 1 - Left Side */}
          <g className="opacity-60">
            <path d="M 30,0 Q 35,100 25,200 Q 15,300 30,400 Q 45,500 35,600 Q 25,700 30,800 Q 35,900 30,1000" 
                  stroke="url(#gradient1)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="10,5"/>
            <circle cx="30" cy="0" r="5" fill="url(#gradient1)" opacity="0.8"/>
            <circle cx="25" cy="200" r="4" fill="url(#gradient1)" opacity="0.7"/>
            <circle cx="30" cy="400" r="4" fill="url(#gradient1)" opacity="0.8"/>
            <circle cx="35" cy="600" r="4" fill="url(#gradient1)" opacity="0.7"/>
            <circle cx="30" cy="800" r="4" fill="url(#gradient1)" opacity="0.8"/>
          </g>

          {/* Main Root 2 - Right Side */}
          <g className="opacity-60">
            <path d="M 270,0 Q 265,120 275,240 Q 285,360 270,480 Q 255,600 265,720 Q 275,840 270,960" 
                  stroke="url(#gradient2)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeDasharray="8,4"/>
            <circle cx="270" cy="0" r="4" fill="url(#gradient2)" opacity="0.7"/>
            <circle cx="275" cy="240" r="3" fill="url(#gradient2)" opacity="0.8"/>
            <circle cx="270" cy="480" r="3" fill="url(#gradient2)" opacity="0.7"/>
            <circle cx="265" cy="720" r="3" fill="url(#gradient2)" opacity="0.8"/>
          </g>

          {/* Branching Roots */}
          <g className="opacity-50">
            <path d="M 30,150 Q 80,160 130,150" 
                  stroke="url(#gradient3)" 
                  strokeWidth="2" 
                  fill="none"/>
            <path d="M 30,350 Q 90,370 150,350" 
                  stroke="url(#gradient3)" 
                  strokeWidth="2" 
                  fill="none"/>
            <path d="M 270,300 Q 220,310 170,300" 
                  stroke="url(#gradient2)" 
                  strokeWidth="2" 
                  fill="none"/>
            <path d="M 270,500 Q 210,520 150,500" 
                  stroke="url(#gradient2)" 
                  strokeWidth="2" 
                  fill="none"/>
          </g>

          {/* Small Root Details */}
          <g className="opacity-40">
            <path d="M 60,100 Q 70,130 65,160" stroke="url(#gradient1)" strokeWidth="1.5" fill="none"/>
            <path d="M 240,200 Q 230,230 235,260" stroke="url(#gradient2)" strokeWidth="1.5" fill="none"/>
            <path d="M 50,400 Q 60,430 55,460" stroke="url(#gradient3)" strokeWidth="1.5" fill="none"/>
            <path d="M 250,600 Q 240,630 245,660" stroke="url(#gradient2)" strokeWidth="1.5" fill="none"/>
          </g>

          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4"/>
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5"/>
            </linearGradient>
          </defs>
        </svg>

        {/* Static Root Nodes */}
        <div className="absolute top-20 left-12">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 opacity-60"/>
        </div>
        <div className="absolute top-40 right-12">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 opacity-60"/>
        </div>
        <div className="absolute top-60 left-16">
          <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-60"/>
        </div>
        <div className="absolute bottom-60 right-16">
          <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-60"/>
        </div>
        <div className="absolute bottom-40 left-14">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-orange-500 opacity-60"/>
        </div>

        {/* Static Leaf Elements */}
        <div className="absolute top-32 left-20">
          <svg width="25" height="25" viewBox="0 0 25 25" className="text-emerald-500/50">
            <path d="M12.5,3 Q18,9 16,18 Q12.5,22 9,18 Q7,9 12.5,3 Z" fill="currentColor" opacity="0.7"/>
            <path d="M12.5,3 L12.5,18" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute top-80 right-20">
          <svg width="28" height="28" viewBox="0 0 28 28" className="text-blue-500/50">
            <path d="M14,3 Q20,10 17,20 Q14,25 11,20 Q8,10 14,3 Z" fill="currentColor" opacity="0.7"/>
            <path d="M14,3 L14,20" stroke="currentColor" strokeWidth="0.9" opacity="0.5"/>
          </svg>
        </div>
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
              <div className="w-2 h-2 rounded-full bg-green-500" />
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
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-background shadow-lg" />
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
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <span className="text-[10px] font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">v1.0.0 Pro</span>
            </div>
            <span className="text-[10px] font-medium text-muted-foreground">© 2024 LCR Pay</span>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}
