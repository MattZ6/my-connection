import { SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";

import { useStyles } from "@/hooks/use-styles";

import { environment } from "../../environment";
import { getStyles } from "./styles";

const AUTHOR_NAME = "Matheus Zanin";
/** Bundled with the app so the About screen makes no network request. */
const AUTHOR_AVATAR = require("@/assets/images/author-avatar.jpg");

export function AuthorCard() {
  const styles = useStyles(getStyles);
  const { t } = useTranslation();
  const appName = t(`app.${environment}.name`);

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
            <Image
              source={AUTHOR_AVATAR}
              alt=""
              resizeMode="cover"
              style={styles.avatarImage}
            />
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
