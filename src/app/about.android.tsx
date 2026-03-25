import { Column, Host, Row, Text } from "@expo/ui/jetpack-compose";
import {
  fillMaxWidth,
  paddingAll,
  weight,
} from "@expo/ui/jetpack-compose/modifiers";
import * as ExpoApplication from "expo-application";
import { Color } from "expo-router";
import { SymbolView } from "expo-symbols";
import { Text as RNText, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AboutPage() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Color.android.material.surface }}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
      contentContainerStyle={{
        paddingBottom: 24,
      }}
    >
      <View
        style={{
          marginTop: 48,
          paddingTop: insets.top + 16,
          paddingHorizontal: 24,
          paddingBottom: 16,
          backgroundColor: Color.android.material.surface,
        }}
      >
        <RNText
          style={{
            fontSize: 36,
            lineHeight: 48,
            color: Color.android.material.onSurface.toString(),
          }}
        >
          Settings
        </RNText>
      </View>

      <Host matchContents>
        <AboutSection />
      </Host>
    </ScrollView>
  );
}

function AboutSection() {
  return (
    <Column verticalArrangement={{ spacedBy: 16 }} modifiers={[paddingAll(24)]}>
      <Text
        color={Color.android.material.onSurfaceVariant.toString()}
        style={{ typography: "labelLarge" }}
      >
        About
      </Text>

      <Column verticalArrangement={{ spacedBy: 20 }}>
        <Row modifiers={[fillMaxWidth()]}>
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.material.onSurface.toString()}
              style={{ typography: "titleMedium" }}
            >
              Name
            </Text>
          </Column>
          <Text
            color={Color.android.material.onSurfaceVariant.toString()}
            style={{ typography: "bodyLarge" }}
          >
            {ExpoApplication.applicationName}
          </Text>
        </Row>

        <Row modifiers={[fillMaxWidth()]}>
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.material.onSurface.toString()}
              style={{ typography: "titleMedium" }}
            >
              App
            </Text>
          </Column>
          <Text
            color={Color.android.material.onSurfaceVariant.toString()}
            style={{ typography: "bodyLarge" }}
          >
            {ExpoApplication.applicationId}
          </Text>
        </Row>

        <Row modifiers={[fillMaxWidth()]}>
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.material.onSurface.toString()}
              style={{ typography: "titleMedium" }}
            >
              Version
            </Text>
          </Column>
          <Text
            color={Color.android.material.onSurfaceVariant.toString()}
            style={{ typography: "bodyLarge" }}
          >
            v{ExpoApplication.nativeApplicationVersion} (
            {ExpoApplication.nativeBuildVersion})
          </Text>
        </Row>

        <Row modifiers={[fillMaxWidth()]}>
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.material.onSurface.toString()}
              style={{ typography: "titleMedium" }}
            >
              Installed at
            </Text>
          </Column>
          <Text
            color={Color.android.material.onSurfaceVariant.toString()}
            style={{ typography: "bodyLarge" }}
          ></Text>
        </Row>

        <Row
          modifiers={[fillMaxWidth()]}
          horizontalArrangement={{ spacedBy: 16 }}
        >
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.material.onSurface.toString()}
              style={{ typography: "titleMedium" }}
            >
              Updated at
            </Text>
          </Column>
          <Text
            color={Color.android.material.onSurfaceVariant.toString()}
            style={{ typography: "bodyLarge" }}
          ></Text>
        </Row>

        <Row modifiers={[fillMaxWidth()]} verticalAlignment="center">
          <Column modifiers={[weight(1)]}>
            <Text
              color={Color.android.material.onSurface.toString()}
              style={{ typography: "titleMedium" }}
            >
              Licenses
            </Text>
            <Text
              color={Color.android.material.onSurfaceVariant.toString()}
              style={{ typography: "bodyMedium" }}
            >
              Important for we all
            </Text>
          </Column>
          <SymbolView
            name={{ android: "chevron_right" }}
            tintColor={Color.android.material.onSurfaceVariant.toString()}
          />
        </Row>
      </Column>
    </Column>
  );
}
