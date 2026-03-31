"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Hub" },
  { href: "/enter", label: "Enter" },
  { href: "/my", label: "My Entry" },
  { href: "/guest-list", label: "Guest List" },
];

export function TopTabs() {
  const pathname = usePathname();

  return (
    <div className="panel" style={{ padding: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
      {tabs.map((tab) => {
        const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);

        return (
          <Link
            key={tab.href}
            href={tab.href}
            className="pill"
            style={{
              background: active
                ? "linear-gradient(135deg, rgba(124,31,58,0.12), rgba(231,194,125,0.22))"
                : "rgba(255,255,255,0.72)",
              borderColor: active ? "rgba(124,31,58,0.22)" : "rgba(124,31,58,0.08)",
              color: active ? "var(--bg-velvet)" : "var(--text)",
            }}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}


