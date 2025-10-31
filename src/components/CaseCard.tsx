import { Calendar, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface CaseCardProps {
  caseNumber: string;
  title: string;
  client: string;
  status: "active" | "pending" | "closed";
  lastUpdated: string;
  nextHearing?: string;
}

const statusColors = {
  active: "bg-success text-success-foreground",
  pending: "bg-warning text-warning-foreground",
  closed: "bg-muted text-muted-foreground",
};

export function CaseCard({ caseNumber, title, client, status, lastUpdated, nextHearing }: CaseCardProps) {
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-mono text-muted-foreground">{caseNumber}</p>
            <CardTitle className="mt-1 text-lg">{title}</CardTitle>
          </div>
          <Badge className={statusColors[status]}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>{client}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Updated {lastUpdated}</span>
          </div>
          {nextHearing && (
            <div className="rounded-md bg-accent/10 p-2 text-sm">
              <span className="font-medium text-accent-foreground">Next Hearing:</span> {nextHearing}
            </div>
          )}
          <Button className="w-full mt-2" variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
