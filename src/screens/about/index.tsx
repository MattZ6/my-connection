import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView, Text, View } from "react-native";
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
            android: fontFamily.medium,
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
        <AuthorCard />
        <ExploreSection />
        <BuildSection />

        <View style={styles.disclaimer}>
          <SymbolView
            size={20}
            name={{ android: "shield", ios: "lock.shield" }}
            tintColor={styles.disclaimerIcon.tintColor}
          />
          <Text style={styles.disclaimerText}>{t("about.disclaimer")}</Text>
        </View>
      </ScrollView>
    </>
  );
}
