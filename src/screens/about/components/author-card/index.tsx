import { SymbolView } from "expo-symbols";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { environment } from "../../environment";
import { getStyles } from "./styles";

const AUTHOR_NAME = "Matheus Zanin";
const AUTHOR_INITIALS = "MZ";
const AUTHOR_AVATAR = "https://github.com/MattZ6.png?size=128";

export function AuthorCard() {
  const styles = useStyles(getStyles);
  const { t } = useTranslation();
  const appName = t(`app.${environment}.name`);
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        {t("about.sections.author.title")}
      </Text>

      <View style={styles.card}>
        <View style={styles.quote}>
          <SymbolView
            name={{ android: "format_quote", ios: "quote.opening" }}
            size={32}
            tintColor={styles.quoteIcon.tintColor}
          />
          <Text style={styles.quoteText}>
            {t("about.sections.author.fields.description", {
              app_name: appName,
            })}
          </Text>
        </View>

        <View style={styles.byline}>
          <View style={styles.avatar} accessibilityElementsHidden>
            {/* Initials stay as the fallback while offline or if the photo fails. */}
            <Text style={styles.avatarText}>{AUTHOR_INITIALS}</Text>
            {!avatarFailed && (
              <Image
                source={{ uri: AUTHOR_AVATAR }}
                alt=""
                resizeMode="cover"
                style={styles.avatarImage}
                onError={() => setAvatarFailed(true)}
              />
            )}
          </View>

          <View style={styles.bylineText}>
            <Text style={styles.name}>{AUTHOR_NAME}</Text>
            <Text style={styles.role}>
              {t("about.sections.author.fields.role", { app_name: appName })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
