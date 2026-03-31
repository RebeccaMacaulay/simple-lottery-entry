"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Entry Hub", note: "Start here" },
  { href: "/enter", label: "Enter Lottery", note: "Participation desk" },
  { href: "/my", label: "My Entry", note: "Personal summary" },
  { href: "/guest-list", label: "Guest List", note: "Registry board" },
  { href: "/about", label: "About", note: "One-time rule" },
];

export function SideColumnNav() {
  const pathname = usePathname();

  return (
    <div className="panel" style={{ overflow: "hidden" }}>
      <div
        style={{
          padding: 20,
          background: "linear-gradient(180deg, rgba(124,31,58,0.96), rgba(82,30,50,0.96))",
          color: "#fff7f1",
          display: "grid",
          gap: 18,
        }}
      >
        <div style={{ display: "grid", gap: 6 }}>
          <span className="eyebrow" style={{ color: "rgba(255,247,241,0.72)" }}>
            Hall Guide
          </span>
          <strong style={{ fontSize: "1.12rem" }}>Registry navigation</strong>
        </div>

        <div style={{ display: "grid", gap: 10 }}>
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "grid",
                  gap: 4,
                  padding: "14px 16px",
                  borderRadius: 18,
                  border: `1px solid ${active ? "rgba(231,194,125,0.44)" : "rgba(255,247,241,0.12)"}`,
                  background: active
                    ? "linear-gradient(135deg, rgba(231,194,125,0.2), rgba(183,110,121,0.16))"
                    : "rgba(255,247,241,0.04)",
                }}
              >
                <strong style={{ color: "#fff7f1" }}>{item.label}</strong>
                <span style={{ color: "rgba(255,247,241,0.72)", fontSize: "0.9rem" }}>{item.note}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}


