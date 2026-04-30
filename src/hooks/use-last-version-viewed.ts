import * as ExpoApplication from "expo-application";
import { useMMKVString } from "react-native-mmkv";

import { personalSettingsStorage, STORAGE_KEY } from "@/repositories/settings";

const currrentAppVersion = `v${ExpoApplication.nativeApplicationVersion}`;

export function useLastVersionViewed() {
  const [lastVersionViewed, setLastVersionViewed] = useMMKVString(
    STORAGE_KEY.LAST_CHANGELOG_VERSION_VIEWED,
    personalSettingsStorage,
  );

  return {
    currrentAppVersion,
    lastVersionViewed,
    setLastVersionViewed,
  };
}
