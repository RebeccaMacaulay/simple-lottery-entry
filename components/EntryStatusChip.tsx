type EntryStatusChipProps = {
  status: string;
};

const statusStyles: Record<string, { bg: string; color: string; border: string }> = {
  ready: { bg: "rgba(231,194,125,0.22)", color: "#6b4a15", border: "rgba(201,169,110,0.35)" },
  entered: { bg: "rgba(124,31,58,0.12)", color: "#7c1f3a", border: "rgba(124,31,58,0.2)" },
  confirmed: { bg: "rgba(29,122,84,0.12)", color: "#166946", border: "rgba(29,122,84,0.22)" },
  "already joined": { bg: "rgba(183,110,121,0.16)", color: "#8e4958", border: "rgba(183,110,121,0.25)" },
  "one-time": { bg: "rgba(47,19,33,0.08)", color: "#41222f", border: "rgba(47,19,33,0.14)" },
  base: { bg: "rgba(0,82,255,0.1)", color: "#0038c7", border: "rgba(0,82,255,0.16)" },
  "registry live": { bg: "rgba(124,31,58,0.08)", color: "#7c1f3a", border: "rgba(124,31,58,0.14)" },
};

export function EntryStatusChip({ status }: EntryStatusChipProps) {
  const normalized = status.toLowerCase();
  const style = statusStyles[normalized] ?? statusStyles.ready;

  return (
    <span
      className="pill"
      style={{
        background: style.bg,
        color: style.color,
        borderColor: style.border,
        minHeight: 36,
      }}
    >
      {status}
    </span>
  );
}


