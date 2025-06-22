// File: app/billing/page.tsx
import { CreditCard, BarChart } from "lucide-react";

export default function BillingPage() {
  return (
    <div className="space-y-8 w-full">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 p-6 rounded-2xl flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Billing & Usage
          </h1>
          <p className="text-indigo-200 text-sm">
            Track your plan, usage, and payment details all in one place.
          </p>
        </div>
        <BarChart className="w-10 h-10 text-indigo-300" />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-lg text-neutral-300 font-semibold mb-2">
            Current Plan
          </h2>
          <p className="text-sm text-neutral-400 mb-4">
            Free Plan — 1 campaign at a time
          </p>
          <div className="text-sm text-neutral-300 space-y-1">
            <p>
              <span className="font-medium">Messages Sent:</span> 300 / 500
            </p>
            <p>
              <span className="font-medium">Replies:</span> 85 / 150
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-neutral-300">
              Payment Info
            </h2>
            <CreditCard className="w-5 h-5 text-indigo-400" />
          </div>
          <p className="text-sm text-neutral-400">No payment method on file.</p>
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm">
            Add Payment Method
          </button>
        </div>
      </div>
    </div>
  );
}
