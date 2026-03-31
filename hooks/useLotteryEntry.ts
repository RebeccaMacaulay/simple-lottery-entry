"use client";

import { useMemo } from "react";
import { useAccount, useReadContract } from "wagmi";
import { lotteryContractAbi, lotteryContractAddress } from "@/lib/contract";
import { getLatestEntries, getMyEntryFromAddress } from "@/lib/mock-data";

export function useLotteryEntry() {
  const { address } = useAccount();

  const enteredQuery = useReadContract({
    abi: lotteryContractAbi,
    address: lotteryContractAddress,
    functionName: "entered",
    args: address ? [address] : undefined,
    query: {
      enabled: Boolean(address),
    },
  });

  const participantCountQuery = useReadContract({
    abi: lotteryContractAbi,
    address: lotteryContractAddress,
    functionName: "getParticipantsCount",
  });

  const mockEntry = useMemo(() => getMyEntryFromAddress(address), [address]);

  return {
    address,
    hasEntered: enteredQuery.data ?? Boolean(mockEntry),
    participantCount: Number(participantCountQuery.data ?? BigInt(getLatestEntries().length)),
    mockEntry,
    isLoading: enteredQuery.isLoading || participantCountQuery.isLoading,
  };
}


