export type EntryRecord = {
  id: string;
  ticketNumber: string;
  owner: string;
  status: "confirmed" | "entered" | "ready" | "already joined";
  enteredAt: string;
  note: string;
  referenceCode: string;
};


