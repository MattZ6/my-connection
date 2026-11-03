export type SignalQualityKey =
  | "no_signal"
  | "weak"
  | "fair"
  | "good"
  | "excellent";

export type SignalTone = "neutral" | "danger" | "caution" | "success";

export type SignalQuality = {
  key: SignalQualityKey;
  level: 0 | 1 | 2 | 3 | 4;
  tone: SignalTone;
};

export const SIGNAL_THRESHOLDS = {
  weak: 20,
  fair: 40,
  good: 65,
} as const;

export function getSignalQuality(strength: number | null): SignalQuality {
  if (strength === null) {
    return { key: "no_signal", level: 0, tone: "neutral" };
  }

  if (strength < SIGNAL_THRESHOLDS.weak) {
    return { key: "weak", level: 1, tone: "danger" };
  }

  if (strength < SIGNAL_THRESHOLDS.fair) {
    return { key: "fair", level: 2, tone: "caution" };
  }

  if (strength < SIGNAL_THRESHOLDS.good) {
    return { key: "good", level: 3, tone: "success" };
  }

  return { key: "excellent", level: 4, tone: "success" };
}
