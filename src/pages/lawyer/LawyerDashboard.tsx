import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { CaseCard } from "@/components/CaseCard";
import { FolderOpen, Users, DollarSign, Clock } from "lucide-react";

const LawyerDashboard = () => {
  // TODO: Fetch from Spring Boot backend: GET /api/stats/dashboard
  // Expected response: { activeCases, totalClients, monthlyRevenue, pendingTasks }
  
  const stats = {
    activeCases: 24,
    totalClients: 156,
    monthlyRevenue: "$45,230",
    pendingTasks: 8,
  };

  // TODO: Fetch recent cases: GET /api/cases?limit=4&sort=recent
  const recentCases = [
    {
      id: "1",
      caseNumber: "CS-2025-001",
      title: "Smith v. Johnson Corp",
      client: "Sarah Smith",
      status: "active" as const,
      lastUpdated: "2 hours ago",
      nextHearing: "Jan 15, 2025",
    },
    {
      id: "2",
      caseNumber: "CS-2025-002",
      title: "Estate Planning - Williams",
      client: "Robert Williams",
      status: "pending" as const,
      lastUpdated: "1 day ago",
    },
  ];

  return (
    <DashboardLayout userRole="lawyer">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Active Cases"
            value={stats.activeCases}
            icon={FolderOpen}
            trend={{ value: "12% from last month", positive: true }}
          />
          <StatsCard
            title="Total Clients"
            value={stats.totalClients}
            icon={Users}
            trend={{ value: "8 new this month", positive: true }}
          />
          <StatsCard
            title="Monthly Revenue"
            value={stats.monthlyRevenue}
            icon={DollarSign}
            trend={{ value: "18% increase", positive: true }}
          />
          <StatsCard
            title="Pending Tasks"
            value={stats.pendingTasks}
            icon={Clock}
            description="Due this week"
          />
        </div>

        {/* Recent Cases */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Recent Cases</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentCases.map((caseItem) => (
              <CaseCard key={caseItem.id} {...caseItem} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LawyerDashboard;
