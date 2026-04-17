import { use } from "react";

import { NetworkUpdatesContext } from "@/contexts/network-updates";

export function useNetworkUpdates() {
  const context = use(NetworkUpdatesContext);

  if (!context) {
    throw new Error(
      "useNetworkUpdates must be used within NetworkUpdatesProvider",
    );
  }

  return context;
}
