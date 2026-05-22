import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/_site")({
  component: () => (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main><Outlet /></main>
      <Footer />
    </div>
  ),
});
