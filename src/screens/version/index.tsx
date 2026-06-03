import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, ScrollView } from "react-native";

import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";
import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { Header } from "./components/header";
import { HighlightSection } from "./components/highlight-section";
import { Paragraph } from "./components/paragraph";

import { getStyles } from "./styles";

type VersionMeta = {
  title: string;
  date: string;
  description?: string;
};

type VersionContent = {
  paragraphs: string[];
  highlights: Highlight[];
};

type HighlightType = "improvements" | "fixes" | "infrastructure";

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
  const styles = useStyles(getStyles);
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
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
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
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      >
        <Header
          title={meta.title}
          date={formattedDate}
          description={meta.description}
        />

        {content.paragraphs.map((paragraph, index) => (
          <Paragraph key={index.toString()} text={paragraph} />
        ))}

        {content.highlights.map((section) => (
          <HighlightSection key={section.title} section={section} />
        ))}
      </ScrollView>
    </>
  );
}
