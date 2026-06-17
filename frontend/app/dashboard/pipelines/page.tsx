import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus, Workflow, ArrowRight } from "lucide-react";

export default async function PipelinesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div><h1 className="text-2xl font-accent font-bold text-[#2D2A26]">Pipelines</h1><p className="text-sm text-[#6B6560] mt-1">Manage your agency&apos;s creative workflows.</p></div>
        <button className="inline-flex items-center gap-2 bg-[#7CB9E8] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5A9FCF] transition-colors"><Plus size={16} /> Create Pipeline</button>
      </div>

      <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8">
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4ECEC] to-[#B8D9F0] flex items-center justify-center mx-auto mb-4"><Workflow size={28} className="text-[#5A9FCF]" /></div>
          <h3 className="text-lg font-semibold text-[#2D2A26] mb-2">No pipelines yet</h3>
          <p className="text-sm text-[#6B6560] max-w-sm mx-auto">Build your first pipeline to automate creative workflows from briefing to delivery.</p>
        </div>
      </div>
    </div>
  );
}
