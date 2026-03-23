import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/feature/dashboard/components/dashboard-sidebar";
import { DashboardTopNav } from "@/feature/dashboard/components/dashboard-top-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardTopNav />
        <main className="flex-1 min-h-0 overflow-y-auto p-4 pt-0 scroll-smooth">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
