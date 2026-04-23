import { type AndroidSymbol, type SFSymbol, SymbolView } from "expo-symbols";
import { useTranslation } from "react-i18next";
import { Platform, Text, View } from "react-native";

import { Card } from "@/components/ui/card";

import { useStyles } from "@/hooks/use-styles";

import { getStyles } from "./styles";

type Variant = "development" | "preview" | "production";
type Icon = { ios?: SFSymbol; android?: AndroidSymbol };

const iconMap: Record<Exclude<Variant, "production">, Icon> = {
  development: {
    android: "construction",
  },
  preview: {
    android: "experiment",
  },
};

type Props = {
  variant: Variant;
};

export function EnvironmentBanner({ variant }: Props) {
  const styles = useStyles(getStyles);
  const { t } = useTranslation("translation", {
    keyPrefix: "settings.sections.environment_banner",
  });

  if (variant === "production") {
    return null;
  }

  const icon = iconMap[variant];

  return (
    <Card style={styles.card}>
      <View style={styles.iconContainer}>
        <SymbolView
          name={icon}
          tintColor={styles.icon.tintColor}
          size={Platform.select({ ios: 20, android: 24 })}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{t(`${variant}.title`)}</Text>

        <Text style={styles.description}>{t(`${variant}.description`)}</Text>
      </View>
    </Card>
  );
}
