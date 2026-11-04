import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { AppSection } from "./components/app-section";
import { AuthorCard } from "./components/author-card";
import { BuildSection } from "./components/build-section";
import { DeviceSection } from "./components/device-section";
import { ExploreSection } from "./components/explore-section";

import { getStyles } from "./styles";

export function AboutScreen() {
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { t } = useTranslation();

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
        {t("about.meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        fadingEdgeLength={32}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <AppSection />
        <DeviceSection />
        <ExploreSection />
        <BuildSection />
        <AuthorCard />
      </ScrollView>
    </>
  );
}
