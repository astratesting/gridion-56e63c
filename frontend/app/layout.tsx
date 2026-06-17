import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Gridion — Agency Workflow, on Autopilot",
  description:
    "Gridion is the automation-first pipeline builder for creative agencies. Connect your tools, build visual workflows, and automate client delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-[#F8F6F0] antialiased">
        {children}
      </body>
    </html>
  );
}
