import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { base } from "wagmi/chains";

export const wagmiConfig = createConfig({
  chains: [base],
  connectors: [injected()],
  transports: {
    [base.id]: http(),
  },
});

// TODO(builder-code): Replace the placeholder below with the final builder code suffix
// once the production value is provided for Base mini app attribution metadata.
export const builderCodeSuffix = "TODO_REPLACE_WITH_BUILDER_CODE_SUFFIX";


