import Link from "next/link";
import { EntryStatusChip } from "@/components/EntryStatusChip";
import type { EntryRecord } from "@/lib/types";

type EntrySummaryPanelProps = {
  title: string;
  subtitle: string;
  entry: EntryRecord | null;
  walletAddress: string;
};

export function EntrySummaryPanel({ title, subtitle, entry, walletAddress }: EntrySummaryPanelProps) {
  return (
    <section className="panel">
      <div className="panel-inner" style={{ display: "grid", gap: 18 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <span className="soft-label">{subtitle}</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div
          style={{
            display: "grid",
            gap: 14,
            padding: 18,
            borderRadius: 22,
            border: "1px solid rgba(124,31,58,0.12)",
            background: "rgba(255,255,255,0.72)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <EntryStatusChip status={entry?.status ?? "ready"} />
            <span className="soft-label">{entry ? entry.ticketNumber : "No ticket yet"}</span>
          </div>
          <div>
            <p className="eyebrow">Wallet</p>
            <strong className="mono">{walletAddress}</strong>
          </div>
          <div>
            <p className="eyebrow">Time</p>
            <strong>{entry?.enteredAt ?? "Waiting for confirmation"}</strong>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="button-secondary" href={entry ? `/entries/${entry.id}` : "/enter"}>
              {entry ? "View Entry Detail" : "Enter Lottery"}
            </Link>
            <Link className="button-ghost" href="/guest-list">
              Open Guest List
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


