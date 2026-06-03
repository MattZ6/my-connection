import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { LocationSection } from "./components/location-section";

import { getStyles } from "./styles";

export function PermissionsScreen() {
  const { colors, radii, fontSizes, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", { keyPrefix: "permissions" });
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
        {t("meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <LocationSection />

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: radii["4"],
              alignItems: "center",
              justifyContent: "center",

              backgroundColor: colors.surface.elevated,
            }}
          >
            <SymbolView
              size={24}
              name={{ android: "shield_locked", ios: "lock.shield" }}
              tintColor={colors.content.muted}
            />
          </View>
          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: fontSizes.bodySmall.fontSize,
              lineHeight: fontSizes.bodySmall.lineHeight,
              color: colors.content.muted,
              textAlign: "center",
            }}
          >
            {t("disclaimer")}
          </Text>
        </View>
      </ScrollView>
    </>
  );
}
