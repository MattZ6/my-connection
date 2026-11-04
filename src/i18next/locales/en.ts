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
      header: {
        type: {
          wifi: "Wi-Fi",
          cellular: "Cellular",
          ethernet: "Ethernet",
          vpn: "VPN",
          bluetooth: "Bluetooth",
          other: "Other",
          wimax: "WiMAX",
          unknown: "Unknown connection",
          none: "No connection",
        },
        subtitle: {
          connected: "Connected",
          not_connected: "Not connected",
          show_network_name: "Show network name",
        },
      },
      quality: {
        no_signal: "No signal",
        weak: "Weak",
        fair: "Fair",
        good: "Good",
        excellent: "Excellent",
      },
      gauge: {
        a11y: "Signal strength {{ value }}%, {{ quality }}",
        mobile: "Mobile network",
        wired: "Wired",
        vpn: "VPN active",
        tethering: "Tethering",
        other: "Other network",
        unknown: "Unknown",
        offline: "Offline",
        not_connected: "Not connected",
        checking: "Checking",
      },
      status: {
        reachable: "Internet reachable",
        unreachable: "No internet access",
        offline: "No internet",
        checking: "Checking internet…",
      },
      link_speed: {
        title: "Link speed",
        unit: "Mbps",
        download: "Download",
        upload: "Upload",
      },
      pills: {
        metered: "Metered connection · uses your data plan",
        vpn: "Signal details are hidden behind the VPN",
      },
      details: {
        button: "View details",
        title: "Connection details",
        sections: {
          network: "Network",
          signal: "Signal",
          ip: "IP configuration",
          mobile: "Mobile network",
          properties: "Properties",
        },
        fields: {
          ssid: "Name (SSID)",
          bssid: "BSSID",
          frequency: "Frequency",
          strength: "Strength",
          link_speed: "Link speed ↓ / ↑",
          ip_address: "IP address",
          subnet: "Subnet mask",
          carrier: "Carrier",
          generation: "Generation",
          connection_type: "Connection type",
          metered: "Metered connection",
          internet: "Internet access",
          wifi_enabled: "Wi-Fi turned on",
        },
        values: {
          yes: "Yes",
          no: "No",
          unknown: "—",
          hidden: "Hidden",
          frequency: "{{ value }} GHz",
          strength: "{{ value }}%",
          link_speed: "{{ download }} / {{ upload }} Mbps",
        },
        notes: {
          hidden_network:
            "Android only shares the Wi-Fi name and BSSID with apps that have location access. Your location is never stored or shared.",
          allow_access: "Allow access",
          cellular:
            "IP address and signal strength are not available for mobile data.",
          vpn: "The VPN hides the network underneath it, so only these properties are available.",
          bluetooth:
            "Internet shared from another device over Bluetooth. No other details are available for this connection.",
          other: "No other details are available for this connection type.",
        },
      },
      network_name: {
        dismiss: "Not now",
        footnote: "Your location is never stored or shared.",
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
      hints: {
        dismiss: "Dismiss",
        actions: {
          open_network_settings: "Open network settings",
          choose_network: "Choose a network",
          turn_on_wifi: "Turn on Wi-Fi",
        },
        offline: {
          title: "You're offline",
          message: "Turn on Wi-Fi or mobile data to get connected.",
        },
        wifi_disconnected: {
          title: "Not connected to a network",
          message: "Wi-Fi is on, but you are not connected to any network.",
        },
        wifi_no_internet: {
          title: "Connected, but no internet",
          message:
            "The network may need a sign-in, or the router has no internet right now.",
        },
        cellular_no_internet: {
          title: "Connected, but no internet",
          message:
            "Check if your data plan is active or if you have coverage here.",
        },
        weak_signal: {
          title: "Weak signal",
          message:
            "Move closer to your router or remove obstacles between you and it.",
        },
        slow_cellular: {
          title: "Slow mobile network",
          message:
            "You are on {{ generation }}. Pages and video may load slowly here.",
        },
        slow_link: {
          title: "Slow link to your router",
          message:
            "Your phone and router are connecting at a low speed. Restarting Wi-Fi can help.",
        },
        fair_signal: {
          title: "Signal could be better",
          message:
            "Video calls may stutter. Moving a bit closer to the router can help.",
        },
        band_2_4: {
          title: "You're on 2.4 GHz",
          message:
            "If your router also has a 5 GHz network, it is usually faster when you are close.",
        },
        metered_wifi: {
          title: "This Wi-Fi is metered",
          message:
            "Android treats it like mobile data, so some apps may limit background use.",
        },
        mobile_data: {
          title: "Using mobile data",
          message: "Wi-Fi is off. Turning it on can save your data plan.",
        },
        vpn: {
          title: "VPN is on",
          message:
            "Speed and signal depend on the VPN server, so the numbers here may differ.",
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
        network: {
          title: "Network",
          links: {
            network_updates: {
              title: "Network updates",
              value: {
                enabled: "Every {{frequency}}",
                disabled: "Disabled",
              },
            },
            location: {
              title: "Location access",
              value: {
                allowed: "Allowed",
                approximate: "Approximate",
                not_allowed: "Not allowed",
              },
            },
          },
        },
        general: {
          title: "General",
          links: {
            appearance: {
              title: "Appearance",
              value: { system: "System", light: "Light", dark: "Dark" },
            },
            language: { title: "Language" },
            haptics: { title: "Haptic feedback" },
          },
        },
        privacy: {
          title: "Privacy",
          links: {
            crash_reports: {
              title: "Crash reports",
              value: { on: "On", off: "Off" },
            },
            privacy_policy: { title: "Privacy Policy" },
          },
        },
        about: {
          title: "About",
          links: {
            about: { title: "About" },
            changelog: { title: "Changelog", badge: "New" },
            licenses: { title: "Licenses" },
          },
        },
      },
      disclaimer: {
        text: "This app does not collect personal data.\nAll information stays on your device.",
      },
    },

    privacy: {
      meta: { title: "Crash reports" },
      sections: {
        crash_reports: {
          title: "Diagnostics",
          fields: {
            crash_reports: {
              title: "Send crash reports",
              description:
                "Anonymous error details that help fix bugs. Off by default.",
            },
          },
        },
        never_sent: {
          title: "Never sent",
          items: {
            network_name: "Network name (SSID)",
            bssid: "BSSID",
            ip_address: "IP address",
            location: "Location",
          },
        },
      },
    },

    preferences: {
      meta: { title: "Network updates" },
      sections: {
        automatic_updates: {
          title: "Automatic updates",
          fields: {
            automatic_updates: {
              title: "Automatic updates",
              description: "Refresh network information automatically.",
            },
            frequency: { title: "Update frequency" },
          },
        },
        status: {
          title: "Status",
          fields: {
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
            refresh: { title: "Refresh network status" },
          },
        },
      },
      frequency_sheet: {
        title: "Update frequency",
        description:
          "How often the app refreshes your network information while it is open.",
        default: "Default",
        options: {
          "5s": "Near real time. Useful to find the best spot for your signal.",
          "15s": "Shows changes sooner. Good when you are moving around.",
          "30s": "A balance between fresh data and fewer refreshes.",
          "60s": "Fewer refreshes. Good when you are staying in one place.",
        },
      },
    },

    permissions: {
      meta: { title: "Location access" },
      intro:
        "Android only shares the Wi-Fi name (SSID) and BSSID with apps that have location access. My Connection uses it only for that.",
      status: {
        visible: "Wi-Fi name is visible",
        hidden: "Wi-Fi name is hidden",
        progress: "{{done}} of {{total}} steps done",
      },
      sections: {
        steps: { title: "Steps" },
        manage: {
          title: "Manage",
          app_permissions: {
            title: "App permissions",
            description: "Change or remove access in Android settings.",
          },
        },
      },
      steps: {
        permission: {
          done_title: "Location access",
          done_description: "Allowed.",
          title: "Allow location access",
          description: "Needed to read the Wi-Fi name.",
          description_blocked:
            "Access was denied. Allow it in Android settings.",
          action: "Allow",
          action_blocked: "Open settings",
        },
        precision: {
          done_title: "Precise location",
          done_description: "On.",
          title: "Use precise location",
          description:
            "Approximate location is not enough to read the Wi-Fi name.",
          description_locked: "Available after step 1.",
          action: "Open settings",
        },
        services: {
          done_title: "Location services",
          done_description: "On.",
          title: "Turn on location services",
          description: "Location is off on this device.",
          action: "Turn on",
        },
      },
      disclaimer: "Your location is never stored or shared.",
    },

    appearance: {
      meta: { title: "Appearance" },
      sections: {
        theme: {
          title: "Theme",
          fields: {
            system: {
              title: "System",
              description: "Follows your device setting.",
            },
            light: { title: "Light" },
            dark: { title: "Dark" },
          },
        },
        android_dynamic_colors: {
          title: "Colors",
          fields: {
            dynamic_colors: {
              title: "Use system colors",
              description:
                "Adapt colors based on your device theme and wallpaper.",
              description_disabled:
                "Available when the theme is set to System.",
            },
          },
        },
      },
    },

    licenses: {
      meta: { title: "Licenses" },
      description: "{{count}} open source packages make {{app_name}} possible.",
    },

    about: {
      meta: { title: "About" },
      sections: {
        app: {
          title: "App",
          fields: {
            name: "Name",
            version: "Version",
            installed_at: "Installed",
            updated_at: "Last updated",
          },
        },
        device: {
          title: "Device",
          fields: {
            model: "Model",
            android: "Android",
          },
        },
        author: {
          title: "Author",
          fields: {
            description:
              "{{app_name}} started as a personal tool to explore network information and evolved into a simple app focused on clarity and control.",
            role: "Creator of {{app_name}}",
          },
        },
        explore: {
          title: "Explore",
          fields: {
            website: { title: "Website" },
            play_store: {
              title: "Google Play",
              description: "Rate or share the app",
            },
          },
        },
        build: {
          title: "Build",
          fields: {
            package: "Package",
            build_id: "Build ID",
            fingerprint: "Build fingerprint",
          },
        },
      },
    },

    language: {
      meta: { title: "Language" },
      sections: {
        language: {
          title: "Language",
          fields: {
            language: {
              en: {
                title: "English",
                description: "English",
              },
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
          badge: "New",
          read_more: "Read more",
        },
        previous_versions: {
          title: "Previous versions",
        },
      },
      versions: {
        meta: {
          "v0.10.0": {
            title: "A brand new home",
            date: "2026-11-03",
            description:
              "A redesigned home that shows your connection at a glance, with a signal ring, tips and connection details.",
          },
          "v0.9.3": {
            title: "Small improvements",
            date: "2026-08-25",
            description:
              "A small update with improvements to the preferences interface and release workflow.",
          },
          "v0.9.2": {
            title: "Small fixes, better foundations",
            date: "2026-08-23",
            description:
              "A small maintenance release with a privacy link fix and improvements to the project's foundation.",
          },
          "v0.9.1": {
            title: "Stability & quality improvements",
            date: "2026-06-02",
            description:
              "A small maintenance release focused on improving overall stability and release quality.",
          },
          "v0.9.0": {
            title: "Official website & refinements",
            date: "2026-06-02",
            description:
              "Introduces the official My Connection website while continuing to improve the overall product experience and platform integration.",
          },
          "v0.8.0": {
            title: "Ready for distribution",
            date: "2026-05-21",
            description:
              "Infrastructure, privacy, and platform improvements focused on preparing the app for broader distribution.",
          },
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
          "v0.10.0": {
            paragraphs: [
              "My Connection has a brand new home. Everything you need to understand your connection now fits on a single screen, without tabs.",
              "A signal ring shows how strong your Wi-Fi is, next to internet access and link speed. When something looks off, a short tip explains what is going on and how to fix it.",
              "This release also moves the app to Expo SDK 58 and brings a new typeface, Geist, across the whole app.",
            ],
            highlights: [
              {
                type: "features",
                title: "New features",
                items: [
                  "Redesigned home screen with a signal strength ring.",
                  "Tips for weak signal, no internet access, slow links and more.",
                  "Connection details sheet for each connection type.",
                  "Guided flow to show your Wi-Fi network name.",
                ],
              },
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Removed the tab bar: settings are one tap away from the home screen.",
                  "New Geist typeface across the app.",
                  "Smoother animations when the connection changes.",
                  "The app now stays in portrait orientation.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: [
                  "Upgraded to Expo SDK 58.",
                  "Updated project dependencies.",
                ],
              },
            ],
          },
          "v0.9.3": {
            paragraphs: [
              "This update brings a few small improvements to the app.",
              "The preferences interface has been refined, along with some release and project maintenance updates.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Refined the preferences interface.",
                  "Improved the placement of settings controls.",
                  "Updated the Android release workflow.",
                ],
              },
            ],
          },
          "v0.9.2": {
            paragraphs: [
              "This is a small maintenance release focused on keeping My Connection reliable and ready for what comes next.",
              "The main user-facing change fixes an incorrect link on the privacy policy page, while the project also received dependency, CI, analytics, and code quality improvements.",
              "We also added the project's open-source foundations, including a README, contribution guidelines, Code of Conduct, and MIT license.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Improved project documentation and open-source guidelines.",
                  "Updated dependencies and development tooling.",
                  "Improved CI workflow configuration.",
                  "Improved application performance measurement.",
                ],
              },
              {
                type: "fixes",
                title: "Fixes",
                items: [
                  "Fixed an incorrect external link on the privacy policy page.",
                  "Fixed lint issues across the project.",
                ],
              },
            ],
          },
          "v0.9.1": {
            paragraphs: [
              "This update focuses on stability and quality improvements across the project.",
              "While there are no major user-facing features in this release, several improvements were made behind the scenes to make future updates more reliable and easier to maintain.",
              "The result is a healthier development workflow and a more stable foundation for upcoming releases.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Improved overall project stability.",
                  "Refined internal code quality and consistency.",
                  "Improved release preparation workflow.",
                ],
              },
              {
                type: "fixes",
                title: "Fixes",
                items: ["Fixed an issue affecting the author section."],
              },
            ],
          },
          "v0.9.0": {
            paragraphs: [
              "This release introduces the official My Connection website, bringing together the Privacy Policy, Changelog, and support resources in a single place.",
              "It also includes several refinements across the app experience, making settings easier to navigate and improving Dynamic Colors behavior on supported Android devices.",
              "Behind the scenes, observability and distribution workflows continue to evolve, helping prepare the project for its upcoming public release.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Reorganized Settings sections to improve navigation and discoverability.",
                  "Improved Dynamic Colors availability checks on supported Android devices.",
                  "Updated the Privacy Policy link to point to the official website.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: [
                  "Configured Expo Observe for app observability.",
                  "Improved Android production submission workflow diagnostics.",
                  "Updated Android release track configuration.",
                  "Updated project dependencies.",
                ],
              },
            ],
          },
          "v0.8.0": {
            paragraphs: [
              "This update focuses on infrastructure, platform upgrades, and overall app distribution preparation.",
              "A large part of the work in this version happened behind the scenes — improving the project's foundation, modernizing dependencies, and refining how the app behaves across Android and iOS.",
              "It also introduces direct access to the external Privacy Policy page from inside the app, helping make the experience more transparent and complete.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Improvements",
                items: [
                  "Expanded Android dynamic color support for SDK 31 and above.",
                  "Added missing cellular connection translations.",
                  "Improved permission handling flow when enabling location services.",
                  "Added a direct link to the external Privacy Policy page.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infrastructure",
                items: [
                  "Migrated the project to Expo SDK 56.",
                  "Migrated navigation imports from React Navigation to Expo Router.",
                  "Configured automated Android production build and submit workflow.",
                  "Updated the minimum EAS CLI version requirements.",
                  "Moved font loading logic into a dedicated hook.",
                ],
              },
              {
                type: "fixes",
                title: "Fixes",
                items: [
                  "Removed unused descriptions from the cellular section.",
                  "Improved permission bottom sheet behavior after granting permissions.",
                ],
              },
            ],
          },
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
                title: "Infrastructure",
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
