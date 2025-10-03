import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { BarChart3, Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Separator } from "@/components/ui/separator"; // Import Separator
import { LogOut } from "lucide-react"; // Import LogOut icon
import { useLocation } from "wouter"; // Import useLocation for navigation

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "4rem",
  };

  const [, setLocation] = useLocation(); // Initialize useLocation

  const handleLogout = () => { // Define handleLogout function
    localStorage.removeItem("isAuthenticated"); // Remove authentication token
    setLocation("/login"); // Navigate to login page
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <div className="flex flex-col flex-1">
          <header className="flex items-center justify-between px-3 md:px-6 py-3 md:py-4 border-b border-border/50 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
            <div className="flex items-center gap-2 md:gap-4 animate-slide-in-right">
              <SidebarTrigger data-testid="button-sidebar-toggle" className="hover-elevate" />
              <div className="flex items-center gap-2 md:gap-3">
                <div className="h-9 w-9 md:h-11 md:w-11 rounded-lg md:rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl animate-scale-in hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-base md:text-xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Analytics Dashboard
                  </h1>
                  <p className="text-[10px] md:text-xs text-muted-foreground">Professional Business Suite</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
              <div className="relative hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search anything..."
                  className="pl-10 w-72 border-border/50 bg-background/50 backdrop-blur-sm focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
              </div>
              <Button variant="outline" size="icon" className="rounded-full hover-elevate border-border/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
                <Bell className="h-5 w-5" />
              </Button>
              <ThemeToggle />
              <Separator orientation="vertical" className="h-6" /> {/* Add separator */}
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout} // Attach handleLogout to onClick event
                className="gap-2"
              >
                <LogOut className="h-4 w-4" /> {/* Add Logout icon */}
                Logout
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