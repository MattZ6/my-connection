import { useLocalSearchParams } from "expo-router";

import { VersionScreen } from "@/screens/version";

type Params = {
  version: string;
};

export default function VersionPage() {
  const params = useLocalSearchParams<Params>();

  return <VersionScreen version={params.version} />;
}
