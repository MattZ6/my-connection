import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";
import { PressableConfigItem } from "../pressable-config-item";

export function AboutSectionContent() {
  const router = useRouter();

  const handleNavigateToAboutPage = useCallback(
    () => router.push("/settings/about"),
    [router.push],
  );

  const handleNavigateToLicensesPage = useCallback(
    () => router.push("/settings/licenses"),
    [router.push],
  );

  return (
    <Section title="About">
      <Card>
        <PressableConfigItem
          label="About"
          icon={{ android: "info", ios: "info.circle" }}
          onPress={handleNavigateToAboutPage}
        />

        <SectionDivider />

        <PressableConfigItem
          label="Licenses"
          icon={{ android: "apk_document", ios: "doc" }}
          onPress={handleNavigateToLicensesPage}
        />
      </Card>
    </Section>
  );
}
