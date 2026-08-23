# Contributing

Thanks for your interest in contributing to **My Connection**. ❤️

**My Connection** is an open-source project focused on making network
information easier to understand on mobile devices.

Contributions are welcome, whether you're fixing a bug, improving
documentation, adding a translation, refining the UI, or working on
the application's technical foundations.

## Development setup

### Requirements

You'll need:

- Node.js
- Bun
- Expo
- Android Studio and/or Xcode (to run emulators, if needed)
- A physical device is recommended for network-related features

### Setup

In order to clone the project (via HTTPS), run this command:

```bash
git clone https://github.com/MattZ6/my-connection.git
```

> 💡 SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command: `git clone git@github.com:MattZ6/my-connection.git`

Install the project dependencies:

```bash
bun i
```

Start the development server:

```bash
bun start
```

## Making changes

Please keep changes focused.

Good pull requests usually:
- solve one problem;
- have a clear description;
- avoid unrelated refactors;
- preserve existing patterns;
- include documentation when appropriate.

Before opening a pull request, run:

```bash
bun typecheck
bun lint:ci
bunx expo-doctor
```

## Translations

Translations are especially welcome.

If you want to improve an existing translation or add a new language, please keep the existing translation structure and terminology consistent with the rest of the application.

The project currently supports:
- English
- Brazilian Portuguese
- Spanish

## Pull requests

When opening a pull request, please describe:

### What changed?

Briefly explain the change.

### Why?

Explain the problem or motivation behind it.

### How was it tested?

Describe the relevant testing performed.

For example:
- Android physical device
- Android emulator
- iOS simulator
- iOS physical device
- Static validation only

If the change affects the UI, screenshots or a short recording are
very helpful (and appreciated).

## Commit messages

There is no strict commit message convention at the moment.

Keep commits clear and descriptive.

Prefer:
```bash
Add connection refresh indicator
Fix Wi-Fi permission state
Improve network details layout
Add Spanish translations
```

over:
```bash
fix stuff
changes
update
```

## Code style

Please follow the existing project conventions.

The project uses:
- TypeScript
- React Native
- Expo
- Bun
- Biome

Avoid introducing new dependencies unless they provide meaningful
value to the project.

## Issues

When reporting a bug, please include:
- What happened
- What you expected to happen
- Device
- Operating system version
- App version
- Connection type
- Steps to reproduce

Network-related bugs are particularly sensitive to device and platform differences, so these details can be **very helpful**.

## Code of Conduct

By participating in this project, you agree to follow the project's [Code of Conduct](https://github.com/MattZ6/my-connection/blob/main/.github/CODE_OF_CONDUCT.md).

## License

By contributing to **My Connection**, you agree that your contributions will be licensed under the project's [MIT License](https://github.com/MattZ6/my-connection/blob/main/LICENSE.md).
