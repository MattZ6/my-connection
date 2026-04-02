import { Stack } from "expo-router";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";
import { AboutSectionContent } from "./components/about-section-content";
import { PreferencesSectionContent } from "./components/preferences-section-content";
import { getStyles } from "./styles";

const isIos = Platform.OS === "ios";

export function SettingsScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();

  return (
    <>
      <Stack.Screen.Title
        large={isIos}
        largeStyle={{
          fontFamily: fontFamily.medium,
          color: colors.text.toString(),
        }}
        style={{
          fontFamily: fontFamily.medium,
          color: colors.text.toString(),
        }}
      >
        {t("settings.meta.title")}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <PreferencesSectionContent />
        <AboutSectionContent />
      </ScrollView>
    </>
  );
}
