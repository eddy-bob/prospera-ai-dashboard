// File: pages/campaigns.tsx
import CampaignTable from "@/components/CampaignTable";
import { Send } from "lucide-react";

export default function CampaignsPage() {
  return (
    <div className="space-y-8 max-w-5xl">
      <div className="bg-gradient-to-r from-purple-900 to-indigo-700 p-6 rounded-2xl flex items-center justify-between shadow-md">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Campaign Performance
          </h1>
          <p className="text-indigo-200 text-sm">
            Track message delivery, replies, and recent updates.
          </p>
        </div>
        <Send className="w-10 h-10 text-indigo-300" />
      </div>

      <CampaignTable
        campaigns={[
          {
            name: "Founders Outreach",
            status: "Running",
            messagesSent: 240,
            replies: 34,
            updated: "2 hours ago",
          },
          {
            name: "Growth Leads",
            status: "Paused",
            messagesSent: 510,
            replies: 82,
            updated: "Yesterday",
          },
          {
            name: "VC Pipeline",
            status: "Completed",
            messagesSent: 300,
            replies: 120,
            updated: "4 days ago",
          },
        ]}
      />
    </div>
  );
}
