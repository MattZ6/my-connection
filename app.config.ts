import { ConfigContext, ExpoConfig } from 'expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: 'Minha Conexão',
  slug: 'my-connection',
  version: '0.1.0',
  scheme: 'com.myconnection',
  orientation: 'default',

  icon: "./assets/icon.png",
  userInterfaceStyle: "automatic",
  backgroundColor: '#121113',
  primaryColor: '#eeeef0',
  androidNavigationBar: {
    backgroundColor: '#121113'
  },
  androidStatusBar: {
    barStyle: 'light-content',
  },

  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#121113",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true
  },
  android: {
    package: 'com.myconnection',
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#121113",
    },
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  plugins: [
    "expo-router",
    "expo-font"
  ],
  extra: {
    eas: {
      projectId: "ae48172c-0960-40e5-b46a-1dcf6ce1db40"
    }
  }
})
