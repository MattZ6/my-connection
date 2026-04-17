import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { SectionItem } from "@/components/ui/section";

type Props = {
  value: Date | null;
};

export function LastUpdatedItem({ value }: Props) {
  const { t } = useTranslation("translation", {
    keyPrefix: "preferences.sections.network_updates.fields.last_updated",
  });
  const [seconds, setSeconds] = useState<number | null>(() => {
    if (!value) {
      return null;
    }

    return Math.floor((Date.now() - value.getTime()) / 1000);
  });

  const formatted = formatFromSeconds(seconds, t);

  useEffect(() => {
    if (!value) {
      setSeconds(null);
      return;
    }

    const updateSeconds = () => {
      setSeconds(Math.floor((Date.now() - value.getTime()) / 1000));
    };

    updateSeconds();

    const intervalId = setInterval(updateSeconds, 1000);

    return () => clearInterval(intervalId);
  }, [value]);

  return <SectionItem label={t("title")} value={formatted} />;
}

function formatFromSeconds(
  seconds: number | null,
  t: (key: string, options?: Record<string, number>) => string,
) {
  if (seconds === null) {
    return "—";
  }

  if (seconds < 1) {
    return t("value.now");
  }

  if (seconds < 60) {
    return t("value.seconds", { count: seconds });
  }

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return t("value.minutes", { count: minutes });
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return t("value.hours", { count: hours });
  }

  const days = Math.floor(hours / 24);

  return t("value.days", { count: days });
}
