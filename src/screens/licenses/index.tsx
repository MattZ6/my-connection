import {
  LegendList,
  type LegendListRenderItemProps,
} from "@legendapp/list/react-native";
import { useObserve } from "expo-observe";
import { Stack } from "expo-router";
import { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

import licenses from "@/assets/licenses.json";

import { useStyles } from "@/hooks/use-styles";
import { useTheme } from "@/hooks/use-theme";

import { LicenseItem } from "./components/license-item";

import { getStyles } from "./styles";

type License = {
  key: string;
  name: string;
  version: string;
  licenses: string;
  repository: string;
  licenseUrl: string;
  parents: string;
  imageUrl: string;
};

const parsedLicenses = Object.keys(licenses)
  .map((key) => {
    let name = String(key);
    let version = null;

    if (key.lastIndexOf("@") > 0) {
      name = String(key).substring(0, key.lastIndexOf("@"));
      version = `v${key.substring(key.lastIndexOf("@") + 1)}`;
    }

    let repository = String(
      licenses[key as keyof typeof licenses].repository || "",
    );

    if (repository.startsWith("github:")) {
      repository = repository.replace("github:", "https://github.com/");
    }

    const paths = repository.split("/");
    paths.pop();

    return {
      ...licenses[key as keyof typeof licenses],
      key,
      name,
      version,
      imageUrl: paths.join("/").concat(".png?size=40"),
    } as License;
  })
  .sort((previous, current) => previous.name.localeCompare(current.name));

export function LicensesScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);
  const { t } = useTranslation();
  const { markInteractive } = useObserve();

  useEffect(() => {
    markInteractive();
  }, [markInteractive]);

  const renderItem = useCallback(
    ({ item }: LegendListRenderItemProps<License>) => {
      return (
        <LicenseItem
          imageUrl={item.imageUrl}
          name={item.name}
          licenses={item.licenses}
          version={item.version}
        />
      );
    },
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
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.scrollContainer}
        data={parsedLicenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        recycleItems
      />
    </>
  );
}
