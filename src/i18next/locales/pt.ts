export const pt = {
  translation: {
    tabs: {
      home: { title: "Início" },
      settings: { title: "Configurações" },
    },

    home: {
      meta: { title: "Minha Conexão" },

      sections: {
        hero: {
          fields: {
            connection_type: {
              label: "Tipo de conexão",
              value: {
                bluetooth: "Bluetooth",
                cellular: "Móvel",
                ethernet: "Ethernet",
                none: "Nenhuma",
                other: "Outra",
                unknown: "Desconhecida",
                vpn: "VPN",
                wifi: "Wi-Fi",
                wimax: "WiMAX",
              },
            },
            strength: { label: "Intensidade do sinal" },
            speed: {
              label: "Velocidade",
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
          title: "Resumo",
          fields: {
            wifi_enabled: {
              title: "Wi-Fi ativado",
              description: "Indica se o Wi-Fi está ligado.",
              value: { true: "Sim", false: "Não", null: "—" },
            },
            connected: {
              title: "Conectado",
              description:
                "Indica se você está conectado a uma rede no momento.",
              value: { true: "Sim", false: "Não", null: "—" },
            },
            internet_reachable: {
              title: "Acesso à internet",
              description:
                "Indica se é possível acessar a internet com a conexão atual.",
              value: { true: "Sim", false: "Não", null: "—" },
            },
          },
        },

        performance: {
          title: "Desempenho",
          fields: {
            strength: {
              title: "Intensidade do sinal",
              value_zero: "—",
              value_other: "{{ count }}%",
            },
            speed: {
              title: "Velocidade do link",
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
          title: "Rede",
          fields: {
            ssid: {
              title: "SSID",
              action: {
                title: "Toque para exibir",
                handling: {
                  permission_request: {
                    title: "Acessar nome da rede Wi-Fi",
                    message:
                      "Para exibir o nome da rede Wi-Fi (SSID), este app precisa de acesso à localização. Isso é uma exigência do Android.",
                    action: { title: "Permitir Acesso" },
                  },
                  permission_blocked: {
                    title: "Permissão necessária",
                    message:
                      "A permissão de localização foi negada.\nVocê pode ativá-la nas configurações do dispositivo.",
                    action: { title: "Abrir Configurações" },
                  },
                  precision_required: {
                    title: "Localização precisa necessária",
                    message:
                      "Para exibir informações detalhadas da rede Wi-Fi, é necessário ativar a localização precisa.\nAjuste nas configurações do dispositivo.",
                    action: { title: "Abrir Configurações" },
                  },
                  location_off: {
                    title: "Ativar localização",
                    message:
                      "É necessário ativar a localização para acessar os dados da rede Wi-Fi.",
                    action: { title: "Abrir Configurações" },
                  },
                },
              },
            },
            bssid: { title: "BSSID" },
            frequency: {
              title: "Frequência",
              value_zero: "—",
              value_other: "{{ count }} GHz",
            },
          },
        },

        ip: {
          title: "Configuração de IP",
          fields: {
            ip: {
              title: "Endereço IP",
              description: "Pode estar no formato IPv4 ou IPv6.",
            },
            mask: {
              title: "Máscara de sub-rede",
              description: "Exibida no formato IPv4.",
            },
          },
        },

        cellular: {
          title: "Conexão móvel",
          fields: {
            carrier: { title: "Operadora" },
            generation: { title: "Geração da rede" },
          },
        },

        properties: {
          title: "Propriedades da conexão",
          fields: {
            expensive_connection: {
              title: "Conexão cara",
              description:
                "Pode consumir mais bateria ou gerar custos adicionais.",
              value: { true: "Sim", false: "Não", null: "—" },
            },
          },
        },
      },
    },

    settings: {
      meta: { title: "Configurações" },
      sections: {
        preferences: {
          title: "Preferências",
          links: {
            preferences: { title: "Preferências" },
            permissions: { title: "Privacidade e permissões" },
            appearance: { title: "Aparência" },
            language: { title: "Idioma" },
          },
        },
        about: {
          title: "Sobre",
          links: {
            about: { title: "Sobre" },
            licenses: { title: "Licenças" },
          },
        },
      },
      disclaimer: {
        text: "Este app não coleta dados pessoais.\nTodas as informações permanecem no seu dispositivo.",
      },
    },

    preferences: {
      meta: { title: "Preferências" },
      sections: {
        haptics: {
          fields: {
            haptics: {
              title: "Feedback tátil",
              description: "Vibra levemente ao interagir.",
            },
          },
        },
      },
    },

    permissions: {
      meta: { title: "Privacidade e permissões" },
      sections: {
        location: {
          title: "Localização",
          fields: {
            permission: {
              title: "Acesso à localização",
              value: {
                undetermined: "Não definido",
                granted: "Permitido",
                denied: "Não permitido",
              },
            },
            precision: {
              title: "Precisão",
              value: {
                none: "Indisponível",
                precise: "Precisa",
                reduced: "Reduzida",
              },
            },
            location: {
              title: "Serviços de localização",
              value: {
                true: "Ativados",
                false: "Desativados",
              },
            },
          },
          action: {
            request_permission: "Permitir acesso",
            open_app_permission_settings: "Abrir configurações",
            open_location_settings: "Ativar localização",
          },
          disclaimer: {
            permission_undetermined:
              "O acesso à localização é necessário para exibir os detalhes da rede Wi-Fi.",
            permission_denied_can_ask_again:
              "O acesso à localização é necessário para exibir os detalhes da rede Wi-Fi.",
            permission_denied:
              "O acesso à localização é necessário para exibir os detalhes da rede Wi-Fi.\nAtive nas configurações do dispositivo.",
            invalid_precision:
              "A localização precisa é necessária para acessar os detalhes da rede Wi-Fi.\nPermita a localização precisa.",
            location_disabled:
              "Ative os serviços de localização para acessar os detalhes da rede Wi-Fi.",
            all_right: "Todas as configurações necessárias estão ativadas.",
          },
        },
      },
      disclaimer:
        "Sua localização não é armazenada nem compartilhada.\nEla é usada apenas para acessar os dados da rede Wi-Fi.",
    },

    appearance: {
      meta: { title: "Aparência" },
      sections: {
        theme: {
          title: "Tema",
          fields: {
            system: { title: "Sistema (recomendado)" },
            light: { title: "Claro" },
            dark: { title: "Escuro" },
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

    licenses: { meta: { title: "Licenças" } },

    about: {
      meta: { title: "Sobre" },
      sections: {
        about: {
          title: "Informações do app",
          fields: {
            name: { title: "Nome" },
            package: { title: "Identificador" },
            version: { title: "Versão" },
            installed_at: { title: "Instalado em" },
            updated_at: { title: "Atualizado em" },
          },
        },
        device: {
          title: "Dispositivo",
          fields: {
            type: {
              title: "Tipo de dispositivo",
              value: {
                0: "Desconhecido",
                1: "Smartphone",
                2: "Tablet",
                3: "Desktop",
                4: "TV",
                null: "—",
              },
            },
            manufacturer: { title: "Fabricante" },
            model: { title: "Modelo" },
            year: { title: "Ano do dispositivo" },
            android_design_name: { title: "Nome do design do Android" },
            android_product_name: { title: "Nome do produto do Android" },
          },
        },
        os: {
          title: "Sistema operacional",
          fields: {
            name: { title: "Nome" },
            version: { title: "Versão" },
            build_id: { title: "ID da build" },
            internal_build_id: { title: "ID interno da build" },
            android_api: { title: "Nível da API do Android" },
            android_build_fingerprint: {
              title: "Fingerprint da build",
            },
          },
        },
      },
      disclaimer:
        "Não se preocupe — essas informações não saem do seu dispositivo.",
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
                description: "Inglês",
              },
              pt: {
                title: "Português (Brasil)",
              },
              es: {
                title: "Español",
                description: "Espanhol",
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
