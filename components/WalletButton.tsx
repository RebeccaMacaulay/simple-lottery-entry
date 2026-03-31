"use client";

import { useConnect, useAccount, useDisconnect } from "wagmi";
import { getWalletSnapshot } from "@/lib/mock-data";

function shortenAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WalletButton() {
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const fallback = getWalletSnapshot();
  const resolvedAddress = address ?? fallback.address;
  const injectedConnector = connectors[0];

  function handleClick() {
    if (isConnected) {
      disconnect();
      return;
    }

    if (injectedConnector) {
      connect({ connector: injectedConnector });
    }
  }

  return (
    <button
      type="button"
      className="button-secondary"
      onClick={handleClick}
      style={{
        minWidth: 176,
        borderColor: "rgba(231,194,125,0.24)",
        background: "rgba(255,247,241,0.08)",
        color: "#fff7f1",
      }}
    >
      {isPending
        ? "Connecting"
        : isConnected
          ? `${shortenAddress(resolvedAddress)} on ${chain?.name ?? "Base"}`
          : `Connect ${shortenAddress(resolvedAddress)}`}
    </button>
  );
}


