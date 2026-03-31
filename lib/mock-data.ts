import type { EntryRecord } from "@/lib/types";

const walletAddress = "0x92D4A0Db0C7d1aC5AE2a3D3144f5c6B4134A4210";

const entries: EntryRecord[] = [
  {
    id: "entry-001",
    ticketNumber: "PASS-001",
    owner: walletAddress,
    status: "confirmed",
    enteredAt: "Mar 31, 2026 · 14:22",
    note: "Primary raffle pass confirmed for this wallet.",
    referenceCode: "SLE-7H4A-01",
  },
  {
    id: "entry-002",
    ticketNumber: "PASS-002",
    owner: "0x7F2e5398E2645fC235F4f1c5798F7C5428843440",
    status: "confirmed",
    enteredAt: "Mar 31, 2026 · 13:58",
    note: "Guest list record ready for verification.",
    referenceCode: "SLE-7H4A-02",
  },
  {
    id: "entry-003",
    ticketNumber: "PASS-003",
    owner: "0x6b6302d235971Ddb5A56AcAA9A8A4624A8B8a538",
    status: "confirmed",
    enteredAt: "Mar 31, 2026 · 13:41",
    note: "Entry sealed and visible in the registry board.",
    referenceCode: "SLE-7H4A-03",
  },
  {
    id: "entry-004",
    ticketNumber: "PASS-004",
    owner: "0x4E12A3AE2D4496e5A2C89e0f454F5fBC1294c9f1",
    status: "confirmed",
    enteredAt: "Mar 31, 2026 · 13:05",
    note: "Confirmation stamp applied at the entry desk.",
    referenceCode: "SLE-7H4A-04",
  },
];

export function getWalletSnapshot() {
  return {
    address: walletAddress,
  };
}

export function getLatestEntries() {
  return entries;
}

export function getEntryById(id: string) {
  return entries.find((entry) => entry.id === id) ?? null;
}

export function getMyEntryFromAddress(address?: string) {
  if (!address) {
    return null;
  }

  return entries.find((entry) => entry.owner.toLowerCase() === address.toLowerCase()) ?? null;
}


