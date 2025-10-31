import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, MessageSquare, User as UserIcon } from "lucide-react";
import { api } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ClientProfile {
  name: string;
  email: string;
  numberOfCases: number;
  age?: number;
  aboutClient?: string;
}

const ClientDashboard = () => {
  const { toast } = useToast();
  const [profileInfo, setProfileInfo] = useState<ClientProfile | null>(null);
  const [editableAge, setEditableAge] = useState<number | undefined>(undefined);
  const [editableAboutClient, setEditableAboutClient] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const userResponse = await fetch(`${api.baseURL}/api/auth/me`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!userResponse.ok) {
          throw new Error("Could not fetch user details.");
        }
        const userData = await userResponse.json();

        const casesResponse = await fetch(`${api.baseURL}/api/clients/cases`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (!casesResponse.ok) {
          throw new Error("Could not fetch client cases.");
        }
        const casesData = await casesResponse.json();

        setProfileInfo({
          name: userData.name,
          email: userData.email,
          numberOfCases: casesData.length,
          age: userData.age,
          aboutClient: userData.aboutClient,
        });
        setEditableAge(userData.age);
        setEditableAboutClient(userData.aboutClient);

      } catch (error: any) {
        console.error(error);
        toast({ title: "Error", description: error.message || "Could not fetch profile information.", variant: "destructive" });
      }
    };
    fetchProfileInfo();
  }, [toast]);

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${api.baseURL}/api/auth/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          age: editableAge,
          aboutClient: editableAboutClient,
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setProfileInfo(prev => prev ? { ...prev, age: updatedUser.age, aboutClient: updatedUser.aboutClient } : null);
        toast({ title: "Success", description: "Profile updated successfully." });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile.");
      }
    } catch (error: any) {
      console.error(error);
      toast({ title: "Error", description: error.message || "Could not update profile.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DashboardLayout userRole="client">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="mt-2 text-muted-foreground">Welcome back! Here's your overview.</p>
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Documents</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Available documents</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Calendar className="h-5 w-5 text-accent-foreground" />
                </div>
                <CardTitle className="text-lg">Appointments</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">2</p>
              <p className="text-sm text-muted-foreground">Upcoming meetings</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <MessageSquare className="h-5 w-5 text-success" />
                </div>
                <CardTitle className="text-lg">Messages</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">3</p>
              <p className="text-sm text-muted-foreground">Unread messages</p>
            </CardContent>
          </Card>
        </div>

        {/* Profile Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10">
                <UserIcon className="h-5 w-5 text-info" />
              </div>
              <CardTitle className="text-lg">Profile Information</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {profileInfo ? (
              <div className="grid gap-3">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={profileInfo.name} disabled />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" value={profileInfo.email} disabled />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="cases-applied">Cases Applied</Label>
                  <Input id="cases-applied" value={profileInfo.numberOfCases} disabled />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={editableAge !== undefined ? editableAge : ''}
                    onChange={(e) => setEditableAge(e.target.value ? parseInt(e.target.value) : undefined)}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="about-client">About Client</Label>
                  <Textarea
                    id="about-client"
                    value={editableAboutClient !== undefined ? editableAboutClient : ''}
                    onChange={(e) => setEditableAboutClient(e.target.value || undefined)}
                    rows={4}
                  />
                </div>
                <Button onClick={handleSaveProfile} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Profile"}
                </Button>
              </div>
            ) : (
              <p>Loading profile information...</p>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ClientDashboard;
