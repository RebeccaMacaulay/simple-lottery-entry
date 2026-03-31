import { ConfirmEntryButton } from "@/components/ConfirmEntryButton";
import { EntryStatusChip } from "@/components/EntryStatusChip";
import { TicketCard } from "@/components/TicketCard";
import { TopTabs } from "@/components/TopTabs";
import { getMyEntryFromAddress, getWalletSnapshot } from "@/lib/mock-data";

export default function EnterPage() {
  const wallet = getWalletSnapshot();
  const currentEntry = getMyEntryFromAddress(wallet.address);

  return (
    <>
      <TopTabs />
      <section className="panel ticket-surface stamp-reveal">
        <div className="panel-inner" style={{ display: "grid", gap: 20 }}>
          <div style={{ display: "grid", gap: 10 }}>
            <span className="soft-label">Participation Desk</span>
            <h1 className="section-title" style={{ fontSize: "2rem" }}>
              Confirm your lottery pass
            </h1>
            <p className="section-copy" style={{ maxWidth: 620 }}>
              One address can enter once. Your confirmation will create a single registry record on Base.
            </p>
          </div>

          <div className="two-column">
            <div className="muted-card" style={{ padding: 20, display: "grid", gap: 18 }}>
              <div style={{ display: "grid", gap: 8 }}>
                <p className="eyebrow">Entry Rule</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <EntryStatusChip status={currentEntry ? "already joined" : "ready"} />
                  <EntryStatusChip status="one-time" />
                  <EntryStatusChip status="base" />
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gap: 8,
                  padding: 18,
                  borderRadius: 20,
                  background: "linear-gradient(145deg, rgba(124,31,58,0.08), rgba(231,194,125,0.1))",
                  border: "1px solid rgba(124,31,58,0.1)",
                }}
              >
                <p className="eyebrow">Connected Wallet</p>
                <strong className="mono">{wallet.address}</strong>
                <p className="section-copy">
                  {currentEntry
                    ? "This wallet already holds a confirmed ticket."
                    : "This wallet is ready to claim a lottery entry."}
                </p>
              </div>

              <ConfirmEntryButton />
            </div>

            <TicketCard
              variant="entry"
              entry={currentEntry}
              walletAddress={wallet.address}
              participantCount={24}
            />
          </div>
        </div>
      </section>
    </>
  );
}


