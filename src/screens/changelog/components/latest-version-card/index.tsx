import { SymbolView } from "expo-symbols";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { useLastVersionViewed } from "@/hooks/use-last-version-viewed";
import { useStyles } from "@/hooks/use-styles";
import { androidRippleConfig } from "@/theme/android-ripple";
import { getStyles } from "./styles";

type Props = {
  version: string;
  title: string;
  description?: string;
  formattedDate: string;
  onPress: (version: string) => void;
};

export function LatestVersionCard({
  title,
  version,
  description,
  formattedDate,
  onPress,
}: Props) {
  const styles = useStyles(getStyles);
  const { currrentAppVersion, lastVersionViewed } = useLastVersionViewed();
  const { t } = useTranslation("translation", {
    keyPrefix: "changelog.sections",
  });

  const hasNews = currrentAppVersion !== lastVersionViewed;

  const handlePress = useCallback(() => onPress(version), [onPress, version]);

  return (
    <View style={styles.wrapper}>
      <Section title={t("latest_version.title")}>
        <Card>
          <Pressable
            android_disableSound
            android_ripple={androidRippleConfig}
            onPress={handlePress}
          >
            <View style={styles.container}>
              <View style={styles.upperRow}>
                <View style={styles.versionContainer}>
                  <SymbolView
                    name={{ android: "auto_awesome" }}
                    tintColor={styles.icon.tintColor}
                    size={20}
                  />
                  <Text style={styles.version}>{version}</Text>
                  {hasNews && <View style={styles.newVersionDot} />}
                </View>

                <Text style={styles.date}>{formattedDate}</Text>
              </View>

              <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                {description && (
                  <Text style={styles.description}>{description}</Text>
                )}
              </View>
            </View>
          </Pressable>
        </Card>
      </Section>

      <Text style={styles.label}>{t("previous_versions.title")}</Text>
    </View>
  );
}
