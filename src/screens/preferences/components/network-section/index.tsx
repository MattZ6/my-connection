import { useTranslation } from "react-i18next";

import { Card } from "@/components/ui/card";
import { Section, SectionDivider } from "@/components/ui/section";

import { useNetworkUpdates } from "@/hooks/use-network-updates";

import { AutomaticUpdatesToggle } from "./componens/automatic-updates-toggle/index";
import { LastUpdatedItem } from "./componens/last-updated-item";
import { UpdateFrequencySelect } from "./componens/update-frequency-select/index";

export function NetworkSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates",
  });
  const {
    automaticUpdatesOn,
    toggleAutomaticUpdates,
    updateFrequency,
    changeUpdateFrequency,
    lastUpdated,
  } = useNetworkUpdates();

  return (
    <Section title={t("title")}>
      <Card>
        <AutomaticUpdatesToggle
          value={automaticUpdatesOn}
          onToggle={toggleAutomaticUpdates}
        />

        <SectionDivider />

        <UpdateFrequencySelect
          value={updateFrequency}
          onChange={changeUpdateFrequency}
        />

        <SectionDivider />

        <LastUpdatedItem value={lastUpdated} />
      </Card>
    </Section>
  );
}
