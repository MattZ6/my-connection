import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { useCallback } from "react";
import {
  type GestureResponderEvent,
  Platform,
  Pressable,
  View,
} from "react-native";

import {
  SectionItemChevron,
  SectionItemContent,
  SectionItemLabel,
  SectionItemLeading,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

type Props = {
  label: string;
  icon: {
    ios: SFSymbol;
    android: AndroidSymbol;
  };
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
  hasNews?: boolean;
  external?: boolean;
};

export function PressableConfigItem({
  label,
  icon,
  onPress,
  hasNews,
  external,
}: Props) {
  const { colors } = useTheme();
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();

  const handlePress = useCallback(
    (event: GestureResponderEvent) => {
      performTapFeedback();

      if (onPress) {
        onPress(event);
      }
    },
    [onPress, performTapFeedback],
  );

  return (
    <Pressable
      onPress={handlePress}
      android_disableSound
      android_ripple={androidRippleConfig}
    >
      <SectionItemRoot>
        <SectionItemLeading style={styles.iconContainer}>
          <SymbolView
            name={icon}
            tintColor={styles.icon.tintColor}
            size={Platform.select({ ios: 20, android: 24 })}
          />
        </SectionItemLeading>
        <SectionItemContent>
          <SectionItemLabel>{label}</SectionItemLabel>
        </SectionItemContent>
        <SectionItemTrailing>
          {hasNews && <View style={styles.newsDot} />}
          {external ? (
            <SymbolView
              name={{ android: "arrow_outward", ios: "link" }}
              tintColor={colors.content.muted}
              size={Platform.select({
                ios: 12,
                android: 24,
              })}
            />
          ) : (
            <SectionItemChevron />
          )}
        </SectionItemTrailing>
      </SectionItemRoot>
    </Pressable>
  );
}
