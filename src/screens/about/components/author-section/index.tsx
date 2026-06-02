import { useTranslation } from "react-i18next";
import { Image, Linking, Pressable, Text, View } from "react-native";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

import { useHaptics } from "@/hooks/use-haptics";
import { useStyles } from "@/hooks/use-styles";

import { androidRippleConfig } from "@/theme/android-ripple";

import { getStyles } from "./styles";

const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
) as "development" | "preview" | "production";

const author = {
  avatar: "https://github.com/MattZ6.png?size=128",
  github: "https://github.com/MattZ6",
  name: "Matheus Zanin",
};

export function AuthorSection() {
  const styles = useStyles(getStyles);
  const { performTapFeedback } = useHaptics();
  const { t } = useTranslation();

  const handleOpenGithub = async () => {
    performTapFeedback();
    await Linking.openURL(author.github);
  };

  return (
    <Section title={t("about.sections.author.title")}>
      <Card style={styles.card}>
        <Image
          source={{ uri: author.avatar }}
          alt=""
          resizeMode="cover"
          style={styles.avatar}
        />

        <Text style={styles.name}>{author.name}</Text>

        <Text style={styles.description}>
          {t("about.sections.author.fields.description", {
            app_name: t(`app.${environment}.name`),
          })}
        </Text>

        <Pressable
          onPress={handleOpenGithub}
          android_disableSound
          android_ripple={androidRippleConfig}
          style={styles.button}
        >
          <View style={styles.buttonContent}>
            <Text style={styles.buttonText}>
              {t("about.sections.author.actions.view_on_github.title")}
            </Text>
          </View>
        </Pressable>
      </Card>
    </Section>
  );
}
