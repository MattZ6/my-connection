import type { NetworkUpdatesContextTypes } from "@/contexts/network-updates/types";

type Frequency = NetworkUpdatesContextTypes.UpdateFrequency;

export const UPDATE_FREQUENCY_OPTIONS: Frequency[] = [
  "5s",
  "15s",
  "30s",
  "60s",
];

/** Keep in sync with `defaultUpdateFrequency` in `contexts/provider.tsx`. */
export const DEFAULT_UPDATE_FREQUENCY: Frequency = "60s";

export type UpdateFrequencySheetProps = {
  isOpen: boolean;
  value: Frequency;
  onSelect: (value: Frequency) => void;
  onClose: () => void;
};
