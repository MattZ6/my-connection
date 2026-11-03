import { useTranslation } from "react-i18next";

import { SettingsSection } from "@/components/ui/settings-section";

import { LocationUtils } from "@/utils/location";

import { StepRow, type StepState } from "../step-row";

type Props = {
  permissionState: StepState;
  precisionState: StepState;
  servicesState: StepState;
  canAskAgain: boolean;
  requestPermission: () => Promise<void>;
};

export function StepsSection({
  permissionState,
  precisionState,
  servicesState,
  canAskAgain,
  requestPermission,
}: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "permissions",
  });

  const precisionDescription =
    precisionState === "locked"
      ? t("steps.precision.description_locked")
      : t("steps.precision.description");

  return (
    <SettingsSection title={t("sections.steps.title")}>
      {permissionState === "done" ? (
        <StepRow
          index={1}
          state="done"
          title={t("steps.permission.done_title")}
          description={t("steps.permission.done_description")}
        />
      ) : (
        <StepRow
          index={1}
          state={permissionState}
          title={t("steps.permission.title")}
          description={
            canAskAgain
              ? t("steps.permission.description")
              : t("steps.permission.description_blocked")
          }
          actionTitle={
            canAskAgain
              ? t("steps.permission.action")
              : t("steps.permission.action_blocked")
          }
          onAction={
            canAskAgain ? requestPermission : LocationUtils.openAppSettings
          }
        />
      )}

      {precisionState === "done" ? (
        <StepRow
          index={2}
          state="done"
          title={t("steps.precision.done_title")}
          description={t("steps.precision.done_description")}
        />
      ) : (
        <StepRow
          index={2}
          state={precisionState}
          title={t("steps.precision.title")}
          description={precisionDescription}
          actionTitle={t("steps.precision.action")}
          onAction={LocationUtils.openAppSettings}
        />
      )}

      {servicesState === "done" ? (
        <StepRow
          index={3}
          state="done"
          title={t("steps.services.done_title")}
          description={t("steps.services.done_description")}
        />
      ) : (
        <StepRow
          index={3}
          state={servicesState}
          title={t("steps.services.title")}
          description={t("steps.services.description")}
          actionTitle={t("steps.services.action")}
          onAction={LocationUtils.openDeviceLocationSettings}
        />
      )}
    </SettingsSection>
  );
}
