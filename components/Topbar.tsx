"use client";

import { Bell } from "lucide-react";

export function Topbar() {
  return (
    <header className="h-16 px-6 flex items-center justify-between border-b border-neutral-800 bg-neutral-950 shadow-sm">
      <div className="text-lg text-white font-semibold">
        Welcome to Prospera AI
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-neutral-800 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-neutral-300" />
          <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
        </button>

        <div className="w-8 h-8 bg-neutral-700 rounded-full flex items-center justify-center text-sm font-medium">
          ED
        </div>
      </div>
    </header>
  );
}
