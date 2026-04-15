export const es = {
  translation: {
    tabs: {
      home: { title: "Inicio" },
      settings: { title: "Configuración" },
    },

    home: {
      meta: { title: "Mi Conexión" },

      sections: {
        hero: {
          fields: {
            connection_type: {
              label: "Tipo de conexión",
              value: {
                bluetooth: "Bluetooth",
                cellular: "Datos móviles",
                ethernet: "Ethernet",
                none: "Ninguna",
                other: "Otra",
                unknown: "Desconocida",
                vpn: "VPN",
                wifi: "Wi-Fi",
                wimax: "WiMAX",
              },
            },
            strength: { label: "Intensidad de la señal" },
            speed: {
              label: "Velocidad",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            download: {
              label: "Descarga",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            upload: {
              label: "Subida",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
          },
        },

        summary: {
          title: "Resumen",
          fields: {
            wifi_enabled: {
              title: "Wi-Fi activado",
              description: "Indica si el Wi-Fi está encendido.",
              value: { true: "Sí", false: "No", null: "—" },
            },
            connected: {
              title: "Conectado",
              description:
                "Indica si estás conectado a una red en este momento.",
              value: { true: "Sí", false: "No", null: "—" },
            },
            internet_reachable: {
              title: "Acceso a internet",
              description:
                "Indica si es posible acceder a internet con la conexión actual.",
              value: { true: "Sí", false: "No", null: "—" },
            },
          },
        },

        performance: {
          title: "Rendimiento",
          fields: {
            strength: {
              title: "Intensidad de la señal",
              value_zero: "—",
              value_other: "{{ count }}%",
            },
            speed: {
              title: "Velocidad del enlace",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            download: {
              title: "Descarga",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
            upload: {
              title: "Subida",
              value_zero: "—",
              value_other: "{{ count }} Mbps",
            },
          },
        },

        network: {
          title: "Red",
          fields: {
            ssid: {
              title: "SSID",
              action: {
                title: "Toca para mostrar",
                handling: {
                  permission_request: {
                    title: "Acceder al nombre de la red Wi-Fi",
                    message:
                      "Para mostrar el nombre de tu red Wi-Fi (SSID), esta app necesita acceso a la ubicación. Es un requisito del sistema Android.",
                    action: { title: "Permitir acceso" },
                  },
                  permission_blocked: {
                    title: "Permiso necesario",
                    message:
                      "El permiso de ubicación fue denegado.\nPuedes activarlo en la configuración del dispositivo.",
                    action: { title: "Abrir configuración" },
                  },
                  location_off: {
                    title: "Activar ubicación",
                    message:
                      "Es necesario activar la ubicación para acceder a los datos de la red Wi-Fi.",
                    action: { title: "Abrir configuración" },
                  },
                },
              },
            },
            bssid: { title: "BSSID" },
            frequency: {
              title: "Frecuencia",
              value_zero: "—",
              value_other: "{{ count }} GHz",
            },
          },
        },

        ip: {
          title: "Configuración de IP",
          fields: {
            ip: {
              title: "Dirección IP",
              description: "Puede estar en formato IPv4 o IPv6.",
            },
            mask: {
              title: "Máscara de subred",
              description: "Se muestra en formato IPv4.",
            },
          },
        },

        cellular: {
          title: "Red móvil",
          fields: {
            carrier: { title: "Operador" },
            generation: { title: "Generación de red" },
          },
        },

        properties: {
          title: "Propiedades de la conexión",
          fields: {
            expensive_connection: {
              title: "Conexión costosa",
              description:
                "Puede consumir más batería o generar costos adicionales.",
              value: { true: "Sí", false: "No", null: "—" },
            },
          },
        },
      },
    },

    settings: {
      meta: { title: "Configuración" },
      sections: {
        preferences: {
          title: "Preferencias",
          links: {
            preferences: { title: "Preferencias" },
            appearance: { title: "Apariencia" },
            language: { title: "Idioma" },
          },
        },
        about: {
          title: "Acerca de",
          links: {
            about: { title: "Acerca de" },
            licenses: { title: "Licencias" },
          },
        },
      },
      disclaimer: {
        text: "Esta app no recopila datos personales.\nToda la información permanece en tu dispositivo.",
      },
    },

    preferences: {
      meta: { title: "Preferencias" },
      sections: {
        haptics: {
          fields: {
            haptics: {
              title: "Respuesta háptica",
              description: "Vibra ligeramente al interactuar.",
            },
          },
        },
      },
    },

    appearance: {
      meta: { title: "Apariencia" },
      sections: {
        theme: {
          title: "Tema",
          fields: {
            system: { title: "Sistema (recomendado)" },
            light: { title: "Claro" },
            dark: { title: "Oscuro" },
          },
        },
        android_dynamic_colors: {
          fields: {
            dynamic_colors: {
              title: "Usar colores del sistema",
              description:
                "Adapta los colores según el tema y el fondo de pantalla del dispositivo.",
            },
          },
        },
      },
    },

    licenses: { meta: { title: "Licencias" } },

    about: {
      meta: { title: "Acerca de" },
      sections: {
        about: {
          title: "Información de la app",
          fields: {
            name: { title: "Nombre" },
            package: { title: "Identificador" },
            version: { title: "Versión" },
            installed_at: { title: "Instalado el" },
            updated_at: { title: "Última actualización" },
          },
        },
        device: {
          title: "Dispositivo",
          fields: {
            type: {
              title: "Tipo de dispositivo",
              value: {
                0: "Desconocido",
                1: "Teléfono",
                2: "Tablet",
                3: "Escritorio",
                4: "TV",
                null: "—",
              },
            },
            manufacturer: { title: "Fabricante" },
            model: { title: "Modelo" },
            year: { title: "Año del dispositivo" },
            android_design_name: { title: "Nombre de diseño de Android" },
            android_product_name: { title: "Nombre del producto Android" },
          },
        },
        os: {
          title: "Sistema operativo",
          fields: {
            name: { title: "Nombre" },
            version: { title: "Versión" },
            build_id: { title: "ID de compilación" },
            internal_build_id: { title: "ID interno" },
            android_api: { title: "Nivel de API de Android" },
            android_build_fingerprint: {
              title: "Fingerprint de la compilación",
            },
          },
        },
      },
      disclaimer:
        "No te preocupes — esta información no sale de tu dispositivo.",
    },

    language: {
      meta: { title: "Idioma" },
      sections: {
        language: {
          title: "Idioma",
          fields: {
            language: {
              en: {
                title: "English",
                description: "Inglés",
              },
              pt: {
                title: "Português (Brasil)",
                description: "Portugués de Brasil",
              },
              es: {
                title: "Español",
              },
            },
          },
        },
      },
    },
  },
};

export default es;
export type Translations = typeof es;
