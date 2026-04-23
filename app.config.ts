import type { ConfigContext, ExpoConfig } from "expo/config";

import { name, version } from "./package.json";

type Variant = "development" | "preview" | "production";

const variantConfig = {
  development: {
    package: "com.myconnection.dev",
    primaryColor: "#007CC9",
    splash: {
      android: {
        imagePath: "./assets/variants/dev/splash.png",
        light: {
          backgroundColor: "#C2E8FF",
        },
        dark: {
          backgroundColor: "#021C2C",
        },
      },
      ios: {
        imagePath: "./assets/variants/dev/splash.png",
        light: {
          backgroundColor: "#C2E8FF",
        },
        dark: {
          backgroundColor: "#021C2C",
        },
      },
    },
    icon: {
      android: {
        imagePath: "./assets/variants/dev/android-adaptive-icon.png",
        backgroundColor: "#C2E8FF",
      },
      ios: {
        light: {
          imagePath: "./assets/variants/dev/ios-light-icon.png",
        },
        dark: {
          imagePath: "./assets/variants/dev/ios-dark-icon.png",
        },
        tinted: {
          imagePath: "./assets/variants/ios-tinted-icon.png",
        },
      },
    },
    locales: {
      en: "./languages/variants/dev/en.json",
      pt: "./languages/variants/dev/pt.json",
      es: "./languages/variants/dev/es.json",
    },
  },
  preview: {
    package: "com.myconnection.preview",
    primaryColor: "#E58600",
    splash: {
      android: {
        imagePath: "./assets/variants/preview/splash.png",
        light: {
          backgroundColor: "#FBF0E0",
        },
        dark: {
          backgroundColor: "#2F1B00",
        },
      },
      ios: {
        imagePath: "./assets/variants/preview/splash.png",
        light: {
          backgroundColor: "#FBF0E0",
        },
        dark: {
          backgroundColor: "#2F1B00",
        },
      },
    },
    icon: {
      android: {
        imagePath: "./assets/variants/preview/android-adaptive-icon.png",
        backgroundColor: "#FBF0E0",
      },
      ios: {
        light: {
          imagePath: "./assets/variants/preview/ios-light-icon.png",
        },
        dark: {
          imagePath: "./assets/variants/preview/ios-dark-icon.png",
        },
        tinted: {
          imagePath: "./assets/variants/ios-tinted-icon.png",
        },
      },
    },
    locales: {
      en: "./languages/variants/preview/en.json",
      pt: "./languages/variants/preview/pt.json",
      es: "./languages/variants/preview/es.json",
    },
  },
  production: {
    package: "com.myconnection",
    primaryColor: "#00A400",
    splash: {
      android: {
        imagePath: "./assets/variants/production/splash.png",
        light: {
          backgroundColor: "#DDFFDD",
        },
        dark: {
          backgroundColor: "#012F01",
        },
      },
      ios: {
        imagePath: "./assets/variants/production/splash.png",
        light: {
          backgroundColor: "#DDFFDD",
        },
        dark: {
          backgroundColor: "#012F01",
        },
      },
    },
    icon: {
      android: {
        imagePath: "./assets/variants/production/android-adaptive-icon.png",
        backgroundColor: "#DDFFDD",
      },
      ios: {
        light: {
          imagePath: "./assets/variants/production/ios-light-icon.png",
        },
        dark: {
          imagePath: "./assets/variants/production/ios-dark-icon.png",
        },
        tinted: {
          imagePath: "./assets/variants/ios-tinted-icon.png",
        },
      },
    },
    locales: {
      en: "./languages/variants/prod/en.json",
      pt: "./languages/variants/prod/pt.json",
      es: "./languages/variants/prod/es.json",
    },
  },
} as const;

const buildVariant: Variant =
  process.env.EXPO_PUBLIC_APP_VARIANT ?? "development";

const variant = variantConfig[buildVariant] ?? variantConfig.development;

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: "My Connection",

  slug: name,
  version,
  scheme: name,

  platforms: ["ios", "android"],

  orientation: "default",
  userInterfaceStyle: "automatic",

  icon: variant.icon.ios.light.imagePath,

  ios: {
    bundleIdentifier: variant.package,
    supportsTablet: true,
    icon: {
      light: variant.icon.ios.light.imagePath,
      dark: variant.icon.ios.dark.imagePath,
      tinted: variant.icon.ios.tinted.imagePath,
    },
    splash: {
      image: variant.splash.ios.imagePath,
      tabletImage: variant.splash.ios.imagePath,
      backgroundColor: variant.splash.ios.light.backgroundColor,
      resizeMode: "contain",
      dark: {
        image: variant.splash.ios.imagePath,
        tabletImage: variant.splash.ios.imagePath,
        backgroundColor: variant.splash.ios.dark.backgroundColor,
        resizeMode: "contain",
      },
    },
    entitlements: {
      "com.apple.developer.networking.wifi-info": true,
    },
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
  },

  android: {
    package: variant.package,
    adaptiveIcon: {
      foregroundImage: variant.icon.android.imagePath,
      backgroundColor: variant.icon.android.backgroundColor,
    },
    splash: {
      image: variant.splash.android.imagePath,
      backgroundColor: variant.splash.android.light.backgroundColor,
      resizeMode: "contain",
      dark: {
        image: variant.splash.android.imagePath,
        backgroundColor: variant.splash.android.dark.backgroundColor,
        resizeMode: "contain",
      },
    },
  },

  locales: variant.locales,

  plugins: [
    "expo-router",
    "expo-font",
    [
      "expo-localization",
      {
        supportedLocales: {
          ios: ["en", "pt", "es"],
          android: ["en", "pt", "es"],
        },
      },
    ],
    [
      "expo-location",
      {
        isAndroidForegroundServiceEnabled: true,
      },
    ],
    ["expo-dev-client", { launchMode: "launcher" }],
    [
      "@sentry/react-native/expo",
      {
        url: "https://sentry.io/",
        project: "my-connection",
        organization: "zanin-y7",
      },
    ],
  ],

  extra: {
    eas: {
      projectId: "ae48172c-0960-40e5-b46a-1dcf6ce1db40",
    },
    variant: buildVariant,
  },
});
