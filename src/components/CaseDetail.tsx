import { useEffect, useState } from "react";
import { Case } from "@/types/case";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

interface Document {
  id: string;
  name: string;
  category: string;
  uploadedAt: string;
}

interface CaseDetailProps {
  caseData: Case;
}

const statusColors = {
  ACTIVE: "bg-success text-success-foreground",
  PENDING: "bg-warning text-warning-foreground",
  CLOSED: "bg-muted text-muted-foreground",
};

export const CaseDetail = ({ caseData }: CaseDetailProps) => {
  const { toast } = useToast();
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (!caseData.id) return;
      try {
        const response = await fetch(`${api.baseURL}/api/documents?caseId=${caseData.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setDocuments(data.documents);
        } else {
          toast({ title: "Error", description: "Could not fetch documents for this case.", variant: "destructive" });
        }
      } catch (error) {
        console.error(error);
        toast({ title: "Error", description: "Could not connect to the server.", variant: "destructive" });
      }
    };
    fetchDocuments();
  }, [caseData.id, toast]);

  const handleDownload = async (doc: Document) => {
    try {
      const response = await fetch(`${api.baseURL}/api/documents/${doc.id}/download`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = doc.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        toast({ title: "Error", description: "Could not download document.", variant: "destructive" });
      }
    } catch (error) {
      console.error(error);
      toast({ title: "Error", description: "Could not connect to the server.", variant: "destructive" });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{caseData.title}</CardTitle>
              <CardDescription className="mt-1 font-mono">{caseData.caseNumber}</CardDescription>
            </div>
            <Badge className={statusColors[caseData.status]}>{caseData.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold">Description</h3>
            <p className="text-muted-foreground">{caseData.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Assigned Lawyer</h3>
              <p className="text-muted-foreground">{caseData.lawyer?.name || "Not Assigned"}</p>
            </div>
            <div>
              <h3 className="font-semibold">Client</h3>
              <p className="text-muted-foreground">{caseData.client?.name || "Not Assigned"}</p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Next Hearing</h3>
            <p className="text-muted-foreground">
              {caseData.nextHearing ? new Date(caseData.nextHearing).toLocaleString() : "Not set"}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Case Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Uploaded At</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.length > 0 ? (
                documents.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>{doc.name}</TableCell>
                    <TableCell>{doc.category.replace("_", " ")}</TableCell>
                    <TableCell>{new Date(doc.uploadedAt).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" onClick={() => handleDownload(doc)}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">No documents found for this case.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};