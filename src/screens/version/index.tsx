import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { Header } from "./components/header";
import { HighlightSection } from "./components/highlight-section";

import { getStyles } from "./styles";

type VersionMeta = {
  title: string;
  date: string;
};

type VersionContent = {
  paragraphs: string[];
  highlights: Highlight[];
};

type HighlightType = "features" | "improvements" | "fixes" | "infrastructure";

type Highlight = {
  type: HighlightType;
  title: string;
  items: string[];
};

type Props = {
  version: string;
};

export function VersionScreen({ version }: Props) {
  const { currrentAppVersion, lastVersionViewed, setLastVersionViewed } =
    useLastVersionViewed();
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { t, i18n } = useTranslation("translation", {
    keyPrefix: "changelog.versions",
  });
  const { markInteractive } = useObserve();

  const meta = t(`meta.${version}`, {
    returnObjects: true,
  }) as VersionMeta;

  const content = t(`content.${version}`, {
    returnObjects: true,
  }) as VersionContent;

  const formattedDate = new Date(`${meta.date}T00:00:00`).toLocaleDateString(
    i18n.language,
    { dateStyle: "medium" },
  );

  useLayoutEffect(() => {
    const isCurrentVersionChangelog = version === currrentAppVersion;

    if (isCurrentVersionChangelog && version !== lastVersionViewed) {
      setLastVersionViewed(version);
    }
  }, [version, currrentAppVersion, lastVersionViewed, setLastVersionViewed]);

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
        {version}
      </Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        fadingEdgeLength={32}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <Header
          title={meta.title}
          date={formattedDate}
          paragraphs={content.paragraphs}
        />

        {content.highlights.map((section) => (
          <HighlightSection
            key={section.type}
            title={section.title}
            items={section.items}
          />
        ))}
      </ScrollView>
    </>
  );
}
