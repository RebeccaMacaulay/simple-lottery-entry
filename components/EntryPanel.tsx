import Link from "next/link";
import { EntryStatusChip } from "@/components/EntryStatusChip";

type EntryPanelProps = {
  title: string;
  subtitle: string;
  statusLabel: string;
  highlightTitle: string;
  highlightCopy: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export function EntryPanel({
  title,
  subtitle,
  statusLabel,
  highlightTitle,
  highlightCopy,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: EntryPanelProps) {
  return (
    <section className="ticket-surface stamp-reveal">
      <div className="panel-inner" style={{ display: "grid", gap: 20 }}>
        <div style={{ display: "grid", gap: 8 }}>
          <span className="soft-label">Entry Hub</span>
          <h1 className="section-title" style={{ fontSize: "2.1rem" }}>
            {title}
          </h1>
          <p className="section-copy" style={{ maxWidth: 560 }}>
            {subtitle}
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <EntryStatusChip status={statusLabel.toLowerCase()} />
          <EntryStatusChip status="one-time" />
          <EntryStatusChip status="registry live" />
        </div>

        <div
          style={{
            display: "grid",
            gap: 10,
            padding: 18,
            borderRadius: 22,
            background: "linear-gradient(135deg, rgba(124,31,58,0.1), rgba(231,194,125,0.16))",
            border: "1px solid rgba(124,31,58,0.12)",
          }}
        >
          <p className="eyebrow">Main Rule</p>
          <strong style={{ fontSize: "1.2rem" }}>{highlightTitle}</strong>
          <p className="section-copy">{highlightCopy}</p>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="button-primary" href={primaryHref}>
            {primaryLabel}
          </Link>
          <Link className="button-secondary" href={secondaryHref}>
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}


