
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { BarChart3, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between px-6 py-4 border-b border-border/50 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
            <div className="flex items-center gap-4 animate-slide-in-right">
              <SidebarTrigger data-testid="button-sidebar-toggle" className="hover-elevate" />
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-scale-in hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Analytics Dashboard
                  </h1>
                  <p className="text-xs text-muted-foreground">Professional Business Suite</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search anything..." 
                  className="pl-10 w-72 border-border/50 bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-full hover-elevate border-border/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </header>
          <main className="flex-1 overflow-auto bg-gradient-to-br from-background via-background to-blue-500/5">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
