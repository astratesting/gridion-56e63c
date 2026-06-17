import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, Workflow, Users, FolderOpen, BarChart3, Settings, LogOut } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Home", icon: LayoutDashboard },
  { href: "/dashboard/pipelines", label: "Pipelines", icon: Workflow },
  { href: "/dashboard/clients", label: "Clients", icon: Users },
  { href: "/dashboard/files", label: "Files", icon: FolderOpen },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-white border-r border-[#EAE6DE] flex flex-col">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7CB9E8] to-[#B2D8D8] flex items-center justify-center"><span className="text-white font-bold text-sm">G</span></div>
            <span className="font-accent text-lg font-semibold text-[#2D2A26]">Gridion</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#6B6560] hover:text-[#2D2A26] hover:bg-[#F8F6F0] transition-colors">
              <item.icon size={18} />{item.label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-[#EAE6DE]">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#9E9892] truncate max-w-[160px]">{user.email}</p>
            <Link href="/sign-in" className="text-[#9E9892] hover:text-[#2D2A26] transition-colors"><LogOut size={16} /></Link>
          </div>
        </div>
      </aside>
      <main className="flex-1 bg-[#F8F6F0] p-8">{children}</main>
    </div>
  );
}
