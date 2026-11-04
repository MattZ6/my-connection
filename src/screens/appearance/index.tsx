import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { ColorsSection } from "./components/colors-section";
import { ThemeSection } from "./components/theme-section";

import { getStyles } from "./styles";

export function AppearanceScreen() {
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { t } = useTranslation();
  const { markInteractive } = useObserve();

  useEffect(() => {
    markInteractive();
  }, [markInteractive]);

  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title
        style={{
          fontFamily: Platform.select({
            android: fontFamily.semiBold,
            ios: fontFamily.semiBold,
          }),
          color: colors.content.base.toString(),
        }}
      >
        {t("appearance.meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        fadingEdgeLength={32}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <ThemeSection />
        <ColorsSection />
      </ScrollView>
    </>
  );
}
