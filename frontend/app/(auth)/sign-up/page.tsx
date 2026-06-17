'use client';

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (password.length < 8) { setError("Password must be at least 8 characters."); return; }
    if (password !== confirmPassword) { setError("Passwords do not match."); return; }
    setLoading(true);
    const supabase = createClient();
    const { error: signUpError } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth/callback` } });
    setLoading(false);
    if (signUpError) { setError(signUpError.message); } else { setSuccess(true); }
  }

  if (success) {
    return (
      <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4ECEC] to-[#B8D9F0] flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-[#7CB9E8]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <h2 className="text-2xl font-accent font-bold text-[#2D2A26] mb-2">Check your email</h2>
        <p className="text-[#6B6560] leading-relaxed">We&apos;ve sent a confirmation link to <span className="font-medium text-[#2D2A26]">{email}</span>. Click the link to activate your account.</p>
        <Link href="/sign-in" className="inline-flex items-center gap-2 mt-6 text-sm text-[#7CB9E8] hover:text-[#5A9FCF] transition-colors">Back to sign in <ArrowRight size={14} /></Link>
      </div>
    );
  }

  return (
    <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8">
      <h2 className="text-2xl font-accent font-bold text-[#2D2A26] mb-1">Create your account</h2>
      <p className="text-sm text-[#6B6560] mb-8">Start your free 14-day trial. No credit card required.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2D2A26] mb-1.5">Email address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@agency.com" className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#2D2A26] mb-1.5">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} placeholder="Min. 8 characters" className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm" />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#2D2A26] mb-1.5">Confirm password</label>
          <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required minLength={8} placeholder="Re-enter your password" className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm" />
        </div>
        {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{error}</div>}
        <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-[#7CB9E8] text-white py-3 rounded-xl font-medium hover:bg-[#5A9FCF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? "Creating account..." : <><ArrowRight size={16} /> Create account</>}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-[#6B6560]">Already have an account? <Link href="/sign-in" className="text-[#7CB9E8] hover:text-[#5A9FCF] font-medium transition-colors">Sign in</Link></p>
    </div>
  );
}
