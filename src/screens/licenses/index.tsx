import { Stack } from "expo-router";
import { useCallback } from "react";
import { FlatList, type ListRenderItemInfo, Platform } from "react-native";

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

    const repository = String(
      licenses[key as keyof typeof licenses].repository || "",
    );
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

const isIos = Platform.OS === "ios";

export function LicensesScreen() {
  const { colors, fontFamily } = useTheme();
  const styles = useStyles(getStyles);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<License>) => {
    return (
      <LicenseItem
        imageUrl={item.imageUrl}
        name={item.name}
        licenses={item.licenses}
        version={item.version}
      />
    );
  }, []);

  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title
        large={isIos}
        style={{
          fontFamily: fontFamily.medium,
          color: colors.text.toString(),
        }}
      >
        Licenses
      </Stack.Screen.Title>

      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={styles.container}
        data={parsedLicenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </>
  );
}
