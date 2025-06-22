// File: app/upgrade/page.tsx
import { Sparkles } from "lucide-react";

export default function UpgradePage() {
  return (
    <div className="space-y-10 w-full">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 p-6 rounded-2xl flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Choose the Right Plan for You
          </h1>
          <p className="text-indigo-200 text-sm">
            Upgrade to access premium features that scale with your business.
          </p>
        </div>
        <Sparkles className="w-10 h-10 text-indigo-300" />
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-lg text-neutral-300 font-semibold mb-2">
            Free Plan
          </h2>
          <ul className="text-sm text-neutral-400 space-y-1">
            <li>✅ 1 active campaign</li>
            <li>✅ 500 messages/month</li>
            <li>✅ Basic analytics</li>
          </ul>
        </div>

        <div className="relative bg-indigo-950 border border-indigo-700 rounded-xl p-6 shadow-lg">
          <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
            Popular
          </span>
          <h2 className="text-lg font-semibold text-indigo-300 mb-2">
            Starter — $75/mo
          </h2>
          <ul className="text-sm text-indigo-200 space-y-1">
            <li>✅ 1,000 Sending Credits</li>
            <li>✅ Advanced Research Agent</li>
            <li>✅ 3 Campaigns/Account</li>
            <li>✅ CRM Integrations</li>
            <li>✅ API Access</li>
            <li>✅ Customer Success Manager</li>
          </ul>
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm w-full transition-all duration-200">
            Upgrade Now
          </button>
        </div>

        <div className="bg-indigo-950 border border-indigo-700 rounded-xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-indigo-300 mb-2">
            Scale Plan — $299/mo
          </h2>
          <ul className="text-sm text-indigo-200 space-y-1">
            <li>✅ 10,000 Sending Credits</li>
            <li>✅ Advanced Research Agent</li>
            <li>✅ 5 Campaigns/Account</li>
            <li>✅ CRM Integrations</li>
            <li>✅ API Access</li>
            <li>✅ Dedicated Success Manager</li>
          </ul>
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm w-full transition-all duration-200">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}
