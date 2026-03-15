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
        <main className="p-4 pt-0">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
