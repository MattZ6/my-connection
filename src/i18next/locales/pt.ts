export const pt = {
  translation: {
    app: {
      development: {
        name: "Minha Conexão (Dev Client)",
      },
      preview: {
        name: "Minha Conexão (Preview)",
      },
      production: {
        name: "Minha Conexão",
      },
    },

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
        environment_banner: {
          development: {
            title: "Versão de desenvolvimento",
            description:
              "Esta versão é usada para desenvolvimento e testes. Algumas funcionalidades podem estar incompletas ou instáveis.",
          },
          preview: {
            title: "Versão de prévia",
            description:
              "Esta é uma versão de prévia do app. Algumas funcionalidades ainda estão em evolução.",
          },
        },
        preferences: {
          title: "Preferências",
          links: {
            preferences: { title: "Preferências" },
            permissions: { title: "Permissões" },
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
        network_updates: {
          title: "Atualizações de rede",
          fields: {
            automatic_updates: {
              title: "Atualizações automáticas",
              description: "Atualiza automaticamente as informações da rede",
            },
            frequency: {
              title: "Frequência de atualização",
            },
            last_updated: {
              title: "Última atualização",
              value: {
                now: "agora",
                seconds_one: "há {{count}} segundo",
                seconds_other: "há {{count}} segundos",
                minutes_one: "há {{count}} minuto",
                minutes_other: "há {{count}} minutos",
                hours_one: "há {{count}} hora",
                hours_other: "há {{count}} horas",
                days_one: "há {{count}} dia",
                days_other: "há {{count}} dias",
              },
            },
          },
          actions: {
            refresh: {
              title: "Atualizar status da rede",
            },
          },
        },
        haptics: {
          title: "Feedback tátil",
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
      meta: { title: "Permissões" },
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
            name: { title: "SO" },
            version: { title: "Versão" },
            build_id: { title: "ID da build" },
            internal_build_id: { title: "ID interno da build" },
            android_api: { title: "Nível da API do Android" },
            android_build_fingerprint: {
              title: "Fingerprint da build",
            },
          },
        },
        author: {
          title: "Autor",
          fields: {
            description:
              "O {{app_name}} começou como uma ferramenta pessoal para explorar informações de rede e evoluiu para um app simples focado em clareza e controle.",
          },
          actions: {
            view_on_github: {
              title: "Ver no GitHub",
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

    changelog: {
      meta: {
        title: "Changelog",
      },
      sections: {
        latest_version: {
          title: "Última versão",
        },
        previous_versions: {
          title: "Versões anteriores",
        },
      },
      versions: {
        meta: {
          "v0.7.1": {
            title: "Pronto para publicação",
            date: "2026-05-08",
            description:
              "Pequenos ajustes focados em publicação, permissões e organização do projeto.",
          },
          "v0.7.0": {
            title: "Mais refinado",
            date: "2026-05-04",
            description:
              "Esta atualização traz mais fluidez, animações sutis e uma identidade visual mais refinada.",
          },
          "v0.6.0": {
            title: "Agora contando sua própria história",
            date: "2026-04-29",
            description:
              "O app agora mostra o que mudou — junto com algumas melhorias internas.",
          },
          "v0.5.0": {
            title: "Um pouco mais humano",
            date: "2026-04-23",
            description:
              "Esta atualização traz mais contexto e personalidade, deixando o app mais claro e completo.",
          },
          "v0.4.0": {
            title: "Mais controle e feedback",
            date: "2026-04-23",
            description:
              "Novas funcionalidades de rede, melhor feedback e interações mais suaves.",
          },
          "v0.3.0": {
            title: "Mais fluido e confiável",
            date: "2026-04-09",
            description:
              "Diversas correções e ajustes para deixar o app mais estável e consistente.",
          },
          "v0.2.0": {
            title: "Uma experiência mais completa",
            date: "2026-04-06",
            description:
              "Temas, haptics e múltiplos idiomas — esta atualização traz recursos que definem a experiência do app.",
          },
          "v0.1.7": {
            title: "Configurações mais organizadas",
            date: "2026-03-25",
            description:
              "Melhorias na estrutura e no layout para deixar as configurações mais claras e fáceis de usar.",
          },
          "v0.1.6": {
            title: "Melhor experiência no Android",
            date: "2026-03-25",
            description:
              "Melhorias focadas no Android, incluindo informações do dispositivo e consistência visual.",
          },
          "v0.1.5": {
            title: "Correção de estabilidade",
            date: "2026-03-24",
            description:
              "Ajustes em dependências para manter o app estável e funcionando corretamente.",
          },
          "v0.1.4": {
            title: "Navegação mais simples",
            date: "2026-03-24",
            description:
              "Adição de navegação por abas para facilitar o uso e tornar a experiência mais intuitiva.",
          },
          "v0.1.3": {
            title: "Cuidando da estabilidade",
            date: "2026-03-20",
            description:
              "Monitoramento de falhas adicionado para identificar problemas e melhorar a confiabilidade.",
          },
          "v0.1.2": {
            title: "Uma identidade mais clara",
            date: "2026-03-19",
            description:
              "Ícone e splash agora se adaptam à variante do app, facilitando identificar cada ambiente.",
          },
          "v0.1.1": {
            title: "Pequena limpeza",
            date: "2026-03-19",
            description:
              "Um ajuste interno para deixar tudo mais simples e fácil de evoluir.",
          },
          "v0.1.0": {
            title: "Um novo começo",
            date: "2026-03-19",
            description:
              "O início de uma nova fase — uma ideia simples evoluindo para um app mais estruturado.",
          },
        },
        content: {
          "v0.7.1": {
            paragraphs: [
              "Esta atualização foca na preparação do app para distribuição em produção e publicação nas lojas.",
              "Algumas configurações internas e permissões do Android foram ajustadas para manter o app mais limpo e alinhado com os requisitos das plataformas.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Removida permissão desnecessária de foreground location no Android",
                  "Atualizado o nome de pacote do projeto para o novo namespace",
                  "Atualizações gerais de dependências e manutenção",
                ],
              },
            ],
          },
          "v0.7.0": {
            paragraphs: [
              "Esta atualização foca em deixar o app mais fluido e agradável de usar.",
              "Pequenas animações, ajustes visuais e melhorias de consistência ajudam a criar uma experiência mais refinada no dia a dia.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novas Funcionalidades",
                items: [
                  "Animação adicionada ao botão de atualização de rede",
                  "Animações suaves de entrada nos cards da tela inicial",
                  "Feedback animado ao copiar o BSSID",
                  "Indicador sutil de novas versões no changelog",
                ],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Ajustes de espaçamento nos itens do changelog",
                  "Nova paleta de cores para melhor consistência visual",
                ],
              },
              {
                type: "infrastructure",
                title: "Visual & Assets",
                items: [
                  "Novo ícone e splash screen do app",
                  "Melhoria na qualidade e proporção dos ícones",
                  "Refinamento do ícone adaptativo no Android",
                ],
              },
            ],
          },
          "v0.6.0": {
            paragraphs: [
              "Esta atualização traz o changelog dentro do próprio app, facilitando acompanhar sua evolução ao longo do tempo.",
              "Também inclui melhorias estruturais e visuais para manter tudo mais limpo, consistente e fácil de evoluir.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novas funcionalidades",
                items: ["Adição do changelog dentro do app"],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Ajustes tipográficos com melhor espaçamento entre letras",
                  "Melhoria na estrutura dos metadados do changelog",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Refatoração dos providers em uma única estrutura",
                  "Atualização de dependências",
                ],
              },
            ],
          },
          "v0.5.0": {
            paragraphs: [
              "Esta atualização adiciona mais contexto e personalidade ao app.",
              "Pequenas melhorias foram feitas para tornar a experiência mais clara e completa.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novas funcionalidades",
                items: ["Adição da seção de autor na tela About"],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Melhoria nas seções da tela About",
                  "Banner de ambiente (dev/preview)",
                  "Traduções baseadas em variante",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: ["Melhoria no comportamento de atualização de rede"],
              },
            ],
          },
          "v0.4.0": {
            paragraphs: [
              "Esta atualização traz mais controle sobre as informações de rede e melhora o feedback das interações.",
              "Também adiciona melhorias em permissões, animações e atualizações em tempo real.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novas funcionalidades",
                items: [
                  "Gerenciador de atualizações de rede",
                  "Cópia do BSSID",
                  "Barra animada de intensidade de sinal",
                  "Gerenciamento de permissões de localização",
                ],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Melhoria no feedback de toque no Android",
                  "Preferência de haptics",
                  "Ajustes no botão de atualização",
                  "Melhorias nas traduções",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: ["Correção na exibição de valores de download"],
              },
            ],
          },
          "v0.3.0": {
            paragraphs: [
              "Esta atualização foca em refinamentos e melhorias de estabilidade.",
              "Diversas correções e ajustes visuais foram feitos para tornar o app mais consistente.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novas funcionalidades",
                items: [
                  "Aviso de privacidade nas configurações",
                  "Exibição do SSID no Android",
                ],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Adição de botão de atualização",
                  "Melhorias no sistema de temas",
                  "Refinamento da tela About e textos dinâmicos",
                  "Ajustes visuais gerais",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: [
                  "Correção de traduções na tela inicial",
                  "Correção de valores de download e exibição",
                  "Ajustes em campos de performance",
                ],
              },
            ],
          },
          "v0.2.0": {
            paragraphs: [
              "Esta atualização representa um grande avanço, trazendo funcionalidades que definem a experiência do app.",
              "Foram adicionados temas, feedback háptico e internacionalização, além de diversas melhorias de layout, performance e consistência.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novas funcionalidades",
                items: [
                  "Suporte a temas com persistência",
                  "Adição de feedback háptico",
                  "Internacionalização (i18n)",
                ],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Melhoria na estrutura e layout da tela inicial",
                  "Ajustes nos headers do iOS e consistência visual",
                  "Refinamento das seções de configurações",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Migração da lista de licenças para lista virtualizada",
                  "Melhorias na configuração do app",
                  "Atualização de dependências",
                ],
              },
            ],
          },
          "v0.1.7": {
            paragraphs: [
              "Esta atualização melhora a experiência das configurações com ajustes de layout, nomes e estrutura.",
              "A navegação ficou mais clara e consistente.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Melhoria nos nomes e estilos das configurações no Android",
                  "Refinamento da estrutura das configurações",
                  "Ajustes menores de layout e estilo",
                ],
              },
            ],
          },
          "v0.1.6": {
            paragraphs: [
              "Esta atualização foca em melhorias na experiência Android e na correção de pequenos problemas na tela About.",
              "Também adiciona informações do dispositivo para maior visibilidade.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Uso de cores dinâmicas Material 3 no Android",
                  "Adição de informações do dispositivo Android",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: [
                  "Correção de importação inválida de cores na tela About",
                ],
              },
            ],
          },
          "v0.1.5": {
            paragraphs: [
              "Esta atualização corrige um problema relacionado à dependência do Sentry ao retornar para uma versão mais estável.",
            ],
            highlights: [
              {
                type: "fixes",
                title: "Correções",
                items: [
                  "Rollback da dependência do Sentry para uma versão estável",
                ],
              },
            ],
          },
          "v0.1.4": {
            paragraphs: [
              "Esta atualização introduz navegação por abas, facilitando a navegação entre as diferentes seções do app.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: ["Adição de navegação baseada em abas"],
              },
            ],
          },
          "v0.1.3": {
            paragraphs: [
              "Esta atualização introduz o uso do Sentry para monitoramento de falhas, permitindo identificar melhor problemas inesperados e melhorar a estabilidade do app.",
            ],
            highlights: [
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: ["Adição do Sentry para monitoramento de falhas"],
              },
            ],
          },
          "v0.1.2": {
            paragraphs: [
              "Esta atualização traz melhorias visuais ao configurar o ícone do app e a splash screen de acordo com a variante atual.",
              "Isso ajuda a diferenciar melhor os ambientes de desenvolvimento, preview e produção, facilitando identificar qual versão do app está em uso.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Configuração do ícone do app baseada na variante",
                  "Configuração da splash screen baseada na variante",
                ],
              },
            ],
          },
          "v0.1.1": {
            paragraphs: [
              "Esta atualização foca em uma pequena limpeza na configuração do app, deixando tudo mais simples e fácil de evoluir daqui pra frente.",
            ],
            highlights: [
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Remoção das definições de cores da configuração do app",
                ],
              },
            ],
          },
          "v0.1.0": {
            paragraphs: [
              "Esta versão marca o início de uma nova fase do My Connection.",
              "O projeto começou lá em março de 2024 como uma ideia simples. Depois de um tempo, retomei o desenvolvimento com uma direção mais clara e um fluxo mais estruturado — com pull requests, versionamento e organização do processo.",
              "A partir daqui, a ideia é evoluir o app aos poucos, com foco em clareza, consistência e uma melhor experiência geral.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Migração para Expo SDK 55",
                  "Configuração de builds de desenvolvimento e preview",
                  "Introdução de variantes de build (development, preview, production)",
                  "Configuração do dev client",
                  "Estrutura base de UI com Expo UI",
                  "Ajustes de configuração e lint",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Configuração de versionamento remoto via EAS",
                  "Workflows de CI para builds de preview",
                  "Atualização de dependências e limpeza do projeto",
                ],
              },
            ],
          },
        },
      },
    },
  },
};

export default pt;
export type Translations = typeof pt;
