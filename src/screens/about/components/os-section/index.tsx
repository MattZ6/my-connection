import * as ExpoDevice from "expo-device";
import { useTranslation } from "react-i18next";
import { Platform } from "react-native";

import { Card } from "@/components/ui/card";

import { Section, SectionDivider, SectionItem } from "@/components/ui/section";

const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
) as "development" | "preview" | "production";

const isDev = environment === "development";

export function OSSection() {
  const { t } = useTranslation();

  return (
    <Section title={t("about.sections.os.title")}>
      <Card>
        <SectionItem
          label={t("about.sections.os.fields.name.title")}
          value={Platform.select({
            android: "Android",
            ios: "iOS",
            macos: "MacOS",
            windows: "Windows",
            web: "Web",
            default: "-",
          })}
        />

        <SectionDivider />

        <SectionItem
          label={t("about.sections.os.fields.version.title")}
          value={ExpoDevice.osVersion ?? "-"}
        />

        {ExpoDevice.platformApiLevel && (
          <>
            <SectionDivider />

            <SectionItem
              label={t("about.sections.os.fields.android_api.title")}
              value={String(ExpoDevice.platformApiLevel)}
            />
          </>
        )}

        {isDev && (
          <>
            <SectionDivider />

            <SectionItem
              label={t("about.sections.os.fields.build_id.title")}
              value={ExpoDevice.osBuildId ?? "-"}
              direction="column"
            />
          </>
        )}

        {isDev && (
          <>
            <SectionDivider />

            <SectionItem
              label={t("about.sections.os.fields.internal_build_id.title")}
              value={ExpoDevice.osInternalBuildId ?? "-"}
              direction="column"
            />
          </>
        )}

        {isDev && ExpoDevice.osBuildFingerprint && (
          <>
            <SectionDivider />

            <SectionItem
              label={t(
                "about.sections.os.fields.android_build_fingerprint.title",
              )}
              value={ExpoDevice.osBuildFingerprint}
              direction="column"
            />
          </>
        )}
      </Card>
    </Section>
  );
}
