import Link from "next/link";

type EmptyStateProps = {
  title: string;
  copy: string;
  actionHref: string;
  actionLabel: string;
};

export function EmptyState({ title, copy, actionHref, actionLabel }: EmptyStateProps) {
  return (
    <div className="muted-card" style={{ padding: 22, display: "grid", gap: 12 }}>
      <strong style={{ fontSize: "1.15rem" }}>{title}</strong>
      <p className="section-copy">{copy}</p>
      <Link className="button-primary" href={actionHref}>
        {actionLabel}
      </Link>
    </div>
  );
}


