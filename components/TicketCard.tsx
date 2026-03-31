import Link from "next/link";
import { EntryStatusChip } from "@/components/EntryStatusChip";
import type { EntryRecord } from "@/lib/types";

type TicketCardProps = {
  variant: "hub" | "entry" | "personal";
  entry: EntryRecord | null;
  walletAddress: string;
  participantCount: number;
};

export function TicketCard({ variant, entry, walletAddress, participantCount }: TicketCardProps) {
  const titleMap = {
    hub: "Desk Snapshot",
    entry: "Confirmation Ticket",
    personal: "My Pass",
  };

  return (
    <section
      className="panel"
      style={{
        background:
          variant === "personal"
            ? "linear-gradient(180deg, rgba(47,19,33,0.98), rgba(92,31,56,0.95))"
            : "linear-gradient(180deg, rgba(255,250,244,0.92), rgba(255,255,255,0.98))",
        color: variant === "personal" ? "#fff7f1" : "var(--text)",
      }}
    >
      <div className="panel-inner" style={{ display: "grid", gap: 18 }}>
        <div style={{ display: "grid", gap: 6 }}>
          <span className="eyebrow" style={{ color: variant === "personal" ? "rgba(255,247,241,0.72)" : "var(--muted)" }}>
            {titleMap[variant]}
          </span>
          <strong style={{ fontSize: "1.4rem" }}>{entry ? entry.ticketNumber : "Awaiting Confirmation"}</strong>
        </div>

        <div
          style={{
            display: "grid",
            gap: 12,
            padding: 18,
            borderRadius: 22,
            background:
              variant === "personal"
                ? "rgba(255,247,241,0.08)"
                : "linear-gradient(145deg, rgba(124,31,58,0.08), rgba(231,194,125,0.12))",
            border:
              variant === "personal"
                ? "1px solid rgba(255,247,241,0.12)"
                : "1px solid rgba(124,31,58,0.12)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
            <EntryStatusChip status={entry?.status ?? "ready"} />
            <span className="soft-label">Participants {participantCount}</span>
          </div>
          <div>
            <p className="eyebrow" style={{ color: variant === "personal" ? "rgba(255,247,241,0.72)" : "var(--muted)" }}>
              Wallet
            </p>
            <strong className="mono">{walletAddress}</strong>
          </div>
          <div>
            <p className="eyebrow" style={{ color: variant === "personal" ? "rgba(255,247,241,0.72)" : "var(--muted)" }}>
              Registry Note
            </p>
            <p style={{ margin: 0, lineHeight: 1.55, color: variant === "personal" ? "rgba(255,247,241,0.82)" : "var(--muted)" }}>
              {entry
                ? "This wallet already holds a valid lottery registry record."
                : "Confirm entry to mint a visible record in the hall registry."}
            </p>
          </div>
        </div>

        {entry ? (
          <Link className="button-secondary" href={`/entries/${entry.id}`}>
            Open Detail
          </Link>
        ) : (
          <Link className="button-secondary" href="/enter">
            Claim Entry
          </Link>
        )}
      </div>
    </section>
  );
}


