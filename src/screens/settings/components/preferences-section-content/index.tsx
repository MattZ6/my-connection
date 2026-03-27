import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { PressableConfigItem } from "../pressable-config-item";

export function PreferencesSectionContent() {
  const router = useRouter();

  const handleNavigateToAppearancePage = useCallback(
    () => router.navigate("/settings/appearance"),
    [router.navigate],
  );

  return (
    <Section title="Preferences">
      <Card>
        <PressableConfigItem
          label="Appearance"
          icon={{
            android: "palette",
            ios: "paintpalette",
          }}
          onPress={handleNavigateToAppearancePage}
        />

        {/* <SectionDivider />

        <PressableConfigItem
          label="Language"
          icon={{
            android: "language",
            ios: "translate",
          }}
          onPress={handleNavigateToAppearancePage}
        /> */}
      </Card>
    </Section>
  );
}
