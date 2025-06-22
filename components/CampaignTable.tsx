type Campaign = {
  name: string;
  status: "Running" | "Paused" | "Completed";
  messagesSent: number;
  replies: number;
  updated: string;
};

export default function CampaignTable({
  campaigns,
}: {
  campaigns: Campaign[];
}) {
  return (
    <div className="overflow-auto rounded-xl border border-neutral-800">
      <table className="min-w-full text-sm">
        <thead className="bg-neutral-900 text-neutral-400 uppercase text-left">
          <tr>
            <th className="p-4">Campaign</th>
            <th className="p-4">Status</th>
            <th className="p-4">Messages Sent</th>
            <th className="p-4">Replies</th>
            <th className="p-4">Last Updated</th>
          </tr>
        </thead>
        <tbody className="bg-neutral-950 divide-y divide-neutral-800 text-neutral-100">
          {campaigns.map((campaign, i) => (
            <tr key={i} className="hover:bg-neutral-800 transition">
              <td className="p-4 font-medium">{campaign.name}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    campaign.status === "Running"
                      ? "bg-green-600/20 text-green-400"
                      : campaign.status === "Paused"
                      ? "bg-yellow-600/20 text-yellow-400"
                      : "bg-neutral-700 text-neutral-300"
                  }`}
                >
                  {campaign.status}
                </span>
              </td>
              <td className="p-4">{campaign.messagesSent}</td>
              <td className="p-4">{campaign.replies}</td>
              <td className="p-4">{campaign.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
