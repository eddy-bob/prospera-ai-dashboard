// File: pages/settings.tsx
import SettingsForm from "@/components/SettingsForm";
import { Settings, ShieldCheck } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-2xl">
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 p-6 rounded-2xl flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Account Settings
          </h1>
          <p className="text-indigo-200 text-sm">
            Update your personal info, security preferences, and integrations.
          </p>
        </div>
        <Settings className="w-10 h-10 text-indigo-300" />
      </div>

      <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg font-semibold text-neutral-200">
            User Preferences
          </h2>
        </div>
        <SettingsForm />
      </div>
    </div>
  );
}
