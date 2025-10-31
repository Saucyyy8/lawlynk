import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { CaseCard } from "@/components/CaseCard";

interface Case {
  id: string;
  caseNumber: string;
  title: string;
  description: string;
  status: "ACTIVE" | "PENDING" | "CLOSED";
  lawyer: { name: string };
}

const ClientCases = () => {
  const { toast } = useToast();
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await fetch(`${api.baseURL}/api/cases`, {
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
    fetchCases();
  }, [toast]);

  return (
    <DashboardLayout userRole="client">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">My Cases</h1>
        <Button asChild>
          <Link to="/client/create-case">
            <Plus className="mr-2 h-4 w-4" />
            Create New Case
          </Link>
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseItem) => (
          <CaseCard key={caseItem.id} {...caseItem} lawyer={caseItem.lawyer?.name} />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ClientCases;