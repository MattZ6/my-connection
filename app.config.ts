import type { ConfigContext, ExpoConfig } from "expo/config";

import { name, version } from "./package.json";

type Variant = "development" | "preview" | "production";

const variantConfig = {
  development: {
    package: "dev.zanin.myconnection.dev",
    primaryColor: "#43484E",
    splash: {
      android: {
        light: {
          imagePath: "./assets/variants/dev/splash-light.png",
          backgroundColor: "#F0F0F3",
        },
        dark: {
          imagePath: "./assets/variants/dev/splash-dark.png",
          backgroundColor: "#18191B",
        },
      },
      ios: {
        light: {
          imagePath: "./assets/variants/dev/splash-light.png",
          backgroundColor: "#F0F0F3",
        },
        dark: {
          imagePath: "./assets/variants/dev/splash-dark.png",
          backgroundColor: "#18191B",
        },
      },
    },
    icon: {
      android: {
        foregroundImagePath:
          "./assets/variants/dev/android-adaptive-icon-foreground.png",
        backgroundImagePath:
          "./assets/variants/dev/android-adaptive-icon-background.png",
        monochromeImagePath: "./assets/variants/android-monochrome-icon.png",
        backgroundColor: "#18191B",
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
    package: "dev.zanin.myconnection.preview",
    primaryColor: "#B0B4BA",
    splash: {
      android: {
        light: {
          imagePath: "./assets/variants/preview/splash-light.png",
          backgroundColor: "#E0E1E6",
        },
        dark: {
          imagePath: "./assets/variants/preview/splash-dark.png",
          backgroundColor: "#212225",
        },
      },
      ios: {
        light: {
          imagePath: "./assets/variants/preview/splash-light.png",
          backgroundColor: "#E0E1E6",
        },
        dark: {
          imagePath: "./assets/variants/preview/splash-dark.png",
          backgroundColor: "#212225",
        },
      },
    },
    icon: {
      android: {
        foregroundImagePath:
          "./assets/variants/preview/android-adaptive-icon-foreground.png",
        backgroundImagePath:
          "./assets/variants/preview/android-adaptive-icon-background.png",
        monochromeImagePath: "./assets/variants/android-monochrome-icon.png",
        backgroundColor: "#212225",
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
    package: "dev.zanin.myconnection",
    primaryColor: "#FCFCFD",
    splash: {
      android: {
        light: {
          imagePath: "./assets/variants/production/splash-light.png",
          backgroundColor: "#FCFCFD",
        },
        dark: {
          imagePath: "./assets/variants/production/splash-dark.png",
          backgroundColor: "#111113",
        },
      },
      ios: {
        light: {
          imagePath: "./assets/variants/production/splash-light.png",
          backgroundColor: "#FCFCFD",
        },
        dark: {
          imagePath: "./assets/variants/production/splash-dark.png",
          backgroundColor: "#111113",
        },
      },
    },
    icon: {
      android: {
        foregroundImagePath:
          "./assets/variants/production/android-adaptive-icon-foreground.png",
        backgroundImagePath: undefined,
        monochromeImagePath: "./assets/variants/android-monochrome-icon.png",
        backgroundColor: "#111113",
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
      image: variant.splash.ios.light.imagePath,
      tabletImage: variant.splash.ios.light.imagePath,
      backgroundColor: variant.splash.ios.light.backgroundColor,
      resizeMode: "contain",
      dark: {
        image: variant.splash.ios.dark.imagePath,
        tabletImage: variant.splash.ios.dark.imagePath,
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
      foregroundImage: variant.icon.android.foregroundImagePath,
      backgroundImage: variant.icon.android.backgroundImagePath,
      monochromeImage: variant.icon.android.monochromeImagePath,
      backgroundColor: variant.icon.android.backgroundColor,
    },
    splash: {
      image: variant.splash.android.light.imagePath,
      backgroundColor: variant.splash.android.light.backgroundColor,
      resizeMode: "contain",
      dark: {
        image: variant.splash.android.dark.imagePath,
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
