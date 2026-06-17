import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Workflow, Clock, Users, TrendingUp, Plus, UserPlus, ArrowRight } from "lucide-react";

export default async function DashboardHome() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const metrics = [
    { label: "Active Pipelines", value: "0", icon: Workflow, color: "from-[#7CB9E8] to-[#B8D9F0]" },
    { label: "Pending Approvals", value: "0", icon: Clock, color: "from-[#E8D5B7] to-[#F2E8D6]" },
    { label: "Team Members", value: "1", icon: Users, color: "from-[#B2D8D8] to-[#D4ECEC]" },
    { label: "Completion Rate", value: "--", icon: TrendingUp, color: "from-[#7CB9E8] to-[#B2D8D8]" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-accent font-bold text-[#2D2A26]">Welcome back</h1><p className="text-sm text-[#6B6560] mt-1">Here&apos;s what&apos;s happening with your agency today.</p></div>
        <div className="flex gap-3">
          <Link href="/dashboard/pipelines" className="inline-flex items-center gap-2 bg-[#7CB9E8] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5A9FCF] transition-colors"><Plus size={16} /> New Pipeline</Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((m) => (
          <div key={m.label} className="gradient-card border border-[#EAE6DE] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[#6B6560]">{m.label}</span>
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center`}><m.icon size={20} className="text-white" /></div>
            </div>
            <p className="text-3xl font-bold text-[#2D2A26]">{m.value}</p>
          </div>
        ))}
      </div>

      <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8">
        <h2 className="text-lg font-semibold text-[#2D2A26] mb-4">Recent Activity</h2>
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4ECEC] to-[#B8D9F0] flex items-center justify-center mx-auto mb-4"><Workflow size={28} className="text-[#5A9FCF]" /></div>
          <h3 className="text-lg font-semibold text-[#2D2A26] mb-2">No activity yet</h3>
          <p className="text-sm text-[#6B6560] max-w-sm mx-auto mb-6">Create your first pipeline to start tracking activity across your agency&apos;s workflows.</p>
          <Link href="/dashboard/pipelines" className="inline-flex items-center gap-2 text-sm text-[#7CB9E8] hover:text-[#5A9FCF] font-medium transition-colors">Create your first pipeline <ArrowRight size={14} /></Link>
        </div>
      </div>
    </div>
  );
}
