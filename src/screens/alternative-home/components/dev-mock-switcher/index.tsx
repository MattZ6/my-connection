import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import type { HomeMockKey } from "../../mocks";

import { getStyles } from "./styles";

type Props = {
  mockKey: HomeMockKey | null;
  onCycle: (direction: 1 | -1) => void;
};

/**
 * Development-only control to preview the screen with mocked network states.
 * Tap the arrows to go through every mock; the list wraps back to live data.
 */
export function DevMockSwitcher({ mockKey, onCycle }: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "alternative_home.dev_mocks",
  });

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.arrow}
        hitSlop={8}
        onPress={() => onCycle(-1)}
        accessibilityLabel="Previous mock"
      >
        <SymbolView
          name={{ android: "chevron_left" }}
          size={18}
          tintColor={styles.label.color}
        />
      </Pressable>

      <Text style={styles.label} numberOfLines={1}>
        {mockKey ?? t("live")}
      </Text>

      <Pressable
        style={styles.arrow}
        hitSlop={8}
        onPress={() => onCycle(1)}
        accessibilityLabel="Next mock"
      >
        <SymbolView
          name={{ android: "chevron_right" }}
          size={18}
          tintColor={styles.label.color}
        />
      </Pressable>
    </View>
  );
}
