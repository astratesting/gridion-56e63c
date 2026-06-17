'use client';

import Link from "next/link";
import {
  Workflow,
  Zap,
  MessageSquareText,
  FolderOpen,
  BarChart3,
  LayoutDashboard,
  ArrowRight,
  Check,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const features = [
  { icon: Workflow, title: "Visual Flow Builder", description: "Drag and drop to build pipelines that mirror your agency's exact creative process. No code required." },
  { icon: Zap, title: "Smart Automations", description: "Auto-trigger task assignments, deadline updates, and status changes when clients submit feedback." },
  { icon: MessageSquareText, title: "Client Approval Hub", description: "Clients review, comment, and approve in one place. No more chasing feedback across email threads." },
  { icon: FolderOpen, title: "File Versioning", description: "Every revision tracked automatically. Your team always works on the latest version, never the wrong one." },
  { icon: BarChart3, title: "Real-time Analytics", description: "See pipeline bottlenecks, approval turnaround, and team utilization at a glance." },
  { icon: LayoutDashboard, title: "White-label Dashboards", description: "Give each client their own branded portal to track project progress and approvals." },
];

const pricingTiers = [
  { name: "Starter", price: "$29", period: "/seat/month", description: "For small agencies getting started with automation.", features: ["Up to 10 active pipelines", "Basic flow builder", "Email notifications", "5 client portals", "Standard analytics"], cta: "Start Free Trial", href: "/sign-up", featured: false },
  { name: "Growth", price: "$49", period: "/seat/month", description: "For growing agencies that need unlimited automation.", features: ["Unlimited pipelines", "Advanced flow builder", "Smart automations", "Unlimited client portals", "Advanced analytics", "File versioning", "Priority support"], cta: "Start Free Trial", href: "/sign-up", featured: true },
  { name: "Enterprise", price: "Custom", period: "", description: "For large agencies with custom workflow needs.", features: ["Everything in Growth", "White-label dashboards", "Custom integrations", "Dedicated account manager", "SLA guarantee", "SSO & advanced security"], cta: "Contact Sales", href: "mailto:sales@gridion.io", featured: false },
];

const steps = [
  { number: "01", title: "Connect your tools", description: "Link Google Drive, Slack, email, and your existing tools. Gridion pulls everything into one workspace." },
  { number: "02", title: "Build visual pipelines", description: "Drag and drop stages to match your agency's workflow: Briefing, Creation, Review, Approval, Delivery." },
  { number: "03", title: "Automate delivery", description: "Set triggers and rules. When a client approves, the next stage auto-fires. Your team focuses on creative work." },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className="border-b border-[#EAE6DE] bg-[#F8F6F0]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7CB9E8] to-[#B2D8D8] flex items-center justify-center"><span className="text-white font-bold text-sm">G</span></div>
              <span className="font-accent text-xl font-semibold text-[#2D2A26]">Gridion</span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/sign-in" className="text-sm text-[#6B6560] hover:text-[#2D2A26] transition-colors px-3 py-2">Sign In</Link>
              <Link href="/sign-up" className="text-sm bg-[#7CB9E8] text-white px-4 py-2 rounded-xl hover:bg-[#5A9FCF] transition-colors font-medium">Start Free Trial</Link>
            </div>
            <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#EAE6DE] bg-[#F8F6F0]">
            <div className="px-4 py-4 space-y-3">
              <Link href="/sign-in" className="block text-sm text-[#6B6560] hover:text-[#2D2A26] py-2">Sign In</Link>
              <Link href="/sign-up" className="block text-sm bg-[#7CB9E8] text-white px-4 py-2 rounded-xl text-center">Start Free Trial</Link>
            </div>
          </div>
        )}
      </nav>

      <section className="gradient-hero py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm text-[#6B6560] mb-8"><Zap size={14} className="text-[#7CB9E8]" /> Automation-first pipeline builder for creative agencies</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-accent font-bold text-[#2D2A26] tracking-tight max-w-3xl mx-auto leading-tight">Your agency&apos;s workflow, <span className="text-[#7CB9E8]">on autopilot</span></h1>
          <p className="mt-6 text-lg text-[#6B6560] max-w-2xl mx-auto leading-relaxed">Connect your tools, build visual pipelines, and automate client delivery. Gridion replaces the chaos of Trello, email, and Google Drive with one calm, intelligent workspace.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sign-up" className="inline-flex items-center gap-2 bg-[#7CB9E8] text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-[#5A9FCF] transition-colors">Start Free Trial <ArrowRight size={18} /></Link>
            <Link href="#features" className="inline-flex items-center gap-2 border border-[#B2D8D8] text-[#2D2A26] px-8 py-3.5 rounded-xl text-base font-medium hover:bg-white/50 transition-colors">See How It Works</Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-accent font-bold text-[#2D2A26]">Everything your agency needs</h2><p className="mt-4 text-lg text-[#6B6560] max-w-2xl mx-auto">Purpose-built for creative workflows, not adapted from software project management tools.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="gradient-card border border-[#EAE6DE] rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4ECEC] to-[#B8D9F0] flex items-center justify-center mb-5"><feature.icon size={24} className="text-[#5A9FCF]" /></div>
                <h3 className="text-lg font-semibold text-[#2D2A26] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-accent font-bold text-[#2D2A26]">How it works</h2><p className="mt-4 text-lg text-[#6B6560] max-w-2xl mx-auto">Go from tool chaos to automated calm in three steps.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.number} className="text-center relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7CB9E8] to-[#B2D8D8] flex items-center justify-center mx-auto mb-6"><span className="text-white font-bold text-xl">{step.number}</span></div>
                <h3 className="text-lg font-semibold text-[#2D2A26] mb-3">{step.title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{step.description}</p>
                {i < steps.length - 1 && <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)]"><div className="border-t-2 border-dashed border-[#D4ECEC] w-full" /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl sm:text-4xl font-accent font-bold text-[#2D2A26]">Simple, transparent pricing</h2><p className="mt-4 text-lg text-[#6B6560] max-w-2xl mx-auto">Start free. Upgrade when you need more power. No hidden fees.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier) => (
              <div key={tier.name} className={`rounded-2xl border p-8 ${tier.featured ? "border-[#7CB9E8] bg-gradient-to-b from-[#F8F6F0] to-white ring-2 ring-[#7CB9E8]/20" : "border-[#EAE6DE] bg-white"}`}>
                {tier.featured && <div className="inline-block bg-[#7CB9E8] text-white text-xs font-medium px-3 py-1 rounded-full mb-4">Most Popular</div>}
                <h3 className="text-xl font-semibold text-[#2D2A26]">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1"><span className="text-4xl font-bold text-[#2D2A26]">{tier.price}</span>{tier.period && <span className="text-sm text-[#6B6560]">{tier.period}</span>}</div>
                <p className="mt-2 text-sm text-[#6B6560]">{tier.description}</p>
                <ul className="mt-6 space-y-3">{tier.features.map((f) => (<li key={f} className="flex items-start gap-2 text-sm text-[#2D2A26]"><Check size={16} className="text-[#B2D8D8] mt-0.5 flex-shrink-0" />{f}</li>))}</ul>
                <Link href={tier.href} className={`mt-8 block text-center py-3 rounded-xl text-sm font-medium transition-colors ${tier.featured ? "bg-[#7CB9E8] text-white hover:bg-[#5A9FCF]" : "border border-[#B2D8D8] text-[#2D2A26] hover:bg-[#F8F6F0]"}`}>{tier.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-[#9E9892] mb-4">Built for agencies that demand better</p>
          <p className="text-[#6B6560] max-w-xl mx-auto text-sm">Gridion is purpose-built for creative teams who are tired of forcing generic project management tools to handle iterative review cycles, client approvals, and asset versioning.</p>
        </div>
      </section>

      <section className="py-24 sm:py-32 gradient-hero">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-accent font-bold text-[#2D2A26]">Ready to automate your agency?</h2>
          <p className="mt-4 text-lg text-[#6B6560]">Join the agencies turning chaotic workflows into calm, automated pipelines. Start your free trial today.</p>
          <div className="mt-8"><Link href="/sign-up" className="inline-flex items-center gap-2 bg-[#7CB9E8] text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-[#5A9FCF] transition-colors">Start Free Trial <ArrowRight size={18} /></Link></div>
          <p className="mt-4 text-sm text-[#9E9892]">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      <footer className="bg-[#2D2A26] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7CB9E8] to-[#B2D8D8] flex items-center justify-center"><span className="text-white font-bold text-sm">G</span></div><span className="font-accent text-xl font-semibold">Gridion</span></div>
            <div className="flex gap-8 text-sm text-[#9E9892]">
              <Link href="/sign-in" className="hover:text-white transition-colors">Sign In</Link>
              <Link href="/sign-up" className="hover:text-white transition-colors">Sign Up</Link>
              <a href="mailto:hello@gridion.io" className="hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-sm text-[#6B6560]">&copy; {new Date().getFullYear()} Gridion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
