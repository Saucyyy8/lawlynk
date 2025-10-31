import { DashboardLayout } from "@/components/layouts/DashboardLayout";

const ClientSettings = () => {
  return (
    <DashboardLayout userRole="client">
      <h1 className="text-3xl font-bold">Settings</h1>
      {/* TODO: Implement settings form for clients */}
    </DashboardLayout>
  );
};

export default ClientSettings;