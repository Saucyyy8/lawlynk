import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { StatsCard } from "@/components/StatsCard";
import { CaseCard } from "@/components/CaseCard";
import { FolderOpen, Users, DollarSign, Clock } from "lucide-react";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Case } from "@/types/case";

const LawyerDashboard = () => {
  const { toast } = useToast();
  const [recentCases, setRecentCases] = useState<Case[]>([]);
  const [stats, setStats] = useState({
    activeCases: 0,
    totalClients: 0,
    monthlyRevenue: "$0",
    pendingTasks: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      // Fetch stats
      try {
        const statsResponse = await fetch(`${api.baseURL}/api/stats/dashboard`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (statsResponse.ok) {
          const data = await statsResponse.json();
          setStats({
            activeCases: data.activeCases,
            totalClients: data.totalClients,
            monthlyRevenue: `$${data.monthlyRevenue}`,
            pendingTasks: data.pendingTasks,
          });
        } else {
          toast({ title: "Error", description: "Could not fetch dashboard stats.", variant: "destructive" });
        }
      } catch (error) {
        console.error(error);
        toast({ title: "Error", description: "Could not connect to the server for stats.", variant: "destructive" });
      }

      // Fetch recent cases
      try {
        const casesResponse = await fetch(`${api.baseURL}/api/cases?limit=4&sort=recent`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (casesResponse.ok) {
          const data = await casesResponse.json();
          setRecentCases(data);
        } else {
          toast({ title: "Error", description: "Could not fetch recent cases.", variant: "destructive" });
        }
      } catch (error) {
        console.error(error);
        toast({ title: "Error", description: "Could not connect to the server for cases.", variant: "destructive" });
      }
    };

    fetchDashboardData();
  }, [toast]);

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
            {recentCases.length > 0 ? (
              recentCases.map((caseItem) => (
                <CaseCard key={caseItem.id} {...caseItem} />
              ))
            ) : (
              <p>No recent cases found.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default LawyerDashboard;
