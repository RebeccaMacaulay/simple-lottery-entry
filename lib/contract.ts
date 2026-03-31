import { parseAbi } from "viem";

export const lotteryContractAddress = "0x1fbd24E7aAeF4cc99240012523c463e04Ed39139" as const;

export const lotteryContractAbi = parseAbi([
  "event Entered(address indexed user)",
  "function enter() external",
  "function entered(address user) external view returns (bool)",
  "function getParticipantsCount() external view returns (uint256)",
  "function participants(uint256 index) external view returns (address)",
]);


