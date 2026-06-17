'use client';

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  }

  return (
    <div className="gradient-card border border-[#EAE6DE] rounded-2xl p-8">
      <h2 className="text-2xl font-accent font-bold text-[#2D2A26] mb-1">
        Welcome back
      </h2>
      <p className="text-sm text-[#6B6560] mb-8">
        Sign in to your Gridion account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#2D2A26] mb-1.5">Email address</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@agency.com" className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-[#2D2A26] mb-1.5">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter your password" className="w-full px-4 py-2.5 rounded-xl border border-[#EAE6DE] bg-white text-[#2D2A26] placeholder-[#9E9892] focus:outline-none focus:ring-2 focus:ring-[#7CB9E8]/30 focus:border-[#7CB9E8] transition-all text-sm" />
        </div>

        {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{error}</div>}

        <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 bg-[#7CB9E8] text-white py-3 rounded-xl font-medium hover:bg-[#5A9FCF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? "Signing in..." : <><ArrowRight size={16} /> Sign in</>}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-[#6B6560]">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="text-[#7CB9E8] hover:text-[#5A9FCF] font-medium transition-colors">Sign up</Link>
      </p>
    </div>
  );
}
