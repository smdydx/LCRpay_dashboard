import { Download, Smartphone, CreditCard, Wrench, Settings, ChevronDown, Users, CreditCard as CreditCardIcon } from "lucide-react";
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
    title: "Download",
    icon: Download,
    items: [
      { title: "User", path: "/download/user" },
    ],
  },
  {
    title: "Recharge",
    icon: Smartphone,
    items: [
      { title: "Mobile Recharge", path: "/recharge/mobile" },
      { title: "D2H Recharge", path: "/recharge/d2h" },
    ],
  },
  {
    title: "BBPS Service",
    icon: CreditCard,
    path: "/bbps",
  },
  {
    title: "Service",
    icon: Wrench,
    path: "/service",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  const iconColors = {
    Download: "text-blue-500",
    Smartphone: "text-purple-500",
    CreditCard: "text-pink-500",
    Wrench: "text-orange-500",
    Settings: "text-green-500",
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
                          <SidebarMenuButton data-testid={`button-menu-${item.title.toLowerCase()}`} className="hover-elevate hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 transition-all duration-200">
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
                                    <Users className="h-3 w-3" />
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
                      data-testid={`link-${item.title.toLowerCase()}`}
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