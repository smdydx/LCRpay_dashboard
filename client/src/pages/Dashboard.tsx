import { StatCard } from "@/components/StatCard";
import { UserTable } from "@/components/UserTable";
import { BBPSTable } from "@/components/BBPSTable";
import { Users, Zap, DollarSign, TrendingUp, Crown, Smartphone, Receipt, CheckCircle, Clock, Calendar, Download } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const sampleUsers = [
  {
    id: "1",
    name: "Rahul Kumar",
    email: "rahul.kumar@example.com",
    phone: "+91 98765 43210",
    userType: "Prime" as const,
    status: "Active" as const,
    downloadCount: 145,
    rechargeAmount: 25000,
  },
  {
    id: "2",
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+91 98765 43211",
    userType: "Normal" as const,
    status: "Active" as const,
    downloadCount: 87,
    rechargeAmount: 12500,
  },
  {
    id: "3",
    name: "Amit Patel",
    email: "amit.patel@example.com",
    phone: "+91 98765 43212",
    userType: "Prime" as const,
    status: "Inactive" as const,
    downloadCount: 203,
    rechargeAmount: 45000,
  },
  {
    id: "4",
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "+91 98765 43213",
    userType: "Normal" as const,
    status: "Active" as const,
    downloadCount: 56,
    rechargeAmount: 8900,
  },
  {
    id: "5",
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91 98765 43214",
    userType: "Prime" as const,
    status: "Active" as const,
    downloadCount: 312,
    rechargeAmount: 67000,
  },
];

const sampleServices = [
  {
    id: "1",
    serviceName: "Electricity Bill",
    category: "Utilities",
    provider: "BSES Rajdhani",
    amount: 2500,
    status: "Success" as const,
    transactionDate: "2024-01-15",
  },
  {
    id: "2",
    serviceName: "Water Bill",
    category: "Utilities",
    provider: "Delhi Jal Board",
    amount: 850,
    status: "Success" as const,
    transactionDate: "2024-01-14",
  },
  {
    id: "3",
    serviceName: "Gas Bill",
    category: "Utilities",
    provider: "Indraprastha Gas",
    amount: 1200,
    status: "Pending" as const,
    transactionDate: "2024-01-13",
  },
  {
    id: "4",
    serviceName: "Mobile Postpaid",
    category: "Telecom",
    provider: "Airtel",
    amount: 599,
    status: "Success" as const,
    transactionDate: "2024-01-12",
  },
  {
    id: "5",
    serviceName: "DTH Recharge",
    category: "Entertainment",
    provider: "Tata Sky",
    amount: 450,
    status: "Failed" as const,
    transactionDate: "2024-01-11",
  },
];

const statCards = [
  {
    title: "Total Transactions",
    value: "45,892",
    icon: DollarSign,
    trend: { value: 12.5, isPositive: true },
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Total Revenue",
    value: "₹89,45,231",
    icon: TrendingUp,
    trend: { value: 15.3, isPositive: true },
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Total Users",
    value: "15,847",
    icon: Users,
    trend: { value: 8.2, isPositive: true },
    gradient: "from-[#667eea] via-[#764ba2] to-[#f093fb]",
  },
  {
    title: "Prime Users",
    value: "3,421",
    icon: Crown,
    trend: { value: 18.7, isPositive: true },
    gradient: "from-[#f093fb] via-[#f5576c] to-[#ffd700]",
  },
  {
    title: "Total Recharges",
    value: "28,456",
    icon: Smartphone,
    trend: { value: 10.4, isPositive: true },
    gradient: "from-[#4facfe] via-[#00f2fe] to-[#43e97b]",
  },
  {
    title: "BBPS Payments",
    value: "12,234",
    icon: Receipt,
    trend: { value: 14.8, isPositive: true },
    gradient: "from-[#fa709a] via-[#fee140] to-[#ff6b6b]",
  },
  {
    title: "Success Rate",
    value: "98.7%",
    icon: CheckCircle,
    trend: { value: 2.1, isPositive: true },
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Pending Payments",
    value: "234",
    icon: Clock,
    trend: { value: 5.3, isPositive: false },
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Today's Revenue",
    value: "₹2,45,890",
    icon: Zap,
    trend: { value: 22.4, isPositive: true },
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState<"day" | "week" | "month">("day");

  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-6 md:space-y-8 animate-fade-in">
      {/* Header Section with gradient animation and filter */}
      <div className="mb-4 md:mb-6 animate-slide-in-up">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-orange-500 to-emerald-600 bg-clip-text text-transparent animate-gradient">
              Dashboard
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-2" style={{ animation: "slide-in-up 0.7s ease-out 0.1s both" }}>
              Welcome back! Here's what's happening {timeFilter === "day" ? "today" : timeFilter === "week" ? "this week" : "this month"}.
            </p>
          </div>

          {/* Time Filter Tabs with Indian Theme */}
          <Tabs value={timeFilter} onValueChange={(v) => setTimeFilter(v as "day" | "week" | "month")} className="w-full md:w-auto">
            <TabsList className="grid w-full md:w-auto grid-cols-3 bg-gradient-to-r from-blue-500/10 via-orange-500/10 to-emerald-500/10 border border-orange-200/20">
              <TabsTrigger
                value="day"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Day
              </TabsTrigger>
              <TabsTrigger
                value="week"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Week
              </TabsTrigger>
              <TabsTrigger
                value="month"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Month
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Stats Carousel with stagger animation */}
      <div className="relative px-0 sm:px-12 animate-scale-in" style={{ animationDelay: "0.2s" }}>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {statCards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                data-testid={`card-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <StatCard
                  title={card.title}
                  value={card.value}
                  icon={card.icon}
                  trend={card.trend}
                  gradient={card.gradient}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Details Section with fade-in animation */}
      <div
        className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-5 lg:gap-6 mt-8"
        style={{ animation: "fade-in 0.8s ease-out 1s both" }}
      >
        <div
          className="w-full"
          style={{ animation: "slide-in-right 0.7s ease-out 1.1s both" }}
        >
          <UserTable users={sampleUsers} />
        </div>
        <div
          className="w-full"
          style={{ animation: "slide-in-right 0.7s ease-out 1.2s both" }}
        >
          <BBPSTable services={sampleServices} />
        </div>
      </div>

      {/* Footer Section - enhanced for premium look */}
      <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-8 px-6 rounded-xl shadow-2xl animate-fade-in-up" style={{ animationDelay: "1.3s" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Your Premium Dashboard
            </h3>
            <p className="text-gray-300">
              Experience seamless insights and manage your business with elegance.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">About</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Contact</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition duration-300">Privacy Policy</a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}