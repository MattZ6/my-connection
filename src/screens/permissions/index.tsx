import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useLocation } from "@/hooks/use-location";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { ManageSection } from "./components/manage-section";
import { StatusCard } from "./components/status-card";
import type { StepState } from "./components/step-row";
import { StepsSection } from "./components/steps-section";

import { getStyles } from "./styles";

const TOTAL_STEPS = 3;

export function PermissionsScreen() {
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { t } = useTranslation("translation", { keyPrefix: "permissions" });
  const { markInteractive } = useObserve();
  const {
    permission,
    precision,
    canAskAgain,
    locationServicesEnabled,
    requestPermission,
  } = useLocation();

  useEffect(() => {
    markInteractive();
  }, [markInteractive]);

  const isGranted = permission === "granted";

  const permissionState: StepState = isGranted ? "done" : "active";

  let precisionState: StepState = "locked";

  if (isGranted) {
    precisionState = precision === "precise" ? "done" : "active";
  }

  const servicesState: StepState = locationServicesEnabled ? "done" : "active";

  const doneSteps = [permissionState, precisionState, servicesState].filter(
    (state) => state === "done",
  ).length;

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
        <Text style={styles.intro}>{t("intro")}</Text>

        <StatusCard done={doneSteps} total={TOTAL_STEPS} />

        <StepsSection
          permissionState={permissionState}
          precisionState={precisionState}
          servicesState={servicesState}
          canAskAgain={canAskAgain}
          requestPermission={requestPermission}
        />

        <ManageSection />

        <View style={styles.disclaimer}>
          <SymbolView
            size={20}
            name={{ android: "shield", ios: "lock.shield" }}
            tintColor={styles.disclaimerIcon.tintColor}
          />
          <Text style={styles.disclaimerText}>{t("disclaimer")}</Text>
        </View>
      </ScrollView>
    </>
  );
}
