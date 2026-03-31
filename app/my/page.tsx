import { EmptyState } from "@/components/EmptyState";
import { EntrySummaryPanel } from "@/components/EntrySummaryPanel";
import { TicketCard } from "@/components/TicketCard";
import { TopTabs } from "@/components/TopTabs";
import { getMyEntryFromAddress, getWalletSnapshot } from "@/lib/mock-data";

export default function MyEntryPage() {
  const wallet = getWalletSnapshot();
  const entry = getMyEntryFromAddress(wallet.address);

  return (
    <>
      <TopTabs />
      <section className="two-column">
        <div className="panel">
          <div className="panel-inner" style={{ display: "grid", gap: 20 }}>
            <div style={{ display: "grid", gap: 8 }}>
              <span className="soft-label">My Participation</span>
              <h1 className="section-title" style={{ fontSize: "1.92rem" }}>
                Personal entry summary
              </h1>
              <p className="section-copy">
                Check whether your wallet already holds a confirmed lottery pass.
              </p>
            </div>

            {entry ? (
              <EntrySummaryPanel
                title="Confirmed Record"
                subtitle="Your current pass"
                entry={entry}
                walletAddress={wallet.address}
              />
            ) : (
              <EmptyState
                title="No confirmed entry yet"
                copy="This wallet has not claimed a ticket. Visit the participation desk to enter."
                actionHref="/enter"
                actionLabel="Go to Enter Lottery"
              />
            )}
          </div>
        </div>

        <TicketCard
          variant="personal"
          entry={entry}
          walletAddress={wallet.address}
          participantCount={24}
        />
      </section>
    </>
  );
}


