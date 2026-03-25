import * as ExpoApplication from "expo-application";
import { Color } from "expo-router";
import { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";
import { Section } from "@/components/ui/section";

const dateFormatter = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
  timeStyle: "short",
});

export function AboutSection() {
  const [installedAt, setInstalledAt] = useState<Date | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  let formattedInstalledAt = "Loading...";
  let formattedUpdatedAt: string | null = null;

  if (installedAt) {
    formattedInstalledAt = dateFormatter.format(installedAt);
  }

  if (updatedAt) {
    formattedUpdatedAt = dateFormatter.format(updatedAt);
  }

  useEffect(() => {
    async function loadInfo() {
      try {
        const promises = [ExpoApplication.getInstallationTimeAsync()];

        if (Platform.OS === "android") {
          promises.push(ExpoApplication.getLastUpdateTimeAsync());
        }

        const [installationTime, lastUpdateTime] = await Promise.all(promises);

        setInstalledAt(installationTime);
        setUpdatedAt(lastUpdateTime || null);
      } catch (error) {
        console.log(error);
      }
    }

    loadInfo();
  }, []);

  return (
    <Section title="About">
      <View
        style={{
          borderRadius: 16,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surfaceContainerLow,
            ios: Color.ios.secondarySystemBackground,
          }),
        }}
      >
        <Item label="Name" value={ExpoApplication.applicationName ?? ""} />

        <Divider />

        <Item label="Package" value={ExpoApplication.applicationId ?? ""} />

        <Divider />

        <Item
          label="Version"
          value={`v${ExpoApplication.nativeApplicationVersion} (${ExpoApplication.nativeBuildVersion})`}
        />

        <Divider />

        <Item label="Install Date" value={formattedInstalledAt} />

        {formattedUpdatedAt && (
          <>
            <Divider />

            <Item label="Update Date" value={formattedUpdatedAt} />
          </>
        )}
      </View>
    </Section>
  );
}

function Divider() {
  return (
    <View
      style={{
        height: 1,
        marginHorizontal: 16,
        backgroundColor: Platform.select({
          android: Color.android.dynamic.surfaceContainerHigh,
          ios: Color.ios.separator,
        }),
      }}
    />
  );
}

type ItemProps = {
  label: string;
  value: string;
};

function Item({ label, value }: ItemProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 16,
        paddingVertical: 16,
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
        {label}
      </Text>
      <Text
        style={{
          flex: 1,
          fontSize: 16,
          lineHeight: 24,
          textAlign: "right",
          color: Platform.select({
            android: Color.android.dynamic.onSurfaceVariant,
            ios: Color.ios.secondaryLabel,
          }),
        }}
      >
        {value}
      </Text>
    </View>
  );
}
