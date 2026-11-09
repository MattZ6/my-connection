# Contributing

Thanks for helping with My Connection. Bug reports, fixes and translations are all welcome.

## Setup

You need [Bun](https://bun.sh), Android Studio (or an Android device with USB debugging) and, for cloud builds, an [Expo account](https://expo.dev).

```bash
git clone https://github.com/MattZ6/my-connection.git
cd my-connection
bun i
```

The app uses native modules, so it doesn't run in Expo Go. Install a development build once, then start the dev server:

```bash
bunx expo run:android   # builds and installs the dev build locally
bun android             # starts the dev server on later runs
```

Prefer a physical device. Emulators don't report real Wi-Fi data.

Crash reporting needs `EXPO_PUBLIC_SENTRY_DSN`. Leave it unset locally and the app runs without it.

## Making changes

- Keep each pull request to one change, and follow the patterns already in the code.
- Write commits as [Conventional Commits](https://www.conventionalcommits.org), e.g. `fix(home): keep the details sheet taps working`.
- Name branches the same way: `feat/…`, `fix/…`, `docs/…`.
- Texts live in `src/i18next/locales` (`en`, `pt`, `es`). Update all three when you add or change one.

Before opening a pull request, run the same checks as CI:

```bash
bun typecheck
bun lint:ci
bunx expo-doctor
```

In the pull request, say what changed, why, and how you tested it (device and Android version).

## Reporting bugs

[Open an issue](https://github.com/MattZ6/my-connection/issues) with the steps to reproduce, what you expected, and your device, Android version, app version and connection type. Network behavior varies a lot between devices, so these details matter.

## Code of Conduct and license

By taking part you agree to the [Code of Conduct](CODE_OF_CONDUCT.md), and your contributions are licensed under the [MIT License](../LICENSE.md).
