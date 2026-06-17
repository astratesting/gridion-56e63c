import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/sign-in");

  return (
    <div className="max-w-2xl">
      <div className="mb-8"><h1 className="text-2xl font-accent font-bold text-[#2D2A26]">Settings</h1><p className="text-sm text-[#6B6560] mt-1">Manage your account and agency preferences.</p></div>

      <div className="space-y-6">
        <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-[#2D2A26] mb-6">Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-1.5">Email</label>
              <input type="email" defaultValue={user.email} readOnly className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-[#F8F6F0] text-[#6B6560] text-sm cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-1.5">Display Name</label>
              <input type="text" placeholder="Your name" className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm" />
            </div>
          </div>
          <button className="mt-6 bg-[#7CB9E8] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5A9FCF] transition-colors">Save Changes</button>
        </div>

        <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-[#2D2A26] mb-6">Agency</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-1.5">Agency Name</label>
              <input type="text" placeholder="Your agency name" className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#2D2A26] mb-1.5">Team Size</label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm">
                <option>1-5 people</option><option>6-15 people</option><option>16-30 people</option><option>31-50 people</option><option>50+ people</option>
              </select>
            </div>
          </div>
          <button className="mt-6 bg-[#7CB9E8] text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-[#5A9FCF] transition-colors">Save Changes</button>
        </div>

        <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-[#2D2A26] mb-6">Billing</h2>
          <div className="flex items-center justify-between">
            <div><p className="text-sm font-medium text-[#2D2A26]">Free Trial</p><p className="text-xs text-[#6B6560] mt-1">You&apos;re currently on the 14-day free trial.</p></div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7CB9E8] hover:text-[#5A9FCF] font-medium transition-colors">View Plans <ArrowRight size={14} /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
