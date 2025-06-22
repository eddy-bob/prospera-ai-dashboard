// File: components/LeadChart.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "Mon", replies: 30 },
  { name: "Tue", replies: 45 },
  { name: "Wed", replies: 38 },
  { name: "Thu", replies: 50 },
  { name: "Fri", replies: 22 },
  { name: "Sat", replies: 18 },
  { name: "Sun", replies: 10 },
];

export default function LeadChart() {
  return (
    <div className="w-full h-72 bg-neutral-900 p-4 rounded-2xl border border-neutral-800">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f1f1f", borderColor: "#333" }}
          />
          <Bar dataKey="replies" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
