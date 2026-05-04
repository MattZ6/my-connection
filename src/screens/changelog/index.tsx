import { LegendList } from "@legendapp/list";
import { Stack, useRouter } from "expo-router";
import { SymbolView } from "expo-symbols";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Pressable } from "react-native";

import {
  SectionItemContent,
  SectionItemHint,
  SectionItemLabel,
  SectionItemLeading,
  SectionItemRoot,
  SectionItemTrailing,
} from "@/components/ui/section";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { androidRippleConfig } from "@/theme/android-ripple";

import { LatestVersionCard } from "./components/latest-version-card";

import { getStyles } from "./styles";

type VersionMeta = {
  title: string;
  date: string;
  description?: string;
};

type RawVersion = Record<string, VersionMeta>;

const now = new Date();

export function ChangelogScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();
  const router = useRouter();
  const { t, i18n } = useTranslation("translation", { keyPrefix: "changelog" });

  const { latestVersion, versions } = useMemo(() => {
    const rawVersionsMap = t("versions.meta", {
      returnObjects: true,
    }) as RawVersion;

    const [latestVersion, ...allVersions] = Object.entries(rawVersionsMap).map(
      ([version, content], _index) => {
        const date = new Date(`${content.date}T00:00:00`);

        const isSameYear = now.getFullYear() === date.getFullYear();

        return {
          version,
          title: content.title,
          description: content.description,
          date: date.toLocaleDateString(i18n.language, {
            day: "numeric",
            month: "short",
            year: isSameYear ? undefined : "numeric",
          }),
        };
      },
    );

    return {
      latestVersion: latestVersion,
      versions: allVersions,
    };
  }, [t, i18n.language]);

  const handleNavigateToVersionPage = useCallback(
    (version: string) => {
      performTapFeedback();
      router.push(`/settings/changelog/${version}`);
    },
    [performTapFeedback, router.push],
  );

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

      <LegendList
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
        data={versions}
        keyExtractor={(item) => item.version}
        recycleItems
        ListHeaderComponent={
          <LatestVersionCard
            title={latestVersion.title}
            version={latestVersion.version}
            description={latestVersion.description}
            formattedDate={latestVersion.date}
            onPress={handleNavigateToVersionPage}
          />
        }
        renderItem={({ item }) => (
          <Pressable
            android_disableSound
            android_ripple={androidRippleConfig}
            onPress={() => handleNavigateToVersionPage(item.version)}
          >
            <SectionItemRoot style={styles.versionItem}>
              <SectionItemLeading>
                <SectionItemHint style={styles.versionLabel}>
                  {item.version}
                </SectionItemHint>
              </SectionItemLeading>

              <SectionItemContent>
                <SectionItemLabel>{item.title}</SectionItemLabel>
              </SectionItemContent>

              <SectionItemTrailing>
                <SymbolView
                  name={{ android: "chevron_right" }}
                  size={24}
                  tintColor={colors.content.muted}
                />
              </SectionItemTrailing>
            </SectionItemRoot>
          </Pressable>
        )}
      />
    </>
  );
}
