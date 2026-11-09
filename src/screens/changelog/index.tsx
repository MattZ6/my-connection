import { LegendList } from "@legendapp/list/react-native";
import { Stack, useRouter } from "expo-router";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  SettingsSectionDivider,
  SettingsSectionHeader,
  SettingsSectionItem,
} from "@/components/ui/settings-section";

import { useHaptics } from "@/hooks/use-haptics";
import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { LatestVersionCard } from "./components/latest-version-card";
import { VersionRow } from "./components/version-row";

import { getStyles } from "./styles";
import type { ChangelogVersion } from "./types";

type VersionMeta = {
  title: string;
  date: string;
  description?: string;
};

type RawVersion = Record<string, VersionMeta>;

export function ChangelogScreen() {
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { performTapFeedback } = useHaptics();
  const router = useRouter();
  const { t, i18n } = useTranslation("translation", { keyPrefix: "changelog" });
  const { currrentAppVersion, lastVersionViewed } = useLastVersionViewed();

  const [latestVersion, ...previousVersions] = useMemo(() => {
    const rawVersionsMap = t("versions.meta", {
      returnObjects: true,
    }) as RawVersion;

    const currentYear = new Date().getFullYear();

    return Object.entries(rawVersionsMap).map(
      ([version, content]): ChangelogVersion => {
        const date = new Date(`${content.date}T00:00:00`);

        return {
          version,
          title: content.title,
          description: content.description,
          date: date.toLocaleDateString(i18n.language, {
            day: "numeric",
            month: "short",
            year: date.getFullYear() === currentYear ? undefined : "numeric",
          }),
        };
      },
    );
  }, [t, i18n.language]);

  const hasNews = currrentAppVersion !== lastVersionViewed;

  const handleOpenVersion = useCallback(
    (version: string) => {
      performTapFeedback();
      router.push(`/settings/changelog/${version}`);
    },
    [performTapFeedback, router.push],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: ChangelogVersion; index: number }) => (
      <SettingsSectionItem index={index} total={previousVersions.length}>
        <VersionRow
          version={item.version}
          title={item.title}
          onPress={() => handleOpenVersion(item.version)}
        />
      </SettingsSectionItem>
    ),
    [previousVersions.length, handleOpenVersion],
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
        data={previousVersions}
        keyExtractor={(item) => item.version}
        renderItem={renderItem}
        estimatedItemSize={56}
        ItemSeparatorComponent={SettingsSectionDivider}
        ListHeaderComponent={
          <View style={styles.header}>
            <LatestVersionCard
              {...latestVersion}
              hasNews={hasNews}
              onPress={() => handleOpenVersion(latestVersion.version)}
            />

            {previousVersions.length > 0 && (
              <SettingsSectionHeader
                title={t("sections.previous_versions.title")}
              />
            )}
          </View>
        }
        ListHeaderComponentStyle={styles.headerContainer}
        contentInsetAdjustmentBehavior="automatic"
        fadingEdgeLength={32}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      />
    </>
  );
}
