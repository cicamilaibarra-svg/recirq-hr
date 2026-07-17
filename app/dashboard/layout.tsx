import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen bg-stone-50">
      <Sidebar />

      <section className="flex-1 p-10">
        <Topbar />

        {children}
      </section>
    </main>
  );
}