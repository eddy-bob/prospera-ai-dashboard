"use client";

import { LayoutDashboard, Send, Users, Mail, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Campaigns", href: "/campaigns", icon: Send },
  { name: "Leads", href: "/leads", icon: Users },
  { name: "Messages", href: "/messages", icon: Mail },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathName = usePathname();
  return (
    <aside className="w-64 h-auto min-h-screen bg-neutral-950 border-r border-neutral-800 p-6 flex flex-col">
      <div className="text-2xl flex gap-2 text-white font-bold mb-10 tracking-wide">
        <Image alt="app logo" src="/logo.avif" width={40} height={40} />

        <p>
          Prospera<span className="text-indigo-500">AI</span>
        </p>
      </div>

      <nav className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = pathName === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                isActive
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-neutral-800 text-neutral-300"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
