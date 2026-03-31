import { ActionBar } from "@/components/ActionBar";
import { EntryPanel } from "@/components/EntryPanel";
import { EntrySummaryPanel } from "@/components/EntrySummaryPanel";
import { GuestListPanel } from "@/components/GuestListPanel";
import { TicketCard } from "@/components/TicketCard";
import { TopTabs } from "@/components/TopTabs";
import { getLatestEntries, getMyEntryFromAddress, getWalletSnapshot } from "@/lib/mock-data";

export default function HomePage() {
  const wallet = getWalletSnapshot();
  const currentEntry = getMyEntryFromAddress(wallet.address);
  const latestEntries = getLatestEntries();

  return (
    <>
      <TopTabs />
      <section className="hero-grid">
        <EntryPanel
          title="Entry Hall"
          subtitle="Quick registration desk for one-time lottery access."
          statusLabel={currentEntry ? "Already Joined" : "Ready"}
          highlightTitle="One pass per address"
          highlightCopy="Connect a wallet, confirm your entry, and keep your ticket ready."
          primaryHref="/enter"
          primaryLabel={currentEntry ? "Review Entry" : "Enter Lottery"}
          secondaryHref="/my"
          secondaryLabel="View My Entry"
        />
        <TicketCard
          variant="hub"
          entry={currentEntry}
          walletAddress={wallet.address}
          participantCount={latestEntries.length}
        />
      </section>

      <section className="two-column">
        <EntrySummaryPanel
          title="Current Status"
          subtitle="Your desk summary"
          entry={currentEntry}
          walletAddress={wallet.address}
        />
        <ActionBar />
      </section>

      <GuestListPanel entries={latestEntries} title="Registry Snapshot" compact />
    </>
  );
}


