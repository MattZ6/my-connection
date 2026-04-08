export const pt = {
  translation: {
    tabs: {
      home: {
        title: "Início",
      },
      settings: {
        title: "Configurações",
      },
    },
    home: {
      meta: {
        title: "Minha Conexão",
      },
      sections: {
        hero: {
          fields: {
            connection_type: {
              label: "Tipo de Conexão",
              value: {
                bluetooth: "Bluetooth",
                cellular: "Móvel",
                ethernet: "Ethernet",
                none: "Nenhuma",
                other: "Outra",
                unknown: "Desconhecida",
                vpn: "VPN",
                wifi: "Wi-Fi",
                wimax: "WiMax",
              },
            },
            strength: {
              label: "Intensidade do Sinal",
            },
            speed: {
              label: "Velocidade",
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
          title: "Sumário",
          fields: {
            wifi_enabled: {
              title: "Wi-Fi Habilitado",
              description:
                "Se o Wi-Fi do dispositivo está ligado ou desligado.",
              value: {
                true: "Sim",
                false: "Não",
                null: "-",
              },
            },
            connected: {
              title: "Conectado",
              description: "Se existe uma conexão de rede ativa.",
              value: {
                true: "Sim",
                false: "Não",
                null: "-",
              },
            },
            internet_reachable: {
              title: "Internet Disponível",
              description:
                "Se é possível acessar a internet com a conexão de rede atual.",
              value: {
                true: "Sim",
                false: "Não",
                null: "-",
              },
            },
          },
        },
        performance: {
          title: "Performance",
          fields: {
            strength: {
              title: "Intensidade do Sinal",
              value_zero: "-",
              value_other: "{{ count }}%",
            },
            speed: {
              title: "Velocidade",
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
          title: "Rede",
          fields: {
            ssid: {
              title: "SSID",
            },
            bssid: {
              title: "BSSID",
            },
            frequency: {
              title: "Frequência",
              value_zero: "-",
              value_other: "{{ count }} GHz",
            },
          },
        },
        ip: {
          title: "Configuração de IP",
          fields: {
            ip: {
              title: "Endereço de IP",
              description: "Pode estar no formato IPv4 ou IPv6.",
            },
            mask: {
              title: "Máscara de Sub-rede",
              description: "No formato IPv4.",
            },
          },
        },
        cellular: {
          title: "Conexão Móvel",
          fields: {
            carrier: {
              title: "Operadora",
            },
            generation: {
              title: "Geração",
            },
          },
        },
        properties: {
          title: "Propriedades da Conexão",
          fields: {
            expensive_connection: {
              title: 'Conexão "Cara"',
              description: "Seja em termos de energia ou financeiros.",
              value: {
                true: "Sim",
                false: "Não",
                null: "-",
              },
            },
          },
        },
      },
    },
    settings: {
      meta: {
        title: "Configurações",
      },
      sections: {
        preferences: {
          title: "Preferências",
          links: {
            appearance: {
              title: "Aparência",
            },
            language: {
              title: "Idioma",
            },
          },
        },
        about: {
          title: "Sobre",
          links: {
            about: {
              title: "Sobre",
            },
            licenses: {
              title: "Licenças",
            },
          },
        },
      },
      disclaimer: {
        text: "Este app não coleta dados pessoais.\nTodas as informações permanecem no seu dispositivo.",
      },
    },
    appearance: {
      meta: {
        title: "Aparência",
      },
      sections: {
        theme: {
          title: "Tema",
          fields: {
            system: {
              title: "Sistema (recomendado)",
            },
            light: {
              title: "Claro",
            },
            dark: {
              title: "Escuro",
            },
          },
        },
        android_dynamic_colors: {
          fields: {
            dynamic_colors: {
              title: "Usar cores do sistema",
              description:
                "Adapta as cores com base no tema e papel de parede do dispositivo.",
            },
          },
        },
      },
    },
    licenses: {
      meta: {
        title: "Licenças",
      },
    },
    about: {
      meta: {
        title: "Sobre",
      },
      sections: {
        about: {
          title: "Sobre",
          fields: {
            name: {
              title: "Nome",
            },
            package: {
              title: "Identificador",
            },
            version: {
              title: "Versão",
            },
            installed_at: {
              title: "Instalado em",
            },
            updated_at: {
              title: "Atualizado em",
            },
          },
        },
        device: {
          title: "Dispositivo",
          fields: {
            type: {
              title: "Tipo de Dispositivo",
              value: {
                0: "Desconhecido",
                1: "Smartphone",
                2: "Tablet",
                3: "Desktop",
                4: "TV",
                null: "-",
              },
            },
            manufacturer: {
              title: "Fabricante",
            },
            model: {
              title: "Modelo",
            },
            year: {
              title: "Ano do Dispositivo",
            },
            android_design_name: {
              title: "Nome do Design do Android",
            },
            android_product_name: {
              title: "Nome do Produto do Android",
            },
          },
        },
        os: {
          title: "Sistema Operacional",
          fields: {
            name: {
              title: "Nome",
            },
            version: {
              title: "Versão",
            },
            build_id: {
              title: "ID da Build",
            },
            internal_build_id: {
              title: "ID Interno da Build",
            },
            android_api: {
              title: "Nível da API do Android",
            },
            android_build_fingerprint: {
              title: "Fingerprint da Build do Android",
            },
          },
        },
      },
      disclaimer:
        "Não se preocupe, essas informações não\nsairão do seu dispositivo.",
    },
    language: {
      meta: {
        title: "Idioma",
      },
      sections: {
        language: {
          title: "Idioma",
          fields: {
            language: {
              en: {
                title: "English",
                description: "Inglês",
              },
              pt: {
                title: "Português (Brasileiro)",
              },
            },
          },
        },
      },
    },
  },
};

export default pt;
export type Translations = typeof pt;
