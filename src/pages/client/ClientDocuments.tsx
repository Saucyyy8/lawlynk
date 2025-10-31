import { DashboardLayout } from "@/components/layouts/DashboardLayout";

const ClientDocuments = () => {
  return (
    <DashboardLayout userRole="client">
      <h1 className="text-3xl font-bold">Documents</h1>
      {/* TODO: Implement document list for clients */}
    </DashboardLayout>
  );
};

export default ClientDocuments;