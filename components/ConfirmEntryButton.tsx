"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { lotteryContractAbi, lotteryContractAddress } from "@/lib/contract";
import { trackTransaction } from "@/utils/track";

type SimulatedState = "idle" | "mock-confirmed";

export function ConfirmEntryButton() {
  const { address, isConnected } = useAccount();
  const [mockState, setMockState] = useState<SimulatedState>("idle");
  const [mockHash, setMockHash] = useState<string | null>(null);
  const { data: hash, isPending, writeContract } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
    },
  });

  const activeHash = hash ?? mockHash;

  useEffect(() => {
    if (!receipt.data?.transactionHash || !address) {
      return;
    }

    trackTransaction("app-025", "simple-lottery-entry", address, receipt.data.transactionHash);
  }, [address, receipt.data?.transactionHash]);

  async function handleConfirm() {
    if (!isConnected) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      const txHash = "0x4f55a32d1bc4391a0d5b503f0d25d7a660fdc80f8c7fce1f1dfd1b93b75f4b2a";
      setMockHash(txHash);
      setMockState("mock-confirmed");
      trackTransaction(
        "app-025",
        "simple-lottery-entry",
        address ?? "0x0000000000000000000000000000000000000000",
        txHash,
      );
      return;
    }

    writeContract({
      abi: lotteryContractAbi,
      address: lotteryContractAddress,
      functionName: "enter",
    });
  }

  const stateLabel = useMemo(() => {
    if (receipt.isSuccess || mockState === "mock-confirmed") return "Entry Confirmed";
    if (isPending || receipt.isLoading) return "Submitting Entry";
    return "Enter Lottery";
  }, [isPending, mockState, receipt.isLoading, receipt.isSuccess]);

  const statusCopy = useMemo(() => {
    if (receipt.isSuccess || mockState === "mock-confirmed") return "The registry accepted your entry.";
    if (isPending || receipt.isLoading) return "Confirmation is being prepared.";
    return "One address can claim only one ticket.";
  }, [isPending, mockState, receipt.isLoading, receipt.isSuccess]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <button
        type="button"
        className="button-primary"
        onClick={handleConfirm}
        disabled={isPending || receipt.isLoading || receipt.isSuccess || mockState === "mock-confirmed"}
        style={{ minHeight: 62, fontSize: "1.02rem" }}
      >
        {stateLabel}
      </button>

      <div
        style={{
          display: "grid",
          gap: 8,
          padding: 16,
          borderRadius: 18,
          border: "1px solid rgba(124,31,58,0.12)",
          background: "rgba(255,255,255,0.74)",
        }}
      >
        <strong>{statusCopy}</strong>
        {activeHash ? (
          <div style={{ display: "grid", gap: 8 }}>
            <span className="mono" style={{ fontSize: "0.88rem" }}>
              {activeHash}
            </span>
            <Link className="button-secondary" href="/entries/entry-001">
              View Entry Detail
            </Link>
          </div>
        ) : (
          <span className="section-copy">Use a wallet to send the live transaction, or preview the flow in mock mode.</span>
        )}
      </div>
    </div>
  );
}


