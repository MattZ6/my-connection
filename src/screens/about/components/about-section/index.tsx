import * as ExpoApplication from "expo-application";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

type UseInstallDatesInput = {
  language: string;
};

function useInstallDates({ language }: UseInstallDatesInput) {
  const [installedAt, setInstalledAt] = useState<Date | null>(null);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

  const dateFormatter = new Intl.DateTimeFormat(language, {
    dateStyle: "medium",
    timeStyle: "short",
  });

  let formattedInstalledAt = "...";
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
  const { t, i18n } = useTranslation();

  const { formattedInstalledAt, formattedUpdatedAt } = useInstallDates({
    language: i18n.language,
  });

  return (
    <Section title={t("about.sections.about.title")}>
      <Card>
        <SectionItem
          label={t("about.sections.about.fields.name.title")}
          value={ExpoApplication.applicationName ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.about.fields.package.title")}
          value={ExpoApplication.applicationId ?? "-"}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.about.fields.version.title")}
          value={`v${ExpoApplication.nativeApplicationVersion} (${ExpoApplication.nativeBuildVersion})`}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.about.fields.installed_at.title")}
          value={formattedInstalledAt}
        />

        {formattedUpdatedAt && (
          <>
            <SectionDivider />

            <SectionItem
              label={t("about.sections.about.fields.updated_at.title")}
              value={formattedUpdatedAt}
            />
          </>
        )}
      </Card>
    </Section>
  );
}
