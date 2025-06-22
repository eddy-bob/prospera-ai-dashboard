type StatCardProps = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
      <div className="text-sm text-neutral-400 mb-2">{title}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}
