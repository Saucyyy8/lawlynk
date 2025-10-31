import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { CaseCard } from "@/components/CaseCard";
import { Button } from "@/components/ui/button";

interface Case {
  id: string;
  caseNumber: string;
  title: string;
  description: string;
  status: "ACTIVE" | "PENDING" | "CLOSED";
  client: { name: string };
}

const LawyerCases = () => {
  const { toast } = useToast();
  const [cases, setCases] = useState<Case[]>([]);

  const fetchCases = async () => {
    try {
      const response = await fetch(`${api.baseURL}/api/cases?sort=recent`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setCases(data.cases);
      } else {
        toast({ title: "Error", description: "Could not fetch cases.", variant: "destructive" });
      }
    } catch (error) {
      console.error(error);
      toast({ title: "Error", description: "Could not connect to the server.", variant: "destructive" });
    }
  };

  useEffect(() => {
    fetchCases();
  }, []);

  const handleCaseAction = async (caseId: string, action: "accept" | "reject") => {
    try {
      const response = await fetch(`${api.baseURL}/api/cases/${caseId}/${action}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.ok) {
        toast({ title: "Success", description: `Case ${action}ed successfully.` });
        fetchCases(); // Refresh the case list
      } else {
        toast({ title: "Error", description: `Failed to ${action} case.`, variant: "destructive" });
      }
    } catch (error) {
      console.error(error);
      toast({ title: "Error", description: "Could not connect to the server.", variant: "destructive" });
    }
  };

  return (
    <DashboardLayout userRole="lawyer">
      <h1 className="text-3xl font-bold mb-8">My Cases</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseItem) => (
          <div key={caseItem.id}>
            <CaseCard {...caseItem} client={caseItem.client?.name} />
            {caseItem.status === "PENDING" && (
              <div className="mt-2 flex gap-2">
                <Button onClick={() => handleCaseAction(caseItem.id, "accept")}>Accept</Button>
                <Button variant="destructive" onClick={() => handleCaseAction(caseItem.id, "reject")}>Reject</Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default LawyerCases;