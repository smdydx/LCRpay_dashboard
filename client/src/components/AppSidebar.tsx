
import { 
  Download, Smartphone, CreditCard, Wrench, Settings, ChevronDown, 
  Users, Wallet, Receipt, TrendingUp, Shield, Bell, FileText,
  Zap, Building, Banknote, Gift, BarChart3, UserCircle, History,
  Tv, Lightbulb, Droplet, Flame, Phone, Globe, Ticket
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
    title: "My Account",
    icon: UserCircle,
    items: [
      { title: "Profile", path: "/account/profile" },
      { title: "KYC Details", path: "/account/kyc" },
      { title: "Bank Accounts", path: "/account/banks" },
    ],
  },
  {
    title: "Wallet",
    icon: Wallet,
    items: [
      { title: "Add Money", path: "/wallet/add-money" },
      { title: "Send Money", path: "/wallet/send" },
      { title: "Transaction History", path: "/wallet/history" },
      { title: "Wallet Balance", path: "/wallet/balance" },
    ],
  },
  {
    title: "Recharge & Bills",
    icon: Smartphone,
    items: [
      { title: "Mobile Recharge", path: "/recharge/mobile" },
      { title: "D2H Recharge", path: "/recharge/d2h" },
      { title: "Electricity Bill", path: "/bills/electricity" },
      { title: "Water Bill", path: "/bills/water" },
      { title: "Gas Bill", path: "/bills/gas" },
      { title: "Broadband Bill", path: "/bills/broadband" },
      { title: "Landline Bill", path: "/bills/landline" },
    ],
  },
  {
    title: "BBPS Services",
    icon: CreditCard,
    items: [
      { title: "All Services", path: "/bbps" },
      { title: "Utility Bills", path: "/bbps/utility" },
      { title: "Insurance", path: "/bbps/insurance" },
      { title: "Loan Repayment", path: "/bbps/loan" },
    ],
  },
  {
    title: "Financial Services",
    icon: Banknote,
    items: [
      { title: "Money Transfer", path: "/finance/transfer" },
      { title: "UPI Payments", path: "/finance/upi" },
      { title: "QR Code Payment", path: "/finance/qr" },
      { title: "Request Money", path: "/finance/request" },
    ],
  },
  {
    title: "Offers & Rewards",
    icon: Gift,
    items: [
      { title: "Active Offers", path: "/offers/active" },
      { title: "Cashback", path: "/offers/cashback" },
      { title: "Reward Points", path: "/offers/points" },
      { title: "Referral Program", path: "/offers/referral" },
    ],
  },
  {
    title: "Reports",
    icon: FileText,
    items: [
      { title: "Transaction Reports", path: "/reports/transactions" },
      { title: "Daily Summary", path: "/reports/daily" },
      { title: "Monthly Statement", path: "/reports/monthly" },
      { title: "Tax Reports", path: "/reports/tax" },
    ],
  },
  {
    title: "Users Management",
    icon: Users,
    items: [
      { title: "All Users", path: "/download/user" },
      { title: "Prime Users", path: "/users/prime" },
      { title: "Active Users", path: "/users/active" },
      { title: "User Activity", path: "/users/activity" },
    ],
  },
  {
    title: "Analytics",
    icon: TrendingUp,
    items: [
      { title: "Revenue Analytics", path: "/analytics/revenue" },
      { title: "User Analytics", path: "/analytics/users" },
      { title: "Service Analytics", path: "/analytics/services" },
      { title: "Performance Metrics", path: "/analytics/performance" },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    items: [
      { title: "All Notifications", path: "/notifications/all" },
      { title: "Alerts", path: "/notifications/alerts" },
      { title: "Promotional", path: "/notifications/promo" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      { title: "Security Settings", path: "/security/settings" },
      { title: "Two-Factor Auth", path: "/security/2fa" },
      { title: "Login History", path: "/security/history" },
      { title: "Trusted Devices", path: "/security/devices" },
    ],
  },
  {
    title: "Services",
    icon: Wrench,
    items: [
      { title: "System Maintenance", path: "/service" },
      { title: "API Management", path: "/service/api" },
      { title: "Integration Settings", path: "/service/integration" },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    items: [
      { title: "General Settings", path: "/settings" },
      { title: "Preferences", path: "/settings/preferences" },
      { title: "Privacy Policy", path: "/settings/privacy" },
      { title: "Terms & Conditions", path: "/settings/terms" },
    ],
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  const iconColors = {
    BarChart3: "text-blue-500",
    UserCircle: "text-purple-500",
    Wallet: "text-green-500",
    Smartphone: "text-indigo-500",
    CreditCard: "text-pink-500",
    Banknote: "text-emerald-500",
    Gift: "text-yellow-500",
    FileText: "text-orange-500",
    Users: "text-cyan-500",
    TrendingUp: "text-rose-500",
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
