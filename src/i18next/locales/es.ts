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
      header: {
        type: {
          wifi: "Wi-Fi",
          cellular: "Red móvil",
          ethernet: "Ethernet",
          vpn: "VPN",
          bluetooth: "Bluetooth",
          other: "Otra",
          wimax: "WiMAX",
          unknown: "Conexión desconocida",
          none: "Sin conexión",
        },
        subtitle: {
          connected: "Conectado",
          not_connected: "No conectado",
          show_network_name: "Mostrar nombre de la red",
        },
      },
      quality: {
        no_signal: "Sin señal",
        weak: "Débil",
        fair: "Regular",
        good: "Bueno",
        excellent: "Excelente",
      },
      gauge: {
        a11y: "Intensidad de la señal {{ value }}%, {{ quality }}",
        mobile: "Red móvil",
        wired: "Por cable",
        vpn: "VPN activa",
        tethering: "Compartida",
        other: "Otra red",
        unknown: "Desconocida",
        offline: "Sin conexión",
        not_connected: "No conectado",
        checking: "Verificando",
      },
      status: {
        reachable: "Internet accesible",
        unreachable: "Sin acceso a internet",
        offline: "Sin internet",
        checking: "Verificando internet…",
      },
      link_speed: {
        title: "Velocidad del enlace",
        unit: "Mbps",
        download: "Descarga",
        upload: "Subida",
      },
      pills: {
        metered: "Conexión medida · usa tu plan de datos",
        vpn: "Los detalles de la señal quedan ocultos por la VPN",
      },
      details: {
        button: "Ver detalles",
        title: "Detalles de la conexión",
        copied: "Copiado",
        sections: {
          network: "Red",
          signal: "Señal",
          ip: "Configuración de IP",
          mobile: "Red móvil",
          properties: "Propiedades",
        },
        fields: {
          ssid: "Nombre (SSID)",
          bssid: "BSSID",
          frequency: "Frecuencia",
          strength: "Intensidad",
          link_speed: "Velocidad ↓ / ↑",
          ip_address: "Dirección IP",
          subnet: "Máscara de subred",
          carrier: "Operador",
          generation: "Generación",
          connection_type: "Tipo de conexión",
          metered: "Conexión medida",
          internet: "Acceso a internet",
          wifi_enabled: "Wi-Fi activado",
        },
        values: {
          yes: "Sí",
          no: "No",
          unknown: "—",
          hidden: "Oculto",
          frequency: "{{ value }} GHz",
          strength: "{{ value }}%",
          link_speed: "{{ download }} / {{ upload }} Mbps",
        },
        notes: {
          hidden_network:
            "Android solo comparte el nombre del Wi-Fi y el BSSID con apps que tienen acceso a la ubicación. Tu ubicación nunca se guarda ni se comparte.",
          allow_access: "Permitir acceso",
          cellular:
            "La dirección IP y la intensidad de la señal no están disponibles para datos móviles.",
          vpn: "La VPN oculta la red que tiene debajo, así que solo están disponibles estas propiedades.",
          bluetooth:
            "Internet compartida desde otro dispositivo por Bluetooth. No hay más detalles disponibles para esta conexión.",
          other: "No hay más detalles disponibles para este tipo de conexión.",
        },
      },
      network_name: {
        dismiss: "Ahora no",
        footnote: "Tu ubicación nunca se guarda ni se comparte.",
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
      hints: {
        dismiss: "Descartar",
        actions: {
          open_network_settings: "Abrir ajustes de red",
          choose_network: "Elegir una red",
          turn_on_wifi: "Activar Wi-Fi",
        },
        offline: {
          title: "Estás sin conexión",
          message: "Activa el Wi-Fi o los datos móviles para conectarte.",
        },
        wifi_disconnected: {
          title: "No estás conectado a una red",
          message:
            "El Wi-Fi está activado, pero no estás conectado a ninguna red.",
        },
        wifi_no_internet: {
          title: "Conectado, pero sin internet",
          message:
            "Puede que la red pida iniciar sesión, o el router no tenga internet ahora.",
        },
        cellular_no_internet: {
          title: "Conectado, pero sin internet",
          message:
            "Comprueba si tu plan de datos está activo o si hay cobertura aquí.",
        },
        weak_signal: {
          title: "Señal débil",
          message: "Acércate al router o quita obstáculos entre tú y él.",
        },
        slow_cellular: {
          title: "Red móvil lenta",
          message:
            "Estás en {{ generation }}. Las páginas y los videos pueden cargar despacio aquí.",
        },
        slow_link: {
          title: "Enlace lento con el router",
          message:
            "Tu teléfono y el router se conectan a baja velocidad. Reiniciar el Wi-Fi puede ayudar.",
        },
        fair_signal: {
          title: "La señal podría ser mejor",
          message:
            "Las videollamadas pueden cortarse. Acercarte un poco al router puede ayudar.",
        },
        band_2_4: {
          title: "Estás en 2.4 GHz",
          message:
            "Si tu router también tiene una red de 5 GHz, suele ser más rápida cuando estás cerca.",
        },
        metered_wifi: {
          title: "Este Wi-Fi es medido",
          message:
            "Android lo trata como datos móviles, así que algunas apps pueden limitar el uso en segundo plano.",
        },
        mobile_data: {
          title: "Usando datos móviles",
          message:
            "El Wi-Fi está desactivado. Activarlo puede ahorrar tu plan de datos.",
        },
        vpn: {
          title: "VPN activa",
          message:
            "La velocidad y la señal dependen del servidor de la VPN, así que los números aquí pueden variar.",
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
        network: {
          title: "Red",
          links: {
            network_updates: {
              title: "Actualizaciones de red",
              value: {
                enabled: "Cada {{frequency}}",
                disabled: "Desactivadas",
              },
            },
            location: {
              title: "Acceso a la ubicación",
              value: {
                allowed: "Permitido",
                approximate: "Aproximado",
                not_allowed: "No permitido",
              },
            },
          },
        },
        general: {
          title: "General",
          links: {
            appearance: {
              title: "Apariencia",
              value: { system: "Sistema", light: "Claro", dark: "Oscuro" },
            },
            language: { title: "Idioma" },
            haptics: { title: "Respuesta háptica" },
          },
        },
        privacy: {
          title: "Privacidad",
          links: {
            crash_reports: {
              title: "Informes de errores",
              value: { on: "Activado", off: "Desactivado" },
            },
            privacy_policy: { title: "Política de Privacidad" },
          },
        },
        about: {
          title: "Acerca de",
          links: {
            about: { title: "Acerca de" },
            changelog: { title: "Changelog", badge: "Nuevo" },
            licenses: { title: "Licencias" },
          },
        },
      },
      disclaimer: {
        title: "Tu red sigue siendo tuya",
        text: "La app lee tu conexión en tu teléfono, y ahí se queda.",
      },
    },

    privacy: {
      meta: { title: "Informes de errores" },
      sections: {
        crash_reports: {
          title: "Diagnóstico",
          fields: {
            crash_reports: {
              title: "Enviar informes de errores",
              description:
                "Detalles anónimos de errores que ayudan a corregir fallos. Desactivado por defecto.",
            },
          },
        },
        never_sent: {
          title: "Nunca se envía",
          items: {
            network_name: "Nombre de la red (SSID)",
            bssid: "BSSID",
            ip_address: "Dirección IP",
            location: "Ubicación",
          },
        },
      },
    },

    preferences: {
      meta: { title: "Actualizaciones de red" },
      sections: {
        automatic_updates: {
          title: "Actualizaciones automáticas",
          fields: {
            automatic_updates: {
              title: "Actualizaciones automáticas",
              description:
                "Actualiza automáticamente la información de la red.",
            },
            frequency: { title: "Frecuencia de actualización" },
          },
        },
        status: {
          title: "Estado",
          fields: {
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
            refresh: { title: "Actualizar estado de la red" },
          },
        },
      },
      frequency_sheet: {
        title: "Frecuencia de actualización",
        description:
          "Con qué frecuencia la app actualiza la información de tu red mientras está abierta.",
        default: "Predeterminado",
        options: {
          "5s": "Casi en tiempo real. Útil para encontrar el mejor lugar para la señal.",
          "15s": "Muestra los cambios antes. Bueno cuando te estás moviendo.",
          "30s": "Un equilibrio entre datos recientes y menos actualizaciones.",
          "60s": "Menos actualizaciones. Bueno cuando te quedas en un lugar.",
        },
      },
    },

    permissions: {
      meta: { title: "Acceso a la ubicación" },
      intro:
        "Android solo comparte el nombre del Wi-Fi (SSID) y el BSSID con apps que tienen acceso a la ubicación. Mi Conexión usa este acceso solo para eso.",
      status: {
        visible: "El nombre del Wi-Fi es visible",
        hidden: "El nombre del Wi-Fi está oculto",
        progress: "{{done}} de {{total}} pasos completados",
      },
      sections: {
        steps: { title: "Pasos" },
        manage: {
          title: "Gestionar",
          app_permissions: {
            title: "Permisos de la app",
            description: "Cambia o quita el acceso en los ajustes de Android.",
          },
        },
      },
      steps: {
        permission: {
          done_title: "Acceso a la ubicación",
          done_description: "Permitido.",
          title: "Permitir acceso a la ubicación",
          description: "Necesario para leer el nombre del Wi-Fi.",
          description_blocked:
            "El acceso fue denegado. Permítelo en los ajustes de Android.",
          action: "Permitir",
          action_blocked: "Abrir ajustes",
        },
        precision: {
          done_title: "Ubicación precisa",
          done_description: "Activada.",
          title: "Usar ubicación precisa",
          description:
            "La ubicación aproximada no basta para leer el nombre del Wi-Fi.",
          description_locked: "Disponible después del paso 1.",
          action: "Abrir ajustes",
        },
        services: {
          done_title: "Servicios de ubicación",
          done_description: "Activados.",
          title: "Activar los servicios de ubicación",
          description: "La ubicación está desactivada en este dispositivo.",
          action: "Activar",
        },
      },
      disclaimer: "Tu ubicación nunca se guarda ni se comparte.",
    },

    appearance: {
      meta: { title: "Apariencia" },
      sections: {
        theme: {
          title: "Tema",
          fields: {
            system: {
              title: "Sistema",
              description: "Sigue la configuración de tu dispositivo.",
            },
            light: { title: "Claro" },
            dark: { title: "Oscuro" },
          },
        },
        android_dynamic_colors: {
          title: "Colores",
          fields: {
            dynamic_colors: {
              title: "Usar colores del sistema",
              description:
                "Adapta los colores según el tema y el fondo de pantalla del dispositivo.",
              description_disabled:
                "Disponible cuando el tema está en Sistema.",
            },
          },
        },
      },
    },

    licenses: {
      meta: { title: "Licencias" },
      description:
        "{{count}} paquetes de código abierto hacen posible {{app_name}}.",
    },

    about: {
      meta: { title: "Acerca de" },
      sections: {
        app: {
          title: "App",
          fields: {
            name: "Nombre",
            version: "Versión",
            installed_at: "Instalado el",
            updated_at: "Última actualización",
          },
        },
        device: {
          title: "Dispositivo",
          fields: {
            model: "Modelo",
            android: "Android",
          },
        },
        author: {
          title: "Autor",
          fields: {
            description:
              "{{app_name}} comenzó como una herramienta personal para explorar información de red y evolucionó hacia una app simple enfocada en claridad y control.",
            role: "Creador de {{app_name}}",
          },
        },
        explore: {
          title: "Explorar",
          fields: {
            website: { title: "Sitio web" },
            play_store: {
              title: "Google Play",
              description: "Califica o comparte la app",
            },
          },
        },
        build: {
          title: "Compilación",
          fields: {
            package: "Identificador",
            build_id: "ID de compilación",
            fingerprint: "Fingerprint de la compilación",
          },
        },
      },
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
                description: "Español",
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
          badge: "Nuevo",
          read_more: "Leer más",
        },
        previous_versions: {
          title: "Versiones anteriores",
        },
      },
      versions: {
        meta: {
          "v0.12.0": {
            title: "Un icono nuevo",
            date: "2026-11-04",
            description:
              "Un icono nuevo, vuelve la copia en los detalles de la conexión y pequeños ajustes visuales en toda la app.",
          },
          "v0.11.0": {
            title: "La privacidad primero",
            date: "2026-11-04",
            description:
              "Ajustes rediseñados e informes de errores opcionales, desactivados por defecto. Los detalles de tu red nunca salen de tu dispositivo.",
          },
          "v0.10.0": {
            title: "Un inicio completamente nuevo",
            date: "2026-11-03",
            description:
              "Un inicio rediseñado que muestra tu conexión de un vistazo, con anillo de señal, consejos y detalles de la conexión.",
          },
          "v0.9.3": {
            title: "Pequeñas mejoras",
            date: "2026-08-25",
            description:
              "Una pequeña actualización con mejoras en la interfaz de preferencias y el flujo de publicación.",
          },
          "v0.9.2": {
            title: "Pequeños ajustes, una base mejor",
            date: "2026-08-23",
            description:
              "Una pequeña actualización de mantenimiento con una corrección en el enlace de la política de privacidad y mejoras en la base del proyecto.",
          },
          "v0.9.1": {
            title: "Mejoras de estabilidad y calidad",
            date: "2026-06-02",
            description:
              "Una pequeña actualización centrada en la estabilidad, la calidad y la preparación para futuras versiones.",
          },
          "v0.9.0": {
            title: "Sitio web oficial y mejoras",
            date: "2026-06-02",
            description:
              "Presenta el sitio web oficial de Mi Conexión mientras continúa mejorando la experiencia del producto y su integración con las plataformas.",
          },
          "v0.8.0": {
            title: "Listo para distribución",
            date: "2026-05-21",
            description:
              "Mejoras de infraestructura, privacidad y plataforma enfocadas en preparar la app para una distribución más amplia.",
          },
          "v0.7.1": {
            title: "Listo para publicación",
            date: "2026-05-08",
            description:
              "Pequeños ajustes enfocados en publicación, permisos y organización del proyecto.",
          },
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
          "v0.12.0": {
            paragraphs: [
              "Mi Conexión tiene un icono nuevo: un anillo de señal alrededor del símbolo del Wi-Fi, inspirado en el anillo que ves en el inicio.",
              "Vuelve la copia en los detalles de la conexión. Toca el nombre de la red, el BSSID o la dirección IP en Ver detalles para copiarlo. Esto se había quedado fuera del nuevo inicio.",
              "Esta versión también trae pequeños ajustes visuales en el inicio, Acerca de y Ajustes.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novedades",
                items: [
                  "Nuevo icono de la app, con un anillo de señal alrededor del símbolo del Wi-Fi.",
                ],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Vuelve a copiar el nombre de la red, el BSSID y la dirección IP desde los detalles de la conexión.",
                  "La sección del autor ahora está al final de la pantalla Acerca de.",
                  "Tamaños de texto y espaciados refinados en los consejos del inicio, el botón de detalles y las pantallas de ajustes.",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: [
                  "Se corrigió la posición de la foto del autor en la pantalla Acerca de.",
                ],
              },
            ],
          },
          "v0.11.0": {
            paragraphs: [
              "La privacidad no es una función, es un principio. A partir de esta versión, Mi Conexión no envía nada sin tu consentimiento.",
              "Los informes de errores ahora son opcionales y están desactivados por defecto. Si los activas en Ajustes › Privacidad, el nombre de la red, el BSSID y la dirección IP se eliminan antes del envío, y la pantalla nunca se graba.",
              "Los ajustes también se rediseñaron por completo, con pantallas más claras para las actualizaciones de red, el acceso a la ubicación, la apariencia, el idioma y más.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novedades",
                items: [
                  "Ajustes rediseñados y organizados en secciones.",
                  "Nueva sección Privacidad con informes de errores opcionales, desactivados por defecto.",
                  "Las actualizaciones de red ahora pueden ocurrir cada 5 segundos.",
                  "Nuevas pantallas de Novedades y de versión.",
                ],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Pantallas de Actualizaciones de red, Acceso a la ubicación, Apariencia, Idioma, Acerca de y Licencias rediseñadas.",
                  "Nuevo diseño del interruptor en toda la app.",
                  "El fondo de la app ahora sigue el tema.",
                  "La foto del autor viene incluida en la app, así que la pantalla Acerca de ya no se conecta a GitHub.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Los informes de errores ya no incluyen grabaciones de pantalla y eliminan los detalles de la red antes del envío.",
                  "Se eliminaron Expo Insights y Expo Observe.",
                ],
              },
            ],
          },
          "v0.10.0": {
            paragraphs: [
              "Mi Conexión estrena un inicio completamente nuevo. Todo lo que necesitas para entender tu conexión ahora cabe en una sola pantalla, sin pestañas.",
              "Un anillo muestra la intensidad de tu Wi-Fi, junto con el acceso a internet y la velocidad del enlace. Cuando algo no va bien, un consejo breve explica qué pasa y cómo solucionarlo.",
              "Esta versión también actualiza la app a Expo SDK 58 y trae una nueva tipografía, Geist, en toda la app.",
            ],
            highlights: [
              {
                type: "features",
                title: "Nuevas funciones",
                items: [
                  "Pantalla de inicio rediseñada con un anillo de intensidad de señal.",
                  "Consejos para señal débil, falta de acceso a internet, enlace lento y más.",
                  "Detalles de la conexión en una hoja inferior para cada tipo de conexión.",
                  "Flujo guiado para mostrar el nombre de tu red Wi-Fi.",
                ],
              },
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Se eliminó la barra de pestañas: los ajustes están a un toque de la pantalla de inicio.",
                  "Nueva tipografía Geist en toda la app.",
                  "Animaciones más suaves cuando cambia la conexión.",
                  "La app ahora se mantiene en orientación vertical.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Actualizado a Expo SDK 58.",
                  "Dependencias del proyecto actualizadas.",
                ],
              },
            ],
          },
          "v0.9.3": {
            paragraphs: [
              "Esta actualización incluye algunas pequeñas mejoras en la aplicación.",
              "Se ha refinado la interfaz de preferencias, junto con algunas mejoras de mantenimiento y del flujo de publicación.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Interfaz de preferencias refinada.",
                  "Mejorada la posición de los controles de configuración.",
                  "Actualizado el flujo de publicación de Android.",
                ],
              },
            ],
          },
          "v0.9.2": {
            paragraphs: [
              "Esta es una pequeña actualización de mantenimiento centrada en mantener Mi Conexión estable y preparada para lo que viene.",
              "El principal cambio visible para el usuario corrige un enlace incorrecto en la página de política de privacidad, mientras que el proyecto también recibió mejoras en dependencias, CI, analytics y calidad del código.",
              "También añadimos las bases para el proyecto open source, incluyendo un nuevo README, pautas de contribución, Código de Conducta y licencia MIT.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Mejoramos la documentación y las pautas del proyecto open source.",
                  "Actualizamos dependencias y herramientas de desarrollo.",
                  "Mejoramos la configuración del workflow de CI.",
                  "Mejoramos la medición del rendimiento de la aplicación.",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: [
                  "Corregimos un enlace externo incorrecto en la página de política de privacidad.",
                  "Corregimos problemas de lint en el proyecto.",
                ],
              },
            ],
          },
          "v0.9.1": {
            paragraphs: [
              "Esta actualización se centra en mejoras de estabilidad y calidad del proyecto.",
              "Aunque no incluye grandes funciones visibles para el usuario, se realizaron varios ajustes internos para que las futuras actualizaciones sean más confiables y fáciles de mantener.",
              "El resultado es un flujo de desarrollo más sólido y una mejor base para las próximas versiones.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Mejora de la estabilidad general del proyecto.",
                  "Refinamiento de la calidad y consistencia interna del código.",
                  "Mejoras en el proceso de preparación de nuevas versiones.",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: [
                  "Corrección de un problema relacionado con la sección del autor.",
                ],
              },
            ],
          },
          "v0.9.0": {
            paragraphs: [
              "Esta versión presenta el sitio web oficial de Mi Conexión, reuniendo la Política de Privacidad, el Registro de Cambios y los recursos de soporte en un único lugar.",
              "También incluye varias mejoras en la experiencia de la aplicación, facilitando la navegación por Configuración y mejorando el comportamiento de Dynamic Colors en dispositivos Android compatibles.",
              "Detrás de escena, la observabilidad y los flujos de distribución continúan evolucionando para preparar el proyecto para su próximo lanzamiento público.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Reorganización de las secciones de Configuración para facilitar la navegación.",
                  "Mejora en la verificación de disponibilidad de Dynamic Colors en dispositivos Android compatibles.",
                  "Actualización del enlace de la Política de Privacidad para apuntar al sitio web oficial.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Configuración de Expo Observe para la observabilidad de la aplicación.",
                  "Mejoras en los diagnósticos del flujo de publicación en producción para Android.",
                  "Actualización de la configuración de la pista de distribución Android.",
                  "Actualización de las dependencias del proyecto.",
                ],
              },
            ],
          },
          "v0.8.0": {
            paragraphs: [
              "Esta actualización se centra en infraestructura, mejoras de plataforma y preparación general de la app para distribución.",
              "Gran parte del trabajo de esta versión ocurrió detrás de escena, mejorando la base del proyecto, modernizando dependencias y refinando el comportamiento de la app entre Android e iOS.",
              "La versión también agrega acceso directo a la Política de Privacidad externa desde la app, haciendo la experiencia más transparente y completa.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Expansión del soporte de colores dinámicos en Android para SDK 31 o superior.",
                  "Se agregaron traducciones faltantes relacionadas con conexión celular.",
                  "Mejorado el flujo de permisos al habilitar servicios de ubicación.",
                  "Agregado acceso directo a la Política de Privacidad externa.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestructura",
                items: [
                  "Migración del proyecto a Expo SDK 56.",
                  "Migración de imports de navegación desde React Navigation hacia Expo Router.",
                  "Configuración del flujo automatizado de build y submit de producción para Android.",
                  "Actualización de los requisitos mínimos de EAS CLI.",
                  "La carga de fuentes fue movida a un hook dedicado.",
                ],
              },
              {
                type: "fixes",
                title: "Correcciones",
                items: [
                  "Se eliminaron descripciones no utilizadas de la sección celular.",
                  "Mejorado el comportamiento de la bottom sheet de permisos después de conceder permisos.",
                ],
              },
            ],
          },
          "v0.7.1": {
            paragraphs: [
              "Esta actualización se centra en preparar la app para distribución en producción y publicación en las tiendas.",
              "Algunas configuraciones internas y permisos de Android fueron ajustados para mantener la app más limpia y alineada con los requisitos de las plataformas.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Mejoras",
                items: [
                  "Se eliminó el permiso innecesario de foreground location en Android",
                  "Se actualizó el nombre de paquete al nuevo namespace",
                  "Actualizaciones generales de dependencias y mantenimiento",
                ],
              },
            ],
          },
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
                title: "Infraestructura",
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
              "Esta versión marca el inicio de una nueva fase para Mi Conexión.",
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
