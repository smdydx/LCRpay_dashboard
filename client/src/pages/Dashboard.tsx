
import { StatCard } from "@/components/StatCard";
import { UserTable } from "@/components/UserTable";
import { BBPSTable } from "@/components/BBPSTable";
import { Users, Zap, DollarSign, TrendingUp, Crown, Smartphone, Receipt, CheckCircle, Clock } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Prime Users",
    value: "3,421",
    icon: Crown,
    trend: { value: 18.7, isPositive: true },
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Total Recharges",
    value: "28,456",
    icon: Smartphone,
    trend: { value: 10.4, isPositive: true },
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "BBPS Payments",
    value: "12,234",
    icon: Receipt,
    trend: { value: 14.8, isPositive: true },
    gradient: "from-pink-500 to-rose-500",
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
  return (
    <div className="p-4 sm:p-5 md:p-6 lg:p-8 space-y-6 md:space-y-8 animate-fade-in">
      {/* Header Section with gradient animation */}
      <div className="mb-4 md:mb-6 animate-slide-in-up">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
          Dashboard
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mt-2" style={{ animation: "slide-in-up 0.7s ease-out 0.1s both" }}>
          Welcome back! Here's what's happening today.
        </p>
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
                className="pl-3 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                data-testid={`card-${card.title.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  animation: `slideInFromBottom 0.6s ease-out ${0.3 + index * 0.08}s both`,
                }}
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
    </div>
  );
}
