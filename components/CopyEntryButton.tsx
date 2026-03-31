"use client";

import { useState } from "react";

type CopyEntryButtonProps = {
  value: string;
  label: string;
};

export function CopyEntryButton({ value, label }: CopyEntryButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" className="button-secondary" onClick={handleCopy}>
      {copied ? "Copied" : label}
    </button>
  );
}


