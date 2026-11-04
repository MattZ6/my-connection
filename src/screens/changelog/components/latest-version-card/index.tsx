import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import { NewBadge } from "@/components/ui/new-badge";

import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import type { ChangelogVersion } from "../../types";
import { getStyles } from "./styles";

type Props = ChangelogVersion & {
  hasNews: boolean;
  onPress: () => void;
};

export function LatestVersionCard({
  version,
  title,
  description,
  date,
  hasNews,
  onPress,
}: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "changelog.sections.latest_version",
  });

  return (
    <View style={styles.card}>
      <Pressable
        android_disableSound
        android_ripple={androidRippleConfig}
        accessibilityRole="button"
        accessibilityLabel={`${t("title")}, ${version}, ${title}`}
        onPress={onPress}
        style={styles.container}
      >
        <View style={styles.upperRow}>
          <View style={styles.tags}>
            <View style={styles.versionChip}>
              <SymbolView
                name={{ android: "auto_awesome", ios: "sparkles" }}
                size={16}
                tintColor={styles.versionChipIcon.tintColor}
              />
              <Text style={styles.version}>{version}</Text>
            </View>

            {hasNews && <NewBadge label={t("badge")} />}
          </View>

          <Text style={styles.date}>{date}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        {!!description && <Text style={styles.description}>{description}</Text>}

        <View style={styles.readMore}>
          <Text style={styles.readMoreText}>{t("read_more")}</Text>
          <SymbolView
            name={{ android: "arrow_forward", ios: "arrow.right" }}
            size={18}
            tintColor={styles.readMoreIcon.tintColor}
          />
        </View>
      </Pressable>
    </View>
  );
}
