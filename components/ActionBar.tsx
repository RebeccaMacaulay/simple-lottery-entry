import Link from "next/link";

export function ActionBar() {
  return (
    <section
      className="panel"
      style={{
        background: "linear-gradient(180deg, rgba(47,19,33,0.98), rgba(92,31,56,0.95))",
        color: "#fff7f1",
      }}
    >
      <div className="panel-inner" style={{ display: "grid", gap: 16 }}>
        <span className="soft-label">Quick Actions</span>
        <h2 className="section-title" style={{ color: "#fff7f1" }}>
          Entry control rail
        </h2>
        <p style={{ margin: 0, color: "rgba(255,247,241,0.76)", lineHeight: 1.6 }}>
          Move between confirmation, personal review, and the current guest list without losing your place.
        </p>
        <div style={{ display: "grid", gap: 10 }}>
          <Link className="button-secondary" href="/enter">
            Open Participation Desk
          </Link>
          <Link className="button-secondary" href="/my">
            Review My Entry
          </Link>
        </div>
      </div>
    </section>
  );
}


