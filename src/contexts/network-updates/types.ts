import type { NetInfoState } from "@react-native-community/netinfo";
import type { ReactNode } from "react";

export namespace NetworkUpdatesContextTypes {
  export type UpdateFrequency = "15s" | "30s" | "60s";

  export type Context = {
    netInfo: NetInfoState | null;
    automaticUpdatesOn: boolean;
    updateFrequency: UpdateFrequency;
    lastUpdated: Date | null;
    toggleAutomaticUpdates: () => void;
    changeUpdateFrequency: (value: UpdateFrequency) => void;
    refresh: () => Promise<void>;
  };
}

export namespace NetworkUpdatesProviderTypes {
  export type Props = {
    children: ReactNode;
    defaultAutomaticUpdatesEnabled: boolean;
    defaultUpdateFrequency: NetworkUpdatesContextTypes.UpdateFrequency;
  };
}
