import { LegendList } from "@legendapp/list/react-native";
import { Link, Stack } from "expo-router";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import licenses from "@/assets/licenses.json";

import {
  SettingsSectionDivider,
  SettingsSectionItem,
} from "@/components/ui/settings-section";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { environment } from "../about/environment";
import { LicenseRow } from "./components/license-row";

import { getStyles } from "./styles";

type License = {
  key: string;
  name: string;
  version: string | null;
  licenses: string;
  url: string | null;
};

function toUrl(value?: string) {
  if (!value) {
    return null;
  }

  return value.startsWith("github:")
    ? value.replace("github:", "https://github.com/")
    : value;
}

const parsedLicenses: License[] = Object.entries(licenses)
  .map(([key, info]) => {
    const separator = key.lastIndexOf("@");
    const hasVersion = separator > 0;

    return {
      key,
      name: hasVersion ? key.substring(0, separator) : key,
      version: hasVersion ? key.substring(separator + 1) : null,
      licenses: info.licenses,
      url: toUrl(info.repository) ?? toUrl(info.licenseUrl),
    };
  })
  .sort((previous, current) => previous.name.localeCompare(current.name));

export function LicensesScreen() {
  const { colors, fontFamily } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles((s) => getStyles(s, insets));
  const { t } = useTranslation();

  const renderItem = useCallback(
    ({ item, index }: { item: License; index: number }) => (
      <SettingsSectionItem index={index} total={parsedLicenses.length}>
        {item.url ? (
          <Link href={item.url} target="_blank" asChild>
            <LicenseRow
              name={item.name}
              version={item.version}
              licenses={item.licenses}
            />
          </Link>
        ) : (
          <LicenseRow
            name={item.name}
            version={item.version}
            licenses={item.licenses}
          />
        )}
      </SettingsSectionItem>
    ),
    [],
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
        {t("licenses.meta.title")}
      </Stack.Screen.Title>

      <LegendList
        data={parsedLicenses}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        estimatedItemSize={72}
        ItemSeparatorComponent={SettingsSectionDivider}
        ListHeaderComponent={
          <Text style={styles.description}>
            {t("licenses.description", {
              count: parsedLicenses.length,
              app_name: t(`app.${environment}.name`),
            })}
          </Text>
        }
        ListHeaderComponentStyle={styles.header}
        contentInsetAdjustmentBehavior="automatic"
        fadingEdgeLength={32}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
      />
    </>
  );
}
