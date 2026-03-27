import * as ExpoApplication from "expo-application";
import { useEffect, useState } from "react";
import { Platform } from "react-native";
import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

const dateFormatter = new Intl.DateTimeFormat("en-us", {
  dateStyle: "medium",
  timeStyle: "short",
});

function useInstallDates() {
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

  return {
    formattedInstalledAt,
    formattedUpdatedAt,
  };
}

export function AboutSection() {
  const { formattedInstalledAt, formattedUpdatedAt } = useInstallDates();

  return (
    <Section title="About">
      <Card>
        <SectionItem
          label="Name"
          value={ExpoApplication.applicationName ?? ""}
        />

        <SectionDivider />

        <SectionItem
          label="Package"
          value={ExpoApplication.applicationId ?? ""}
        />

        <SectionDivider />

        <SectionItem
          label="Version"
          value={`v${ExpoApplication.nativeApplicationVersion} (${ExpoApplication.nativeBuildVersion})`}
        />

        <SectionDivider />

        <SectionItem label="Install Date" value={formattedInstalledAt} />

        {formattedUpdatedAt && (
          <>
            <SectionDivider />

            <SectionItem label="Update Date" value={formattedUpdatedAt} />
          </>
        )}
      </Card>
    </Section>
  );
}
