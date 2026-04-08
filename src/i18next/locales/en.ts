export const en = {
  translation: {
    tabs: {
      home: {
        title: "Home",
      },
      settings: {
        title: "Settings",
      },
    },
    home: {
      meta: {
        title: "Connection Health",
      },
      sections: {
        hero: {
          fields: {
            connection_type: {
              label: "Connection type",
              value: {
                bluetooth: "Bluetooth",
                cellular: "Cellular",
                ethernet: "Ethernet",
                none: "None",
                other: "Other",
                unknown: "Unkwon",
                vpn: "VPN",
                wifi: "Wi-Fi",
                wimax: "WiMax",
              },
            },
            strength: {
              label: "Signal Strength",
            },
            speed: {
              label: "Speed",
              value_zero: "-",
              value_other: "{{ count }} Mbps",
            },
            download: {
              label: "Download",
              value_zero: "-",
              value_other: "{{ count }} Mbps",
            },
            upload: {
              label: "Upload",
              value_zero: "-",
              value_other: "{{ count }} Mbps",
            },
          },
        },
        summary: {
          title: "Summary",
          fields: {
            wifi_enabled: {
              title: "Wi-Fi Enabled",
              description: "Whether the device's Wi-Fi is on or off.",
              value: {
                true: "Yes",
                false: "No",
              },
            },
            connected: {
              title: "Connected",
              description: "If there is an active network connection.",
              value: {
                true: "Yes",
                false: "No",
              },
            },
            internet_reachable: {
              title: "Internet Available",
              description:
                "If the internet is reachable with the currently active network connection.",
              value: {
                true: "Yes",
                false: "No",
              },
            },
          },
        },
        performance: {
          title: "Performance",
          fields: {
            strength: {
              title: "Signal Strength",
              value_zero: "-",
              value_other: "{{ count }}%",
            },
            speed: {
              title: "Link Speed",
              value_zero: "-",
              value_other: "{{ count }} Mbps",
            },
            download: {
              title: "Download",
              value_zero: "-",
              value_other: "{{ count }} Mbps",
            },
            upload: {
              title: "Upload",
              value_zero: "-",
              value_other: "{{ count }} Mbps",
            },
          },
        },
        network: {
          title: "Network",
          fields: {
            ssid: {
              title: "SSID",
            },
            bssid: {
              title: "BSSID",
            },
            frequency: {
              title: "Frequency",
              value_zero: "-",
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
              description: "The subnet mask in IPv4 format.",
            },
          },
        },
        cellular: {
          title: "IP Configuration",
          fields: {
            carrier: {
              title: "Carrier",
            },
            generation: {
              title: "Cellular Generation",
            },
          },
        },
        properties: {
          title: "Connection Properties",
          fields: {
            expensive_connection: {
              title: "Expensive Connection",
              description: "Either energy or monetary.",
              value: {
                true: "Yes",
                false: "No",
                null: "-",
              },
            },
          },
        },
      },
    },
    settings: {
      meta: {
        title: "Settings",
      },
      sections: {
        preferences: {
          title: "Preferences",
          links: {
            appearance: {
              title: "Appearance",
            },
            language: {
              title: "Language",
            },
          },
        },
        about: {
          title: "About",
          links: {
            about: {
              title: "About",
            },
            licenses: {
              title: "Licenses",
            },
          },
        },
      },
      disclaimer: {
        text: "This app doesn't collect personal data.\nAll information stays on your device.",
      },
    },
    appearance: {
      meta: {
        title: "Appearance",
      },
      sections: {
        theme: {
          title: "Theme",
          fields: {
            system: {
              title: "System (recommended)",
            },
            light: {
              title: "Light",
            },
            dark: {
              title: "Dark",
            },
          },
        },
        android_dynamic_colors: {
          fields: {
            dynamic_colors: {
              title: "Use dynamic colors",
            },
          },
        },
      },
    },
    licenses: {
      meta: {
        title: "Licenses",
      },
    },
    about: {
      meta: {
        title: "About",
      },
      sections: {
        about: {
          title: "About",
          fields: {
            name: {
              title: "Name",
            },
            package: {
              title: "Package",
            },
            version: {
              title: "Version",
            },
            installed_at: {
              title: "Installed At",
            },
            updated_at: {
              title: "Updated At",
            },
          },
        },
        device: {
          title: "Device",
          fields: {
            type: {
              title: "Device Type",
              value: {
                0: "Unkown",
                1: "Phone",
                2: "Tablet",
                3: "Desktop",
                4: "TV",
                null: "-",
              },
            },
            manufacturer: {
              title: "Manufacturer",
            },
            model: {
              title: "Model",
            },
            year: {
              title: "Year Class",
            },
            android_design_name: {
              title: "Android Design Name",
            },
            android_product_name: {
              title: "Android Product Name",
            },
          },
        },
        os: {
          title: "Operational System",
          fields: {
            name: {
              title: "Name",
            },
            version: {
              title: "Version",
            },
            build_id: {
              title: "Build ID",
            },
            internal_build_id: {
              title: "Internal Build ID",
            },
            android_api: {
              title: "Android API Level",
            },
            android_build_fingerprint: {
              title: "Android Build Fingerprint",
            },
          },
        },
      },
      disclaimer: "Don't worry, this information won't\nleave your device.",
    },
    language: {
      meta: {
        title: "Language",
      },
      sections: {
        language: {
          title: "Language",
          fields: {
            language: {
              en: {
                title: "English",
              },
              pt: {
                title: "Português (Brasileiro)",
                description: "Brazilian Portuguese",
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
