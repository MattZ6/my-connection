export const en = {
  translation: {
    app: {
      development: {
        name: "My Connection (Dev Client)",
      },
      preview: {
        name: "My Connection (Preview)",
      },
      production: {
        name: "My Connection",
      },
    },

    tabs: {
      home: { title: "Home" },
      settings: { title: "Settings" },
    },

    home: {
      meta: { title: "Connection Health" },

      sections: {
        hero: {
          fields: {
            connection_type: {
              label: "Connection Type",
              value: {
                bluetooth: "Bluetooth",
                cellular: "Cellular",
                ethernet: "Ethernet",
                none: "None",
                other: "Other",
                unknown: "Unknown",
                vpn: "VPN",
                wifi: "Wi-Fi",
                wimax: "WiMAX",
              },
            },
            strength: { label: "Signal Strength" },
            speed: {
              label: "Speed",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            download: {
              label: "Download",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            upload: {
              label: "Upload",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            carrier: {
              label: "Carrier",
            },
            generation: {
              label: "Generation",
            },
          },
        },

        summary: {
          title: "Summary",
          fields: {
            wifi_enabled: {
              title: "Wi-Fi Enabled",
              description: "Whether Wi-Fi is turned on.",
              value: { true: "Yes", false: "No", null: "—" },
            },
            connected: {
              title: "Connected",
              description: "Whether you're currently connected to a network.",
              value: { true: "Yes", false: "No", null: "—" },
            },
            internet_reachable: {
              title: "Internet Access",
              description:
                "Whether the internet can be reached using your current connection.",
              value: { true: "Yes", false: "No", null: "—" },
            },
          },
        },

        performance: {
          title: "Performance",
          fields: {
            strength: {
              title: "Signal Strength",
              value_zero: "—",
              value_other: "{{ count }}%",
            },
            speed: {
              title: "Link Speed",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            download: {
              title: "Download",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            upload: {
              title: "Upload",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
          },
        },

        network: {
          title: "Network",
          fields: {
            ssid: {
              title: "SSID",
              action: {
                title: "Tap to show",
                handling: {
                  permission_request: {
                    title: "Access Wi-Fi network name",
                    message:
                      "To show your Wi-Fi network name (SSID), this app requires location access. This is an Android system requirement.",
                    action: { title: "Allow Access" },
                  },
                  permission_blocked: {
                    title: "Permission required",
                    message:
                      "Location permission was denied.\nYou can enable it in your device settings.",
                    action: { title: "Open Settings" },
                  },
                  precision_required: {
                    title: "Precise location required",
                    message:
                      "To show detailed Wi-Fi information, precise location needs to be enabled.\nUpdate your location settings to continue.",
                    action: { title: "Open Settings" },
                  },
                  location_off: {
                    title: "Turn on location",
                    message:
                      "Location services need to be enabled to access Wi-Fi details.",
                    action: { title: "Open Settings" },
                  },
                },
              },
            },
            bssid: { title: "BSSID" },
            frequency: {
              title: "Frequency",
              value_zero: "—",
              value_other: "{{ count }} GHz",
            },
          },
        },

        ip: {
          title: "IP Configuration",
          fields: {
            ip: {
              title: "IP Address",
              description: "Can be in IPv4 or IPv6 format.",
            },
            mask: {
              title: "Subnet Mask",
              description: "Displayed in IPv4 format.",
            },
          },
        },

        cellular: {
          title: "Cellular",
          fields: {
            carrier: { title: "Carrier" },
            generation: { title: "Network Generation" },
          },
        },

        properties: {
          title: "Connection Properties",
          fields: {
            expensive_connection: {
              title: "Expensive Connection",
              description:
                "May consume more battery or incur additional costs.",
              value: { true: "Yes", false: "No", null: "—" },
            },
          },
        },
      },
    },

    settings: {
      meta: { title: "Settings" },
      sections: {
        environment_banner: {
          development: {
            title: "Development build",
            description:
              "This version is used for development and testing. Some features may be incomplete or unstable.",
          },
          preview: {
            title: "Preview build",
            description:
              "This is a preview version of the app. Some features may still be evolving.",
          },
        },
        preferences: {
          title: "Preferences",
          links: {
            preferences: { title: "Preferences" },
            permissions: { title: "Permissions" },
            appearance: { title: "Appearance" },
            language: { title: "Language" },
          },
        },
        about: {
          title: "About",
          links: {
            about: { title: "About" },
            licenses: { title: "Licenses" },
            changelog: { title: "Changelog" },
            privacy_policy: { title: "Privacy Policy" },
          },
        },
      },
      disclaimer: {
        text: "This app does not collect personal data.\nAll information stays on your device.",
      },
    },

    preferences: {
      meta: { title: "Preferences" },
      sections: {
        network_updates: {
          title: "Network updates",
          fields: {
            automatic_updates: {
              title: "Automatic updates",
              description: "Refresh network information automatically",
            },
            frequency: {
              title: "Update frequency",
            },
            last_updated: {
              title: "Last updated",
              value: {
                now: "now",
                seconds_one: "{{count}} second ago",
                seconds_other: "{{count}} seconds ago",
                minutes_one: "{{count}} minute ago",
                minutes_other: "{{count}} minutes ago",
                hours_one: "{{count}} hour ago",
                hours_other: "{{count}} hours ago",
                days_one: "{{count}} day ago",
                days_other: "{{count}} days ago",
              },
            },
          },
          actions: {
            refresh: {
              title: "Refresh network status",
            },
          },
        },
        haptics: {
          title: "Haptic Feedback",
          fields: {
            haptics: {
              title: "Haptic Feedback",
              description: "Vibrate slightly on interactions.",
            },
          },
        },
      },
    },

    permissions: {
      meta: { title: "Permissions" },
      sections: {
        location: {
          title: "Location",
          fields: {
            permission: {
              title: "Location Access",
              value: {
                undetermined: "Not determined",
                granted: "Allowed",
                denied: "Not allowed",
              },
            },
            precision: {
              title: "Precision",
              value: {
                none: "Unavailable",
                precise: "Precise",
                reduced: "Reduced",
              },
            },
            location: {
              title: "Location Services",
              value: {
                true: "Enabled",
                false: "Disabled",
              },
            },
          },
          action: {
            request_permission: "Allow access",
            open_app_permission_settings: "Open settings",
            open_location_settings: "Turn on location",
          },
          disclaimer: {
            permission_undetermined:
              "Location access is needed to display your Wi-Fi network details.",
            permission_denied_can_ask_again:
              "Location access is needed to display your Wi-Fi network details.",
            permission_denied:
              "Location access is required to display Wi-Fi network details.\nEnable it in your device settings.",
            invalid_precision:
              "Precise location is required to access Wi-Fi network details.\nPlease allow precise location.",
            location_disabled:
              "Location services must be enabled to access Wi-Fi network details.",
            all_right: "All required settings are enabled.",
          },
        },
      },
      disclaimer:
        "Your location is never stored or shared.\nIt’s only used to access Wi-Fi network details.",
    },

    appearance: {
      meta: { title: "Appearance" },
      sections: {
        theme: {
          title: "Theme",
          fields: {
            system: { title: "System (recommended)" },
            light: { title: "Light" },
            dark: { title: "Dark" },
          },
        },
        android_dynamic_colors: {
          fields: {
            dynamic_colors: {
              title: "Use system colors",
              description:
                "Adapt colors based on your device theme and wallpaper.",
            },
          },
        },
      },
    },

    licenses: { meta: { title: "Licenses" } },

    about: {
      meta: { title: "About" },
      sections: {
        about: {
          title: "App Info",
          fields: {
            name: { title: "Name" },
            package: { title: "Package" },
            version: { title: "Version" },
            installed_at: { title: "Installed" },
            updated_at: { title: "Last Updated" },
          },
        },
        device: {
          title: "Device",
          fields: {
            type: {
              title: "Device Type",
              value: {
                0: "Unknown",
                1: "Phone",
                2: "Tablet",
                3: "Desktop",
                4: "TV",
                null: "—",
              },
            },
            manufacturer: { title: "Manufacturer" },
            model: { title: "Model" },
            year: { title: "Year Class" },
            android_design_name: { title: "Android Design Name" },
            android_product_name: { title: "Android Product Name" },
          },
        },
        os: {
          title: "Operating System",
          fields: {
            name: { title: "OS" },
            version: { title: "Version" },
            build_id: { title: "Build ID" },
            internal_build_id: { title: "Internal Build ID" },
            android_api: { title: "Android API Level" },
            android_build_fingerprint: {
              title: "Build Fingerprint",
            },
          },
        },
        author: {
          title: "Author",
          fields: {
            description:
              "{{app_name}} started as a personal tool to explore network information and evolved into a simple app focused on clarity and control.",
          },
          actions: {
            view_on_github: {
              title: "View on GitHub",
            },
          },
        },
      },
      disclaimer: "Don't worry — this information never leaves your device.",
    },

    language: {
      meta: { title: "Language" },
      sections: {
        language: {
          title: "Language",
          fields: {
            language: {
              en: { title: "English" },
              pt: {
                title: "Português (Brasil)",
                description: "Brazilian Portuguese",
              },
              es: {
                title: "Español",
                description: "Spanish",
              },
            },
          },
        },
      },
    },

    changelog: {
      meta: {
        title: "Changelog",
      },
      sections: {
        latest_version: {
          title: "Latest version",
        },
        previous_versions: {
          title: "Previous versions",
        },
      },
      versions: {
        meta: {
          "v0.7.1": {
            title: "Ready for publishing",
            date: "2026-05-08",
            description:
              "Small improvements focused on app publishing, permissions, and project organization.",
          },
          "v0.7.0": {
            title: "More refined",
            date: "2026-05-04",
            description:
              "This update focuses on polish, smoother interactions, and a more refined visual identity.",
          },
          "v0.6.0": {
            title: "Now telling its own story",
            date: "2026-04-29",
            description:
              "The app can now show what’s new — along with a few improvements behind the scenes.",
          },
          "v0.5.0": {
            title: "A bit more human",
            date: "2026-04-23",
            description:
              "This update adds more context and personality, making the app feel clearer and more complete.",
          },
          "v0.4.0": {
            title: "More control and feedback",
            date: "2026-04-23",
            description:
              "New network features, better feedback, and smoother interactions across the app.",
          },
          "v0.3.0": {
            title: "Smoother and more reliable",
            date: "2026-04-09",
            description:
              "Several fixes and refinements to make the app feel more stable and consistent.",
          },
          "v0.2.0": {
            title: "A more complete experience",
            date: "2026-04-06",
            description:
              "Themes, haptics, and multiple languages — this update brings key features that shape the app experience.",
          },
          "v0.1.7": {
            title: "Better organized settings",
            date: "2026-03-25",
            description:
              "Improved structure and layout to make settings clearer and easier to navigate.",
          },
          "v0.1.6": {
            title: "Better Android experience",
            date: "2026-03-25",
            description:
              "Improvements focused on Android, including device information and visual consistency.",
          },
          "v0.1.5": {
            title: "Stability fix",
            date: "2026-03-24",
            description:
              "Adjusted dependencies to keep things stable and working as expected.",
          },
          "v0.1.4": {
            title: "Easier navigation",
            date: "2026-03-24",
            description:
              "Added tab navigation to make moving around the app simpler and more intuitive.",
          },
          "v0.1.3": {
            title: "Keeping things safe",
            date: "2026-03-20",
            description:
              "Crash reporting is now in place to help catch issues and improve reliability over time.",
          },
          "v0.1.2": {
            title: "A clearer identity",
            date: "2026-03-19",
            description:
              "App icon and splash screen now adapt to each build, making environments easier to recognize.",
          },
          "v0.1.1": {
            title: "Small cleanup",
            date: "2026-03-19",
            description:
              "A small internal cleanup to keep things simpler and easier to evolve.",
          },
          "v0.1.0": {
            title: "A fresh start",
            date: "2026-03-19",
            description:
              "The beginning of a new phase — a simple idea evolving into a more structured and thoughtful app.",
          },
        },
        content: {
          "v0.7.1": {
            paragraphs: [
              "This update focuses on preparing the app for production distribution and store publishing.",
              "Some internal configurations and Android permissions were adjusted to keep the app cleaner and more aligned with platform requirements.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Removed unnecessary Android foreground location service permission",
                  "Updated project package name to the new namespace",
                  "General dependency updates and maintenance improvements",
                ],
              },
            ],
          },
          "v0.7.0": {
            paragraphs: [
              "This update brings a series of refinements to make the app feel smoother and more responsive.",
              "From subtle animations to visual improvements, everything was designed to feel more cohesive and polished.",
            ],
            highlights: [
              {
                type: "features",
                title: "New Features",
                items: [
                  "Added animations to the refresh action",
                  "Added subtle entry animations to home cards",
                  "Improved BSSID copy interaction with animated feedback",
                  "Added a subtle indicator for new versions in the changelog",
                ],
              },
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Refined spacing in changelog items",
                  "Updated color palette for better visual consistency",
                ],
              },
              {
                type: "infrastructure",
                title: "Visual & Assets",
                items: [
                  "Revamped app icon and splash screen",
                  "Improved icon quality and sizing",
                  "Polished Android adaptive icon with better shadow",
                ],
              },
            ],
          },
          "v0.6.0": {
            paragraphs: [
              "This update introduces the in-app changelog, making it easier to follow how the app evolves over time.",
              "It also includes a few structural and visual improvements to keep things clean, consistent, and easier to maintain.",
            ],
            highlights: [
              {
                type: "features",
                title: "New features",
                items: [
                  "Added in-app changelog to track updates directly in the app",
                ],
              },
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Improved typography with better letter spacing",
                  "Refined changelog metadata structure",
                ],
              },
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: [
                  "Refactored providers into a single structure",
                  "Updated dependencies",
                ],
              },
            ],
          },
          "v0.5.0": {
            paragraphs: [
              "This update focuses on adding more context and personality to the app.",
              "Small but meaningful changes were made to improve clarity and make the experience feel more complete.",
            ],
            highlights: [
              {
                type: "features",
                title: "New features",
                items: ["Added author section in About screen"],
              },
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Improved About screen sections",
                  "Added environment banner for dev and preview builds",
                  "Improved metadata translations by variant",
                ],
              },
              {
                type: "fixes",
                title: "Fixes",
                items: ["Improved network updates behavior using refresh"],
              },
            ],
          },
          "v0.4.0": {
            paragraphs: [
              "This update introduces more control over network data and improves interaction feedback across the app.",
              "It also brings better handling of permissions, animations, and real-time updates.",
            ],
            highlights: [
              {
                type: "features",
                title: "New features",
                items: [
                  "Added network updates manager",
                  "Added BSSID copy functionality",
                  "Introduced animated signal strength bar",
                  "Added location permission management on Android",
                ],
              },
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Improved pressable feedback on Android",
                  "Added haptics preference setting",
                  "Improved refresh button styles",
                  "Enhanced translation metadata",
                ],
              },
              {
                type: "fixes",
                title: "Fixes",
                items: ["Fixed download value display issues"],
              },
            ],
          },
          "v0.3.0": {
            paragraphs: [
              "This update focuses on refining the experience and improving stability across the app.",
              "Several UI improvements, bug fixes, and structural changes were introduced to make the app more reliable and consistent.",
            ],
            highlights: [
              {
                type: "features",
                title: "New features",
                items: [
                  "Added privacy disclaimer in settings",
                  "Added SSID display on Android",
                ],
              },
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Added refresh button to home screen",
                  "Improved theme system and selection colors",
                  "Refined About screen and dynamic color texts",
                  "Applied various UI and style refinements",
                ],
              },
              {
                type: "fixes",
                title: "Fixes",
                items: [
                  "Fixed broken translations on the home screen",
                  "Fixed download speed and display issues",
                  "Improved performance field values",
                ],
              },
            ],
          },
          "v0.2.0": {
            paragraphs: [
              "This update represents a major step forward, introducing core features that define the app experience.",
              "Themes, haptic feedback, and internationalization were added, along with several improvements to layout, performance, and overall consistency.",
            ],
            highlights: [
              {
                type: "features",
                title: "New features",
                items: [
                  "Added theme support with persistence",
                  "Introduced haptic feedback",
                  "Added internationalization (i18n)",
                ],
              },
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Improved home screen layout and structure",
                  "Enhanced iOS headers and visual consistency",
                  "Added dividers and refinements to settings sections",
                ],
              },
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: [
                  "Migrated licenses list to a virtualized list",
                  "Improved app configuration and platform targeting",
                  "Updated dependencies and project setup",
                ],
              },
            ],
          },
          "v0.1.7": {
            paragraphs: [
              "This update improves the settings experience by refining layout, naming, and structure.",
              "It makes navigation clearer and ensures a more consistent visual experience across the app.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Improved settings naming and styles on Android",
                  "Refined settings structure and separation",
                  "Applied small layout and style fixes",
                ],
              },
            ],
          },
          "v0.1.6": {
            paragraphs: [
              "This update focuses on improving the Android experience and fixing minor issues in the About screen.",
              "It also introduces device information details for better visibility into the current device.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Adopted Material 3 dynamic colors on Android",
                  "Added Android device information details",
                ],
              },
              {
                type: "fixes",
                title: "Fixes",
                items: ["Fixed invalid color token import in About screen"],
              },
            ],
          },
          "v0.1.5": {
            paragraphs: [
              "This update fixes an issue related to the Sentry dependency by rolling back to a more stable version.",
            ],
            highlights: [
              {
                type: "fixes",
                title: "Fixes",
                items: ["Rolled back Sentry dependency to a stable version"],
              },
            ],
          },
          "v0.1.4": {
            paragraphs: [
              "This update introduces tab-based navigation, making it easier to move between different sections of the app.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: ["Added tabs navigation structure"],
              },
            ],
          },
          "v0.1.3": {
            paragraphs: [
              "This update introduces crash reporting using Sentry, allowing better tracking of unexpected issues and improving overall app stability.",
            ],
            highlights: [
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: ["Added Sentry for crash reporting and error tracking"],
              },
            ],
          },
          "v0.1.2": {
            paragraphs: [
              "This update introduces visual improvements by configuring the app icon and splash screen based on the current build variant.",
              "This helps better differentiate development, preview, and production environments, making it easier to identify which version of the app is running.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Configured app icon based on build variant",
                  "Configured splash screen based on build variant",
                ],
              },
            ],
          },
          "v0.1.1": {
            paragraphs: [
              "This update focuses on a small cleanup in the app configuration to keep things simpler and easier to evolve moving forward.",
            ],
            highlights: [
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: ["Removed color definitions from app configuration"],
              },
            ],
          },
          "v0.1.0": {
            paragraphs: [
              "This version marks the beginning of a new phase for My Connection.",
              "The project originally started back in March 2024 as a simple idea. After some time, I came back to it with a clearer direction and a more structured approach — introducing pull requests, versioning, and a proper development workflow.",
              "From here on, the goal is to evolve the app step by step, focusing on clarity, consistency, and a better overall experience.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Migrated to Expo SDK 55",
                  "Set up development and preview build pipelines",
                  "Introduced build variants (development, preview, production)",
                  "Configured dev client for local development",
                  "Added base UI structure using Expo UI",
                  "Improved project configuration and linting",
                ],
              },
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: [
                  "Remote versioning setup via EAS",
                  "CI workflows for preview builds",
                  "Dependency updates and project cleanup",
                ],
              },
            ],
          },
        },
      },
    },
  },
};

export default en;
export type Translations = typeof en;
