import { Button } from "@/components/ui/button";
import { Scale, Shield, Zap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Scale className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">CaseMate Pro</span>
        </div>
        <Button onClick={() => navigate("/auth")} variant="outline">
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
            Modern Case Management for
            <span className="text-primary"> Legal Professionals</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Streamline your practice with intelligent case tracking, client communication, and document management all in one place.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" onClick={() => navigate("/auth")} className="text-lg px-8">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Scale className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Case Management</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Organize and track all your cases with powerful filtering and search capabilities.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
              <Users className="h-6 w-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold">Client Portal</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Give clients secure access to their case information and documents.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-success/10">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-lg font-semibold">Secure & Compliant</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Bank-level encryption and compliance with legal industry standards.
            </p>
          </div>

          <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-warning/10">
              <Zap className="h-6 w-6 text-warning-foreground" />
            </div>
            <h3 className="text-lg font-semibold">Automated Workflows</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Automate routine tasks and focus on what matters most.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-2xl bg-primary p-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-bold lg:text-4xl">Ready to Transform Your Practice?</h2>
          <p className="mt-4 text-lg opacity-90">
            Join hundreds of legal professionals already using CaseMate Pro
          </p>
          <Button size="lg" variant="secondary" className="mt-8 text-lg px-8" onClick={() => navigate("/auth")}>
            Start Your Free Trial
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>© 2025 CaseMate Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
