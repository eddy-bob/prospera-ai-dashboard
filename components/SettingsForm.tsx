"use client";

import { useState } from "react";

export default function SettingsForm() {
  const [email, setEmail] = useState("user@prospera.ai");
  const [name, setName] = useState("Eddy Madu");
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <form className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 space-y-4">
      <div>
        <label className="block text-sm text-neutral-400 mb-1">Full Name</label>
        <input
          type="text"
          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-1">
          Email Address
        </label>
        <input
          type="email"
          className="w-full p-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="notifications"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
          className="accent-indigo-500"
        />
        <label htmlFor="notifications" className="text-sm text-neutral-300">
          Enable email notifications
        </label>
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm"
      >
        Save Changes
      </button>
    </form>
  );
}
