import { SymbolView } from "expo-symbols";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import {
  Section,
  SectionDivider,
  SectionItemContent,
  SectionItemLabel,
  SectionItemRoot,
  SectionItemTrailing,
  SectionItemValue,
} from "@/components/ui/section";
import { useLocation } from "@/hooks/use-location";
import { useTheme } from "@/hooks/use-theme";
import { ActionButton } from "./components/action-button";
import { Hint } from "./components/hint";

export function LocationSection() {
  const { t } = useTranslation("translation", {
    keyPrefix: "permissions.sections.location",
  });
  const {
    permission,
    precision,
    canAskAgain,
    locationServicesEnabled,
    requestPermission,
  } = useLocation();

  const showActionButton =
    permission !== "granted" ||
    precision !== "precise" ||
    !locationServicesEnabled;

  return (
    <Section title={t("title")}>
      <Card>
        <SectionItemRoot>
          <SectionItemContent>
            <SectionItemLabel>{t("fields.permission.title")}</SectionItemLabel>
          </SectionItemContent>

          <LocationTrailing
            state={permission === "granted" ? "success" : "pending"}
            text={t(`fields.permission.value.${permission}`)}
          />
        </SectionItemRoot>

        <SectionDivider />

        <SectionItemRoot>
          <SectionItemContent>
            <SectionItemLabel>{t("fields.precision.title")}</SectionItemLabel>
          </SectionItemContent>
          <LocationTrailing
            state={precision === "precise" ? "success" : "pending"}
            text={t(`fields.precision.value.${precision}`)}
          />
        </SectionItemRoot>

        <SectionDivider />

        <SectionItemRoot>
          <SectionItemContent>
            <SectionItemLabel>{t("fields.location.title")}</SectionItemLabel>
          </SectionItemContent>
          <LocationTrailing
            state={locationServicesEnabled ? "success" : "pending"}
            text={t(`fields.location.value.${locationServicesEnabled}`)}
          />
        </SectionItemRoot>

        {showActionButton && (
          <>
            <SectionDivider />

            <ActionButton
              permission={permission}
              precision={precision}
              canAskAgain={canAskAgain}
              locationServicesEnabled={locationServicesEnabled}
              requestPermission={requestPermission}
            />
          </>
        )}

        <Hint
          permission={permission}
          precision={precision}
          canAskAgain={canAskAgain}
          locationServicesEnabled={locationServicesEnabled}
        />
      </Card>
    </Section>
  );
}

type LocationTrailingProps = {
  state: "pending" | "success";
  text: string;
};

function LocationTrailing({ state, text }: LocationTrailingProps) {
  const { colors, fontFamily } = useTheme();

  const color = useMemo(() => {
    if (state === "pending") {
      return colors.semantic.warning;
    }

    if (state === "success") {
      return colors.semantic.success;
    }

    return colors.content.muted;
  }, [state, colors]);

  return (
    <SectionItemTrailing>
      <SectionItemValue style={{ fontFamily: fontFamily.medium, color }}>
        {text}
      </SectionItemValue>
      <SymbolView
        size={20}
        tintColor={color}
        name={{
          android: state === "success" ? "check" : "error",
        }}
      />
    </SectionItemTrailing>
  );
}
