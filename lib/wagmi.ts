import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { base } from "wagmi/chains";
import { BUILDER_CODE, BUILDER_DATA_SUFFIX } from "@/lib/app-config";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(undefined, {
      fetchOptions: {
        headers: {
          "x-builder-code": BUILDER_CODE,
        },
      },
      retryCount: 2,
    }),
  },
  multiInjectedProviderDiscovery: false,
});

// Base builder attribution values used for ERC-8021 / transaction analytics.
// `BUILDER_DATA_SUFFIX` must be appended to live writes so Base can attribute tx volume correctly.
export const builderCode = BUILDER_CODE;
export const builderCodeSuffix = BUILDER_DATA_SUFFIX;
