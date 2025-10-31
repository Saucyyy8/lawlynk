export interface Case {
  id: string;
  caseNumber: string;
  title: string;
  description: string;
  status: "ACTIVE" | "PENDING" | "CLOSED";
  nextHearing?: string;
  lawyer?: { id: string; name: string };
  client?: { id: string; name: string };
}