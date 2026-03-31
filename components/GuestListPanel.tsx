import Link from "next/link";
import { EntryStatusChip } from "@/components/EntryStatusChip";
import type { EntryRecord } from "@/lib/types";

type GuestListPanelProps = {
  entries: EntryRecord[];
  title: string;
  compact?: boolean;
};

export function GuestListPanel({ entries, title, compact = false }: GuestListPanelProps) {
  return (
    <section className="panel">
      <div className="panel-inner" style={{ display: "grid", gap: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div style={{ display: "grid", gap: 6 }}>
            <span className="soft-label">Guest Registry</span>
            <h2 className="section-title">{title}</h2>
          </div>
          <Link className="button-ghost" href="/guest-list">
            View Full Board
          </Link>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {entries.slice(0, compact ? 4 : entries.length).map((entry, index) => (
            <Link
              key={entry.id}
              href={`/entries/${entry.id}`}
              className="muted-card"
              style={{
                padding: 16,
                display: "grid",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                <strong>
                  #{String(index + 1).padStart(2, "0")} {entry.ticketNumber}
                </strong>
                <EntryStatusChip status={entry.status} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                <span className="mono">{entry.owner}</span>
                <span style={{ color: "var(--muted)" }}>{entry.enteredAt}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}


