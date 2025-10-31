import { DashboardLayout } from "@/components/layouts/DashboardLayout";

const LawyerClients = () => {
  return (
    <DashboardLayout userRole="lawyer">
      <h1 className="text-3xl font-bold">Clients</h1>
      {/* TODO: Implement client list, filtering, and search */}
    </DashboardLayout>
  );
};

export default LawyerClients;