import Link from "next/link";
import { CopyEntryButton } from "@/components/CopyEntryButton";
import { EntryStatusChip } from "@/components/EntryStatusChip";
import { TopTabs } from "@/components/TopTabs";
import { getEntryById } from "@/lib/mock-data";

export default async function EntryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = getEntryById(id);

  if (!entry) {
    return (
      <>
        <TopTabs />
        <section className="panel">
          <div className="panel-inner">
            <h1 className="section-title">Entry not found</h1>
            <p className="section-copy">This ticket does not exist in the current registry snapshot.</p>
            <Link className="button-secondary" href="/guest-list">
              Return to Guest List
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <TopTabs />
      <section className="ticket-surface stamp-reveal">
        <div className="panel-inner" style={{ display: "grid", gap: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "grid", gap: 8 }}>
              <span className="soft-label">Entry Detail</span>
              <h1 className="section-title" style={{ fontSize: "2rem" }}>
                Ticket {entry.ticketNumber}
              </h1>
              <p className="section-copy">A single raffle pass captured in the event registry.</p>
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <EntryStatusChip status={entry.status} />
              <CopyEntryButton value={entry.id} label="Copy Entry ID" />
            </div>
          </div>

          <div className="divider" />

          <div className="two-column">
            <div
              style={{
                display: "grid",
                gap: 16,
                padding: 20,
                borderRadius: 24,
                background: "rgba(255,255,255,0.66)",
                border: "1px solid rgba(124,31,58,0.12)",
              }}
            >
              <div>
                <p className="eyebrow">Owner</p>
                <strong className="mono" style={{ fontSize: "1.05rem" }}>
                  {entry.owner}
                </strong>
              </div>
              <div>
                <p className="eyebrow">Confirmed At</p>
                <strong>{entry.enteredAt}</strong>
              </div>
              <div>
                <p className="eyebrow">Registry Note</p>
                <p className="section-copy">{entry.note}</p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gap: 14,
                padding: 20,
                borderRadius: 24,
                background: "linear-gradient(180deg, rgba(47,19,33,0.96), rgba(82,30,50,0.94))",
                color: "#fff7f1",
              }}
            >
              <p className="eyebrow" style={{ color: "rgba(255,247,241,0.72)" }}>
                Entry Code
              </p>
              <strong className="mono" style={{ fontSize: "1.55rem", letterSpacing: "0.08em" }}>
                {entry.referenceCode}
              </strong>
              <p style={{ margin: 0, color: "rgba(255,247,241,0.76)", lineHeight: 1.6 }}>
                Keep this detail page ready for confirmation and event desk review.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <CopyEntryButton value={entry.referenceCode} label="Copy Code" />
                <Link className="button-secondary" href="/my">
                  Back to My Entry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


