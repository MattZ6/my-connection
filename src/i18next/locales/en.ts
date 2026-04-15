export const en = {
  translation: {
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
                    action: { title: "Allow access" },
                  },
                  permission_blocked: {
                    title: "Permission required",
                    message:
                      "Location permission was denied.\nYou can enable it in your device settings.",
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
        preferences: {
          title: "Preferences",
          links: {
            preferences: { title: "Preferences" },
            appearance: { title: "Appearance" },
            language: { title: "Language" },
          },
        },
        about: {
          title: "About",
          links: {
            about: { title: "About" },
            licenses: { title: "Licenses" },
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
        haptics: {
          fields: {
            haptics: {
              title: "Haptic Feedback",
              description: "Vibrate slightly on interactions.",
            },
          },
        },
      },
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
            name: { title: "Name" },
            version: { title: "Version" },
            build_id: { title: "Build ID" },
            internal_build_id: { title: "Internal Build ID" },
            android_api: { title: "Android API Level" },
            android_build_fingerprint: {
              title: "Build Fingerprint",
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
  },
};

export default en;
export type Translations = typeof en;
