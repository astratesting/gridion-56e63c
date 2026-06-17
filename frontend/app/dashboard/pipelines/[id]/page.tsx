import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Circle } from "lucide-react";

const stages = ["Briefing", "Creation", "Review", "Approval", "Delivery"];

export default async function PipelineDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  const { id } = await params;

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/pipelines" className="text-[#6B6560] hover:text-[#2D2A26] transition-colors"><ArrowLeft size={20} /></Link>
        <div><h1 className="text-2xl font-accent font-bold text-[#2D2A26]">Pipeline: {id}</h1><p className="text-sm text-[#6B6560] mt-1">Status: Draft</p></div>
      </div>

      <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8 mb-8">
        <h2 className="text-lg font-semibold text-[#2D2A26] mb-6">Flow Editor</h2>
        <div className="flex items-center gap-4 overflow-x-auto pb-4">
          {stages.map((stage, i) => (
            <div key={stage} className="flex items-center gap-4">
              <div className="flex flex-col items-center gap-2 min-w-[140px]">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${i === 0 ? "bg-gradient-to-br from-[#7CB9E8] to-[#B2D8D8]" : "bg-[#EAE6DE]"}`}>
                  {i === 0 ? <Check size={20} className="text-white" /> : <Circle size={20} className="text-[#9E9892]" />}
                </div>
                <span className="text-sm font-medium text-[#2D2A26]">{stage}</span>
                <span className="text-xs text-[#9E9892]">{i === 0 ? "Active" : "Pending"}</span>
              </div>
              {i < stages.length - 1 && <div className="w-8 h-px bg-[#D4ECEC]" />}
            </div>
          ))}
        </div>
      </div>

      <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4ECEC] to-[#B8D9F0] flex items-center justify-center mx-auto mb-4"><WorkflowIcon size={28} className="text-[#5A9FCF]" /></div>
        <h3 className="text-lg font-semibold text-[#2D2A26] mb-2">Visual Flow Editor Coming Soon</h3>
        <p className="text-sm text-[#6B6560] max-w-md mx-auto">We&apos;re building a drag-and-drop flow editor that will let you customize every stage of your creative pipeline. Tasks, automations, and triggers &mdash; all visually configured.</p>
      </div>
    </div>
  );
}

function WorkflowIcon({ size, className }: { size: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="8" x="3" y="3" rx="2" /><rect width="8" height="8" x="13" y="13" rx="2" /><path d="M11 7h2a2 2 0 012 2v2" /></svg>;
}
