import { TopTabs } from "@/components/TopTabs";

export default function AboutPage() {
  return (
    <>
      <TopTabs />
      <section className="panel">
        <div className="panel-inner" style={{ display: "grid", gap: 18 }}>
          <span className="soft-label">About</span>
          <h1 className="section-title" style={{ fontSize: "1.9rem" }}>
            One address, one lottery entry
          </h1>
          <div className="two-column">
            <div className="muted-card" style={{ padding: 20, display: "grid", gap: 10 }}>
              <p className="eyebrow">Core Rule</p>
              <p className="section-copy">
                Each connected wallet can submit a single lottery entry. Once confirmed, the wallet is marked as joined.
              </p>
            </div>
            <div className="muted-card" style={{ padding: 20, display: "grid", gap: 10 }}>
              <p className="eyebrow">Current Chain</p>
              <p className="section-copy">
                This mini app is prepared for Base entry registration and includes a clean placeholder path for live contract reads and writes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


