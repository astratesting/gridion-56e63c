import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { BarChart3, Clock, TrendingUp, Users } from "lucide-react";

export default async function AnalyticsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const stats = [
    { label: "Pipeline Completion Rate", value: "--", icon: TrendingUp },
    { label: "Avg. Approval Turnaround", value: "--", icon: Clock },
    { label: "Team Utilization", value: "--", icon: Users },
    { label: "Active Projects", value: "0", icon: BarChart3 },
  ];

  return (
    <div>
      <div className="mb-8"><h1 className="text-2xl font-accent font-bold text-[#2D2A26]">Analytics</h1><p className="text-sm text-[#6B6560] mt-1">Track pipeline performance and team productivity.</p></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="gradient-card border border-[#EAE6DE] rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3"><span className="text-sm text-[#6B6560]">{s.label}</span><s.icon size={20} className="text-[#7CB9E8]" /></div>
            <p className="text-3xl font-bold text-[#2D2A26]">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4ECEC] to-[#B8D9F0] flex items-center justify-center mx-auto mb-4"><BarChart3 size={28} className="text-[#5A9FCF]" /></div>
        <h3 className="text-lg font-semibold text-[#2D2A26] mb-2">Analytics will populate as pipelines run</h3>
        <p className="text-sm text-[#6B6560] max-w-md mx-auto">Once you create pipelines and they start moving through stages, real-time metrics on completion rates, approval turnaround, and team utilization will appear here.</p>
      </div>
    </div>
  );
}
