import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";

import { HapticsToggle } from "./components/haptics-toggle";

export function HapticsSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.haptics",
  });

  return (
    <Section title={t("title")}>
      <Card>
        <HapticsToggle />
      </Card>
    </Section>
  );
}
