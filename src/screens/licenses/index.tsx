import { Color, Stack } from "expo-router";
import { useCallback } from "react";
import {
  FlatList,
  Image,
  type ListRenderItemInfo,
  Platform,
  Text,
  View,
} from "react-native";

import licenses from "@/assets/licenses.json";

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

export function LicensesScreen() {
  const renderItem = useCallback(({ item }: ListRenderItemInfo<License>) => {
    return (
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 16,
          flexDirection: "row",
          gap: 16,
          // height: 88,
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            // backgroundColor: theme.colors.mauve2,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 8,
            overflow: "hidden",
            borderColor: Platform.select({
              android: Color.android.dynamic.surfaceContainerHigh,
              ios: Color.ios.separator,
            }),
          }}
        >
          <Image
            source={{ uri: item.imageUrl }}
            style={{
              width: 36,
              height: 36,
            }}
            alt=""
          />
        </View>

        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              // gap: 16,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                lineHeight: 24,
                fontWeight: "500",
                color: Platform.select({
                  android: Color.android.dynamic.onSurface,
                  ios: Color.ios.label,
                }),
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                // flex: 1,
                fontSize: 14,
                lineHeight: 24,
                textAlign: "right",
                color: Platform.select({
                  android: Color.android.dynamic.onSurfaceVariant,
                  ios: Color.ios.secondaryLabel,
                }),
              }}
            >
              {item.version}
            </Text>
          </View>

          <Text
            style={{
              fontSize: 14,
              lineHeight: 24,
              color: Platform.select({
                android: Color.android.dynamic.onSurfaceVariant,
                ios: Color.ios.secondaryLabel,
              }),
            }}
          >
            {item.licenses}
          </Text>
        </View>
      </View>
    );
  }, []);

  return (
    <>
      <Stack.Screen.BackButton displayMode="minimal" />
      <Stack.Screen.Title>Licenses</Stack.Screen.Title>

      <FlatList
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surface,
            ios: Color.ios.systemBackground,
          }),
        }}
        data={parsedLicenses}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </>
  );
}
