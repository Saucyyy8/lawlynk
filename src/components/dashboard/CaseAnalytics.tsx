import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

interface CaseAnalyticsProps {
  type: "lawyer" | "client";
}

export function CaseAnalytics({ type }: CaseAnalyticsProps) {
  // Sample data for case status distribution
  const caseStatusData = [
    { name: "Active", value: 24, color: "#10b981" },
    { name: "Pending", value: 8, color: "#f59e0b" },
    { name: "Closed", value: 12, color: "#6b7280" },
  ];

  // Sample data for monthly case trends
  const monthlyData = [
    { month: "Jan", cases: 12 },
    { month: "Feb", cases: 15 },
    { month: "Mar", cases: 18 },
    { month: "Apr", cases: 22 },
    { month: "May", cases: 20 },
    { month: "Jun", cases: 24 },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Case Status Distribution */}
      <Card className="shadow-lg border-none">
        <CardHeader>
          <CardTitle className="text-lg">Case Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={caseStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {caseStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Case Trends */}
      <Card className="shadow-lg border-none">
        <CardHeader>
          <CardTitle className="text-lg">Case Trends (6 Months)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="cases" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
