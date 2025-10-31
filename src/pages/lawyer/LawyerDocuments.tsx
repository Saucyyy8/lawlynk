import { DashboardLayout } from "@/components/layouts/DashboardLayout";

const LawyerDocuments = () => {
  return (
    <DashboardLayout userRole="lawyer">
      <h1 className="text-3xl font-bold">Documents</h1>
      {/* TODO: Implement document list, filtering, and search */}
    </DashboardLayout>
  );
};

export default LawyerDocuments;