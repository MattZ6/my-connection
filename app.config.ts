import type { ConfigContext, ExpoConfig } from "expo/config";

import { name, version } from "./package.json";

type Variant = "development" | "preview" | "production";

const variantConfig = {
  development: {
    name: "My Connection (Dev Client)",
    package: "com.myconnection.dev",
  },
  preview: {
    name: "My Connection (Preview)",
    package: "com.myconnection.preview",
  },
  production: {
    name: "My Connection",
    package: "com.myconnection",
  },
} as const;

const buildVariant: Variant = process.env.APP_VARIANT ?? "development";

const variant = variantConfig[buildVariant] ?? variantConfig.development;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: variant.name,

  slug: name,
  version,
  scheme: name,

  orientation: "default",

  icon: "./assets/icon.png",

  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
  },

  userInterfaceStyle: "automatic",

  ios: {
    bundleIdentifier: variant.package,
    supportsTablet: true,
  },

  android: {
    package: variant.package,
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
    },
  },

  plugins: [
    "expo-router",
    "expo-font",
    ["expo-dev-client", { launchMode: "launcher" }],
  ],

  extra: {
    eas: {
      projectId: "ae48172c-0960-40e5-b46a-1dcf6ce1db40",
    },
    variant: buildVariant,
  },
});
