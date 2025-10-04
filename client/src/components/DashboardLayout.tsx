import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BarChart3, Bell, Search, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import { LogOut } from "lucide-react";
import { useLocation } from "wouter";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "4rem",
  };

  const [, setLocation] = useLocation();
  const [timeFilter, setTimeFilter] = useState<"day" | "week" | "month">("day");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setLocation("/login");
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1 min-w-0">
          <header className="flex items-center justify-between px-3 md:px-6 py-3 md:py-4 border-b border-border/50 bg-gradient-to-r from-blue-600/10 via-orange-500/10 to-emerald-500/10 backdrop-blur-xl sticky top-0 z-50 shadow-lg flex-shrink-0">
            <div className="flex items-center gap-2 md:gap-4 animate-slide-in-right">
              <SidebarTrigger data-testid="button-sidebar-toggle" className="hover-elevate flex-shrink-0" />
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <div className="h-9 w-9 md:h-11 md:w-11 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-600 via-orange-500 to-emerald-600 flex items-center justify-center shadow-2xl animate-scale-in hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <div className="hidden sm:block min-w-0">
                  <h1 className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent truncate">
                    Analytics Dashboard
                  </h1>
                  <p className="text-[10px] md:text-xs text-muted-foreground truncate">Professional Business Suite</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              {/* Time Filter in Header */}
              <Tabs value={timeFilter} onValueChange={(v) => setTimeFilter(v as "day" | "week" | "month")} className="hidden lg:block">
                <TabsList className="bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-emerald-500/10 border border-orange-200/20">
                  <TabsTrigger 
                    value="day" 
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white text-xs"
                  >
                    Day
                  </TabsTrigger>
                  <TabsTrigger 
                    value="week"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white text-xs"
                  >
                    Week
                  </TabsTrigger>
                  <TabsTrigger 
                    value="month"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white text-xs"
                  >
                    Month
                  </TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search anything..."
                  className="pl-10 w-64 xl:w-72 border-border/50 bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  data-testid="input-search"
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-full hover-elevate border-border/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 flex-shrink-0" data-testid="button-notifications">
                <Bell className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Separator orientation="vertical" className="h-6 hidden md:block" />
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="gap-2 hidden md:flex"
                data-testid="button-logout"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden lg:inline">Logout</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleLogout}
                className="md:hidden flex-shrink-0"
                data-testid="button-logout-mobile"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-gradient-to-br from-background via-background to-blue-500/5">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
