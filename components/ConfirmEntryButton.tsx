"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { lotteryContractAbi, lotteryContractAddress } from "@/lib/contract";
import { builderCodeSuffix } from "@/lib/wagmi";
import { trackTransaction } from "@/utils/track";

export function ConfirmEntryButton() {
  const { address, isConnected } = useAccount();
  const [message, setMessage] = useState("One address can claim only one ticket.");
  const { data: hash, isPending, writeContract, error, reset } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({
    hash,
    query: {
      enabled: Boolean(hash),
    },
  });

  useEffect(() => {
    if (!receipt.data?.transactionHash || !address) {
      return;
    }

    setMessage("The registry accepted your entry.");
    trackTransaction("app-025", "simple-lottery-entry", address, receipt.data.transactionHash);
  }, [address, receipt.data?.transactionHash]);

  useEffect(() => {
    if (!error) {
      return;
    }

    const fallbackMessage = error instanceof Error ? error.message : "Transaction could not be completed.";
    setMessage(fallbackMessage);
  }, [error]);

  function handleConfirm() {
    if (!isConnected) {
      setMessage("Connect a wallet to send a live Base transaction.");
      return;
    }

    reset();
    setMessage("Confirmation is being prepared.");

    writeContract({
      abi: lotteryContractAbi,
      address: lotteryContractAddress,
      functionName: "enter",
      dataSuffix: builderCodeSuffix,
    });
  }

  const stateLabel = useMemo(() => {
    if (receipt.isSuccess) return "Entry Confirmed";
    if (isPending || receipt.isLoading) return "Submitting Entry";
    return isConnected ? "Enter Lottery" : "Connect Wallet First";
  }, [isConnected, isPending, receipt.isLoading, receipt.isSuccess]);

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <button
        type="button"
        className="button-primary"
        onClick={handleConfirm}
        disabled={isPending || receipt.isLoading || receipt.isSuccess}
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
        <strong>{message}</strong>
        {hash ? (
          <div style={{ display: "grid", gap: 8 }}>
            <span className="mono" style={{ fontSize: "0.88rem" }}>
              {hash}
            </span>
            <Link className="button-secondary" href="/entries/entry-001">
              View Entry Detail
            </Link>
          </div>
        ) : (
          <span className="section-copy">Live transaction tracking starts only after a successful onchain confirmation.</span>
        )}
      </div>
    </div>
  );
}
