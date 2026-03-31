import { GuestListPanel } from "@/components/GuestListPanel";
import { TopTabs } from "@/components/TopTabs";
import { getLatestEntries } from "@/lib/mock-data";

export default function GuestListPage() {
  const entries = getLatestEntries();

  return (
    <>
      <TopTabs />
      <section className="panel">
        <div className="panel-inner" style={{ display: "grid", gap: 20 }}>
          <div style={{ display: "grid", gap: 8 }}>
            <span className="soft-label">Guest List</span>
            <h1 className="section-title" style={{ fontSize: "1.9rem" }}>
              Registry board
            </h1>
            <p className="section-copy">A lightweight view of recent confirmed entries.</p>
          </div>
          <GuestListPanel entries={entries} title="Recent Entries" />
        </div>
      </section>
    </>
  );
}


