export const es = {
  translation: {
    app: {
      development: {
        name: "Mi Conexión (Dev Client)",
      },
      preview: {
        name: "Mi Conexión (Preview)",
      },
      production: {
        name: "Mi Conexión",
      },
    },

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
                    action: { title: "Permitir Acceso" },
                  },
                  permission_blocked: {
                    title: "Permiso necesario",
                    message:
                      "El permiso de ubicación fue denegado.\nPuedes activarlo en la configuración del dispositivo.",
                    action: { title: "Abrir Configuración" },
                  },
                  precision_required: {
                    title: "Ubicación precisa requerida",
                    message:
                      "Para mostrar información detallada de la red Wi-Fi, es necesario activar la ubicación precisa.\nAjusta esta opción en la configuración del dispositivo.",
                    action: { title: "Abrir Configuración" },
                  },
                  location_off: {
                    title: "Activar ubicación",
                    message:
                      "Es necesario activar la ubicación para acceder a los datos de la red Wi-Fi.",
                    action: { title: "Abrir Configuración" },
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
        environment_banner: {
          development: {
            title: "Versión de desarrollo",
            description:
              "Esta versión se utiliza para desarrollo y pruebas. Algunas funciones pueden estar incompletas o inestables.",
          },
          preview: {
            title: "Versión preliminar",
            description:
              "Esta es una versión preliminar de la app. Algunas funciones aún están en evolución.",
          },
        },
        preferences: {
          title: "Preferencias",
          links: {
            preferences: { title: "Preferencias" },
            permissions: { title: "Permisos" },
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
        network_updates: {
          title: "Actualizaciones de red",
          fields: {
            automatic_updates: {
              title: "Actualizaciones automáticas",
              description: "Actualiza automáticamente la información de la red",
            },
            frequency: {
              title: "Frecuencia de actualización",
            },
            last_updated: {
              title: "Última actualización",
              value: {
                now: "ahora",
                seconds_one: "hace {{count}} segundo",
                seconds_other: "hace {{count}} segundos",
                minutes_one: "hace {{count}} minuto",
                minutes_other: "hace {{count}} minutos",
                hours_one: "hace {{count}} hora",
                hours_other: "hace {{count}} horas",
                days_one: "hace {{count}} día",
                days_other: "hace {{count}} días",
              },
            },
          },
          actions: {
            refresh: {
              title: "Actualizar estado de la red",
            },
          },
        },
        haptics: {
          title: "Respuesta háptica",
          fields: {
            haptics: {
              title: "Respuesta háptica",
              description: "Vibra ligeramente al interactuar.",
            },
          },
        },
      },
    },

    permissions: {
      meta: { title: "Permisos" },
      sections: {
        location: {
          title: "Ubicación",
          fields: {
            permission: {
              title: "Acceso a la ubicación",
              value: {
                undetermined: "No determinado",
                granted: "Permitido",
                denied: "No permitido",
              },
            },
            precision: {
              title: "Precisión",
              value: {
                none: "No disponible",
                precise: "Precisa",
                reduced: "Reducida",
              },
            },
            location: {
              title: "Servicios de ubicación",
              value: {
                true: "Activados",
                false: "Desactivados",
              },
            },
          },
          action: {
            request_permission: "Permitir acceso",
            open_app_permission_settings: "Abrir configuración",
            open_location_settings: "Activar ubicación",
          },
          disclaimer: {
            permission_undetermined:
              "Se necesita acceso a la ubicación para mostrar los detalles de la red Wi-Fi.",
            permission_denied_can_ask_again:
              "Se necesita acceso a la ubicación para mostrar los detalles de la red Wi-Fi.",
            permission_denied:
              "Se requiere acceso a la ubicación para mostrar los detalles de la red Wi-Fi.\nActívalo en la configuración del dispositivo.",
            invalid_precision:
              "Se requiere ubicación precisa para acceder a los detalles de la red Wi-Fi.\nPermite la ubicación precisa.",
            location_disabled:
              "Activa los servicios de ubicación para acceder a los datos de la red Wi-Fi.",
            all_right: "Todas las configuraciones necesarias están activadas.",
          },
        },
      },
      disclaimer:
        "Tu ubicación no se almacena ni se comparte.\nSolo se utiliza para acceder a los datos de la red Wi-Fi.",
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
            name: { title: "SO" },
            version: { title: "Versión" },
            build_id: { title: "ID de compilación" },
            internal_build_id: { title: "ID interno" },
            android_api: { title: "Nivel de API de Android" },
            android_build_fingerprint: {
              title: "Fingerprint de la compilación",
            },
          },
        },
        author: {
          title: "Autor",
          fields: {
            description:
              "{{app_name}} comenzó como una herramienta personal para explorar información de red y evolucionó hacia una app simple enfocada en claridad y control.",
          },
          actions: {
            view_on_github: {
              title: "View on GitHub",
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

    changelog: {
      meta: {
        title: "Changelog",
      },
      sections: {
        latest_version: {
          title: "Última versión",
        },
        previous_versions: {
          title: "Versiones anteriores",
        },
      },
      versions: {
        meta: {
          "v0.7.0": {
            title: "Más refinado",
            date: "2026-05-04",
            description:
              "Esta actualización aporta más fluidez, animaciones sutiles y una identidad visual más cuidada.",
          },
          "v0.6.0": {
            title: "Ahora contando su propia historia",
            date: "2026-04-29",
            description:
              "La app ahora muestra qué ha cambiado — junto con algunas mejoras internas.",
          },
          "v0.5.0": {
            title: "Un poco más humano",
            date: "2026-04-23",
            description:
              "Esta actualización añade más contexto y personalidad, haciendo la app más clara y completa.",
          },
          "v0.4.0": {
            title: "Más control y feedback",
            date: "2026-04-23",
            description:
              "Nuevas funciones de red, mejor feedback y una experiencia más fluida.",
          },
          "v0.3.0": {
            title: "Más fluido y confiable",
            date: "2026-04-09",
            description:
              "Varias correcciones y mejoras para hacer la app más estable y consistente.",
          },
          "v0.2.0": {
            title: "Una experiencia más completa",
            date: "2026-04-06",
            description:
              "Temas, haptics y múltiples idiomas — esta actualización introduce funciones clave para la app.",
          },
          "v0.1.7": {
            title: "Configuración más organizada",
            date: "2026-03-25",
            description:
              "Mejoras en la estructura y el diseño para hacer la configuración más clara y fácil de usar.",
          },
          "v0.1.6": {
            title: "Mejor experiencia en Android",
            date: "2026-03-25",
            description:
              "Mejoras centradas en Android, incluyendo información del dispositivo y consistencia visual.",
          },
          "v0.1.5": {
            title: "Corrección de estabilidad",
            date: "2026-03-24",
            description:
              "Ajustes en dependencias para mantener la app estable y funcionando correctamente.",
          },
          "v0.1.4": {
            title: "Navegación más simple",
            date: "2026-03-24",
            description:
              "Se añade navegación por pestañas para facilitar el uso y hacer la experiencia más intuitiva.",
          },
          "v0.1.3": {
            title: "Mejorando la estabilidad",
            date: "2026-03-20",
            description:
              "Se añade monitoreo de fallos para detectar problemas y mejorar la confiabilidad.",
          },
          "v0.1.2": {
            title: "Una identidad más clara",
            date: "2026-03-19",
            description:
              "El icono y el splash ahora se adaptan a cada variante, facilitando identificar el entorno.",
          },
          "v0.1.1": {
            title: "Pequeña limpieza",
            date: "2026-03-19",
            description:
              "Un pequeño ajuste interno para mantener todo más simple y fácil de evolucionar.",
          },
          "v0.1.0": {
            title: "Un nuevo comienzo",
            date: "2026-03-19",
            description:
              "El inicio de una nueva etapa — una idea simple evolucionando hacia una app más estructurada.",
          },
        },
        content: {
          "v0.7.0": {
            paragraphs: [
              "Esta actualización se centra en hacer la app más fluida y agradable de usar.",
              "Pequeñas animaciones, ajustes visuales y mejoras de consistencia ayudan a crear una experiencia más refinada en el día a día.",
            ],
            highlights: [
              {
                type: "features",
                title: "Nuevas funciones",
                items: [
                  "Se añadió animación al botón de actualización de red",
                  "Animaciones suaves de entrada en las tarjetas de la pantalla principal",
                  "Feedback animado al copiar el BSSID",
                  "Indicador sutil de nuevas versiones en el changelog",
                ],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Ajustes de espaciado en los elementos del changelog",
                  "Nueva paleta de colores para mayor consistencia visual",
                ],
              },
              {
                type: "infrastructure",
                title: "Visual & Assets",
                items: [
                  "Nuevo icono y splash screen de la app",
                  "Mejora en la calidad y proporción de los iconos",
                  "Refinamiento del icono adaptativo en Android",
                ],
              },
            ],
          },
          "v0.6.0": {
            paragraphs: [
              "Esta actualización introduce el changelog dentro de la app, facilitando seguir su evolución con el tiempo.",
              "También incluye mejoras estructurales y visuales para mantener todo más limpio, consistente y fácil de mantener.",
            ],
            highlights: [
              {
                type: "features",
                title: "Nuevas funciones",
                items: ["Se añadió el changelog dentro de la app"],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Ajustes tipográficos con mejor espaciado entre letras",
                  "Mejora en la estructura de metadatos del changelog",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Refactorización de providers en una sola estructura",
                  "Actualización de dependencias",
                ],
              },
            ],
          },
          "v0.5.0": {
            paragraphs: [
              "Esta actualización añade más contexto y personalidad a la app.",
              "Se realizaron pequeños cambios para hacer la experiencia más clara y completa.",
            ],
            highlights: [
              {
                type: "features",
                title: "Nuevas funciones",
                items: ["Se añadió la sección de autor en la pantalla About"],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Mejora de las secciones de la pantalla About",
                  "Banner de entorno (dev/preview)",
                  "Traducciones basadas en variante",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: ["Mejora en el comportamiento de actualización de red"],
              },
            ],
          },
          "v0.4.0": {
            paragraphs: [
              "Esta actualización introduce más control sobre la información de red y mejora el feedback de las interacciones.",
              "También añade mejoras en permisos, animaciones y actualizaciones en tiempo real.",
            ],
            highlights: [
              {
                type: "features",
                title: "Nuevas funciones",
                items: [
                  "Gestor de actualizaciones de red",
                  "Copia del BSSID",
                  "Barra animada de intensidad de señal",
                  "Gestión de permisos de ubicación en Android",
                ],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Mejor feedback de interacción en Android",
                  "Preferencia de haptics",
                  "Ajustes en el botón de actualización",
                  "Mejoras en las traducciones",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: [
                  "Corrección en la visualización de valores de descarga",
                ],
              },
            ],
          },
          "v0.3.0": {
            paragraphs: [
              "Esta actualización se enfoca en refinamientos y mejoras de estabilidad.",
              "Se realizaron varias correcciones y ajustes visuales para hacer la app más consistente y confiable.",
            ],
            highlights: [
              {
                type: "features",
                title: "Nuevas funciones",
                items: [
                  "Aviso de privacidad en configuración",
                  "Visualización del SSID en Android",
                ],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Se añadió un botón de actualización",
                  "Mejoras en el sistema de temas",
                  "Refinamiento de la pantalla About y textos dinámicos",
                  "Ajustes visuales generales",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: [
                  "Corrección de traducciones en la pantalla principal",
                  "Corrección de valores de descarga y visualización",
                  "Ajustes en campos de rendimiento",
                ],
              },
            ],
          },
          "v0.2.0": {
            paragraphs: [
              "Esta actualización representa un gran avance, incorporando funcionalidades clave que definen la experiencia de la app.",
              "Se añadieron temas, feedback háptico e internacionalización, junto con varias mejoras en el diseño, rendimiento y consistencia general.",
            ],
            highlights: [
              {
                type: "features",
                title: "Nuevas funciones",
                items: [
                  "Soporte de temas con persistencia",
                  "Incorporación de feedback háptico",
                  "Internacionalización (i18n)",
                ],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Mejora en la estructura y el diseño de la pantalla principal",
                  "Ajustes en los headers de iOS y mayor consistencia visual",
                  "Refinamiento de las secciones de configuración",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Migración de la lista de licencias a una lista virtualizada",
                  "Mejoras en la configuración de la app",
                  "Actualización de dependencias",
                ],
              },
            ],
          },
          "v0.1.7": {
            paragraphs: [
              "Esta actualización mejora la experiencia de configuración con ajustes de diseño, nombres y estructura.",
              "La navegación ahora es más clara y consistente.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Mejoras en nombres y estilos de configuración en Android",
                  "Refinamiento de la estructura de configuración",
                  "Pequeños ajustes de diseño y estilo",
                ],
              },
            ],
          },
          "v0.1.6": {
            paragraphs: [
              "Esta actualización mejora la experiencia en Android y corrige pequeños problemas en la pantalla About.",
              "También añade información del dispositivo para mayor visibilidad.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Uso de colores dinámicos Material 3 en Android",
                  "Se añadió información del dispositivo Android",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: [
                  "Corrección de importación inválida de colores en la pantalla About",
                ],
              },
            ],
          },
          "v0.1.5": {
            paragraphs: [
              "Esta actualización corrige un problema relacionado con Sentry al volver a una versión más estable.",
            ],
            highlights: [
              {
                type: "fixes",
                title: "Correcciones",
                items: ["Rollback de la versión de Sentry a una más estable"],
              },
            ],
          },
          "v0.1.4": {
            paragraphs: [
              "Esta actualización introduce navegación por pestañas, facilitando moverse entre las diferentes secciones de la app.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: ["Se añadió navegación basada en pestañas"],
              },
            ],
          },
          "v0.1.3": {
            paragraphs: [
              "Esta actualización introduce Sentry para el monitoreo de fallos, permitiendo detectar mejor problemas inesperados y mejorar la estabilidad general.",
            ],
            highlights: [
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: ["Se añadió Sentry para monitoreo de fallos"],
              },
            ],
          },
          "v0.1.2": {
            paragraphs: [
              "Esta actualización introduce mejoras visuales al configurar el icono de la app y la splash screen según la variante actual.",
              "Esto permite diferenciar mejor entre los entornos de desarrollo, preview y producción, facilitando identificar qué versión de la app está en uso.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Configuración del icono de la app según la variante",
                  "Configuración de la splash screen según la variante",
                ],
              },
            ],
          },
          "v0.1.1": {
            paragraphs: [
              "Esta actualización se enfoca en una pequeña limpieza de la configuración de la app, haciéndola más simple y fácil de evolucionar a partir de ahora.",
            ],
            highlights: [
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Eliminación de definiciones de colores de la configuración de la app",
                ],
              },
            ],
          },
          "v0.1.0": {
            paragraphs: [
              "Esta versión marca el inicio de una nueva fase para My Connection.",
              "El proyecto comenzó en marzo de 2024 como una idea simple. Después de un tiempo, retomé el desarrollo con una dirección más clara y un enfoque más estructurado — introduciendo pull requests, versionado y un flujo de trabajo adecuado.",
              "A partir de ahora, el objetivo es evolucionar la app paso a paso, enfocándose en claridad, consistencia y una mejor experiencia general.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Migración a Expo SDK 55",
                  "Configuración de builds de desarrollo y preview",
                  "Introducción de variantes de build (development, preview, production)",
                  "Configuración del dev client",
                  "Estructura base de UI con Expo UI",
                  "Mejoras en configuración y lint",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Configuración de versionado remoto con EAS",
                  "Workflows de CI para builds de preview",
                  "Actualización de dependencias y limpieza del proyecto",
                ],
              },
            ],
          },
        },
      },
    },
  },
};

export default es;
export type Translations = typeof es;
