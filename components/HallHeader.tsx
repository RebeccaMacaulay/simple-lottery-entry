"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { WalletButton } from "@/components/WalletButton";

const navItems = [
  { href: "/", label: "Hub" },
  { href: "/enter", label: "Enter" },
  { href: "/my", label: "My Entry" },
  { href: "/guest-list", label: "Guest List" },
  { href: "/about", label: "About" },
];

export function HallHeader() {
  const pathname = usePathname();

  return (
    <header
      className="panel"
      style={{
        marginBottom: 20,
        background: "linear-gradient(145deg, rgba(47,19,33,0.97), rgba(124,31,58,0.96))",
        color: "#fff7f1",
        borderColor: "rgba(231,194,125,0.18)",
      }}
    >
      <div className="panel-inner" style={{ display: "grid", gap: 18, paddingBlock: 16 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ display: "grid", gap: 4 }}>
            <span className="eyebrow" style={{ color: "rgba(255,247,241,0.7)" }}>
              Base Mini App
            </span>
            <strong style={{ fontSize: "1.24rem", letterSpacing: "0.02em" }}>
              simple-lottery-entry
            </strong>
          </Link>
          <WalletButton />
        </div>

        <nav style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="pill"
                style={{
                  borderColor: active ? "rgba(231,194,125,0.5)" : "rgba(255,247,241,0.12)",
                  background: active ? "rgba(231,194,125,0.16)" : "rgba(255,247,241,0.06)",
                  color: "#fff7f1",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


