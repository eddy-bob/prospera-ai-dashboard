// File: app/page.tsx
import StatCard from "@/components/StatCard";
import Link from "next/link";
import { Rocket } from "lucide-react";

const stats = [
  { title: "Total Campaigns", value: "12" },
  { title: "Messages Sent", value: "4,567" },
  { title: "Replies Received", value: "891" },
  { title: "Open Rate", value: "58%" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 p-6 rounded-2xl flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">
            Welcome to Prospera AI
          </h1>
          <p className="text-indigo-200 text-sm">
            Your smart outreach dashboard — track, engage, and grow.
          </p>
        </div>
        <Rocket className="w-10 h-10 text-indigo-300" />
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} title={stat.title} value={stat.value} />
        ))}
      </section>

      <section className="bg-neutral-900 text-neutral-300  border border-neutral-800 rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Latest Activity</h2>
        <ul className="space-y-2 text-sm text-neutral-300">
          <li>✅ New campaign &quot;Investor Blitz&quot; launched</li>
          <li>📨 120 messages sent to Startup Founders group</li>
          <li>💬 18 replies received in the last 24 hours</li>
          <li>
            <Link href="/campaigns" className="text-indigo-400 hover:underline">
              View full activity history →
            </Link>
          </li>
        </ul>
      </section>

      <section className="bg-indigo-900/20 border border-indigo-700 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h2 className="text-lg font-semibold mb-1">
            You&apos;re on the Free Plan
          </h2>
          <p className="text-sm text-neutral-400">
            Upgrade to unlock unlimited campaigns, advanced targeting, and
            priority support.
          </p>
        </div>
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Link
            href="/upgrade"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Upgrade Plan
          </Link>
          <Link
            href="/billing"
            className="inline-block bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            View Billing
          </Link>
        </div>
      </section>
    </div>
  );
}
