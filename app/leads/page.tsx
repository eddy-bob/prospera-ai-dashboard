// File: pages/leads.tsx
import LeadChart from "@/components/LeadChart";
import { BarChart3 } from "lucide-react";

export default function LeadsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 p-6 rounded-2xl flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Leads Analytics
          </h1>
          <p className="text-indigo-200 text-sm">
            Monitor reply trends across the week and optimize engagement.
          </p>
        </div>
        <BarChart3 className="w-10 h-10 text-indigo-300" />
      </div>

      <LeadChart />
    </div>
  );
}
