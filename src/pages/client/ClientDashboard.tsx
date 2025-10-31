import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { CaseCard } from "@/components/CaseCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, MessageSquare } from "lucide-react";

const ClientDashboard = () => {
  // TODO: Fetch from Spring Boot backend: GET /api/client/cases
  const myCases = [
    {
      id: "1",
      caseNumber: "CS-2025-001",
      title: "Smith v. Johnson Corp",
      client: "You",
      status: "active" as const,
      lastUpdated: "2 hours ago",
      nextHearing: "Jan 15, 2025",
    },
  ];

  return (
    <DashboardLayout userRole="client">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Track your cases and stay updated.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Documents</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Available documents</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Calendar className="h-5 w-5 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Appointments</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Upcoming meetings</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <MessageSquare className="h-5 w-5 text-success" />
                </div>
                <CardTitle className="text-lg">Messages</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Unread messages</p>
            </CardContent>
          </Card>
        </div>

        {/* My Cases */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">My Cases</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {myCases.map((caseItem) => (
              <CaseCard key={caseItem.id} {...caseItem} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClientDashboard;
