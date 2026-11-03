import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useNetworkUpdates } from "@/hooks/use-network-updates";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { AutomaticUpdatesSection } from "./components/automatic-updates-section";
import { StatusSection } from "./components/status-section";
import { UpdateFrequencySheet } from "./components/update-frequency-sheet";

import { getStyles } from "./styles";

export function PreferencesScreen() {
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { t } = useTranslation("translation", { keyPrefix: "preferences" });
  const { markInteractive } = useObserve();
  const { updateFrequency, changeUpdateFrequency } = useNetworkUpdates();
  const [isFrequencySheetOpen, setIsFrequencySheetOpen] = useState(false);

  useEffect(() => {
    markInteractive();
  }, [markInteractive]);

  const handleOpenFrequencySheet = useCallback(() => {
    setIsFrequencySheetOpen(true);
  }, []);

  const handleCloseFrequencySheet = useCallback(() => {
    setIsFrequencySheetOpen(false);
  }, []);

  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title
        style={{
          fontFamily: Platform.select({
            android: fontFamily.medium,
            ios: fontFamily.semiBold,
          }),
          color: colors.content.base.toString(),
        }}
      >
        {t("meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
        fadingEdgeLength={32}
      >
        <AutomaticUpdatesSection onOpenFrequency={handleOpenFrequencySheet} />
        <StatusSection />
      </ScrollView>

      <UpdateFrequencySheet
        isOpen={isFrequencySheetOpen}
        value={updateFrequency}
        onSelect={changeUpdateFrequency}
        onClose={handleCloseFrequencySheet}
      />
    </>
  );
}
