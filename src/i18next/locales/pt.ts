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
      header: {
        type: {
          wifi: "Wi-Fi",
          cellular: "Rede móvel",
          ethernet: "Ethernet",
          vpn: "VPN",
          bluetooth: "Bluetooth",
          other: "Outra",
          wimax: "WiMAX",
          unknown: "Conexão desconhecida",
          none: "Sem conexão",
        },
        subtitle: {
          connected: "Conectado",
          not_connected: "Não conectado",
          show_network_name: "Mostrar nome da rede",
        },
      },
      quality: {
        no_signal: "Sem sinal",
        weak: "Fraco",
        fair: "Regular",
        good: "Bom",
        excellent: "Excelente",
      },
      gauge: {
        a11y: "Intensidade do sinal {{ value }}%, {{ quality }}",
        mobile: "Rede móvel",
        wired: "Cabeada",
        vpn: "VPN ativa",
        tethering: "Compartilhada",
        other: "Outra rede",
        unknown: "Desconhecida",
        offline: "Offline",
        not_connected: "Não conectado",
        checking: "Verificando",
      },
      status: {
        reachable: "Internet acessível",
        unreachable: "Sem acesso à internet",
        offline: "Sem internet",
        checking: "Verificando internet…",
      },
      link_speed: {
        title: "Velocidade do link",
        unit: "Mbps",
        download: "Download",
        upload: "Upload",
      },
      pills: {
        metered: "Conexão limitada · usa seu plano de dados",
        vpn: "Os detalhes do sinal ficam ocultos pela VPN",
      },
      details: {
        button: "Ver detalhes",
        title: "Detalhes da conexão",
        copied: "Copiado",
        sections: {
          network: "Rede",
          signal: "Sinal",
          ip: "Configuração de IP",
          mobile: "Rede móvel",
          properties: "Propriedades",
        },
        fields: {
          ssid: "Nome (SSID)",
          bssid: "BSSID",
          frequency: "Frequência",
          strength: "Intensidade",
          link_speed: "Velocidade ↓ / ↑",
          ip_address: "Endereço IP",
          subnet: "Máscara de sub-rede",
          carrier: "Operadora",
          generation: "Geração",
          connection_type: "Tipo de conexão",
          metered: "Conexão limitada",
          internet: "Acesso à internet",
          wifi_enabled: "Wi-Fi ligado",
        },
        values: {
          yes: "Sim",
          no: "Não",
          unknown: "—",
          hidden: "Oculto",
          frequency: "{{ value }} GHz",
          strength: "{{ value }}%",
          link_speed: "{{ download }} / {{ upload }} Mbps",
        },
        notes: {
          hidden_network:
            "O Android só compartilha o nome do Wi-Fi e o BSSID com apps que têm acesso à localização. Sua localização nunca é armazenada nem compartilhada.",
          allow_access: "Permitir acesso",
          cellular:
            "Endereço IP e intensidade do sinal não ficam disponíveis para dados móveis.",
          vpn: "A VPN esconde a rede por baixo dela, então só essas propriedades ficam disponíveis.",
          bluetooth:
            "Internet compartilhada de outro aparelho via Bluetooth. Não há outros detalhes disponíveis para essa conexão.",
          other:
            "Não há outros detalhes disponíveis para esse tipo de conexão.",
        },
      },
      network_name: {
        dismiss: "Agora não",
        footnote: "Sua localização nunca é armazenada nem compartilhada.",
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
      hints: {
        dismiss: "Dispensar",
        actions: {
          open_network_settings: "Abrir configurações de rede",
          choose_network: "Escolher uma rede",
          turn_on_wifi: "Ligar o Wi-Fi",
        },
        offline: {
          title: "Você está offline",
          message: "Ligue o Wi-Fi ou os dados móveis para se conectar.",
        },
        wifi_disconnected: {
          title: "Sem rede conectada",
          message:
            "O Wi-Fi está ligado, mas você não está conectado a nenhuma rede.",
        },
        wifi_no_internet: {
          title: "Conectado, mas sem internet",
          message:
            "A rede pode exigir login, ou o roteador está sem internet agora.",
        },
        cellular_no_internet: {
          title: "Conectado, mas sem internet",
          message:
            "Confira se seu plano de dados está ativo ou se há cobertura aqui.",
        },
        weak_signal: {
          title: "Sinal fraco",
          message:
            "Chegue mais perto do roteador ou tire obstáculos entre vocês.",
        },
        slow_cellular: {
          title: "Rede móvel lenta",
          message:
            "Você está no {{ generation }}. Páginas e vídeos podem carregar devagar aqui.",
        },
        slow_link: {
          title: "Conexão lenta com o roteador",
          message:
            "Seu celular e o roteador estão se conectando em baixa velocidade. Reiniciar o Wi-Fi pode ajudar.",
        },
        fair_signal: {
          title: "O sinal poderia ser melhor",
          message:
            "Chamadas de vídeo podem travar. Chegar um pouco mais perto do roteador pode ajudar.",
        },
        band_2_4: {
          title: "Você está no 2.4 GHz",
          message:
            "Se o seu roteador também tem uma rede 5 GHz, ela costuma ser mais rápida quando você está perto.",
        },
        metered_wifi: {
          title: "Este Wi-Fi é limitado",
          message:
            "O Android trata ele como dados móveis, então alguns apps podem limitar o uso em segundo plano.",
        },
        mobile_data: {
          title: "Usando dados móveis",
          message:
            "O Wi-Fi está desligado. Ligar ele pode economizar seu plano de dados.",
        },
        vpn: {
          title: "VPN ativa",
          message:
            "Velocidade e sinal dependem do servidor da VPN, então os números aqui podem variar.",
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
        network: {
          title: "Rede",
          links: {
            network_updates: {
              title: "Atualizações de rede",
              value: {
                enabled: "A cada {{frequency}}",
                disabled: "Desativadas",
              },
            },
            location: {
              title: "Acesso à localização",
              value: {
                allowed: "Permitido",
                approximate: "Aproximado",
                not_allowed: "Não permitido",
              },
            },
          },
        },
        general: {
          title: "Geral",
          links: {
            appearance: {
              title: "Aparência",
              value: { system: "Sistema", light: "Claro", dark: "Escuro" },
            },
            language: { title: "Idioma" },
            haptics: { title: "Feedback tátil" },
          },
        },
        privacy: {
          title: "Privacidade",
          links: {
            crash_reports: {
              title: "Relatórios de erro",
              value: { on: "Ativado", off: "Desativado" },
            },
            privacy_policy: { title: "Política de Privacidade" },
          },
        },
        about: {
          title: "Sobre",
          links: {
            about: { title: "Sobre" },
            changelog: { title: "Changelog", badge: "Novo" },
            licenses: { title: "Licenças" },
          },
        },
      },
      disclaimer: {
        title: "A sua rede continua sua",
        text: "O app lê a sua conexão no seu celular, e é lá que ela fica.",
      },
    },

    privacy: {
      meta: { title: "Relatórios de erro" },
      sections: {
        crash_reports: {
          title: "Diagnóstico",
          fields: {
            crash_reports: {
              title: "Enviar relatórios de erro",
              description:
                "Detalhes anônimos de erros que ajudam a corrigir bugs. Desativado por padrão.",
            },
          },
        },
        never_sent: {
          title: "Nunca enviado",
          items: {
            network_name: "Nome da rede (SSID)",
            bssid: "BSSID",
            ip_address: "Endereço IP",
            location: "Localização",
          },
        },
      },
    },

    preferences: {
      meta: { title: "Atualizações de rede" },
      sections: {
        automatic_updates: {
          title: "Atualizações automáticas",
          fields: {
            automatic_updates: {
              title: "Atualizações automáticas",
              description: "Atualiza automaticamente as informações da rede.",
            },
            frequency: { title: "Frequência de atualização" },
          },
        },
        status: {
          title: "Status",
          fields: {
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
            refresh: { title: "Atualizar status da rede" },
          },
        },
      },
      frequency_sheet: {
        title: "Frequência de atualização",
        description:
          "Com que frequência o app atualiza as informações da sua rede enquanto está aberto.",
        default: "Padrão",
        options: {
          "5s": "Quase em tempo real. Útil para achar o melhor lugar para o sinal.",
          "15s":
            "Mostra mudanças mais rápido. Bom quando você está se movendo.",
          "30s": "Um equilíbrio entre dados atualizados e menos atualizações.",
          "60s": "Menos atualizações. Bom quando você fica num lugar só.",
        },
      },
    },

    permissions: {
      meta: { title: "Acesso à localização" },
      intro:
        "O Android só compartilha o nome do Wi-Fi (SSID) e o BSSID com apps que têm acesso à localização. O Minha Conexão usa esse acesso só para isso.",
      status: {
        visible: "O nome do Wi-Fi está visível",
        hidden: "O nome do Wi-Fi está oculto",
        progress: "{{done}} de {{total}} passos concluídos",
      },
      sections: {
        steps: { title: "Passos" },
        manage: {
          title: "Gerenciar",
          app_permissions: {
            title: "Permissões do app",
            description:
              "Altere ou remova o acesso nas configurações do Android.",
          },
        },
      },
      steps: {
        permission: {
          done_title: "Acesso à localização",
          done_description: "Permitido.",
          title: "Permitir acesso à localização",
          description: "Necessário para ler o nome do Wi-Fi.",
          description_blocked:
            "O acesso foi negado. Permita nas configurações do Android.",
          action: "Permitir",
          action_blocked: "Abrir configurações",
        },
        precision: {
          done_title: "Localização precisa",
          done_description: "Ativada.",
          title: "Usar localização precisa",
          description:
            "A localização aproximada não basta para ler o nome do Wi-Fi.",
          description_locked: "Disponível após o passo 1.",
          action: "Abrir configurações",
        },
        services: {
          done_title: "Serviços de localização",
          done_description: "Ativados.",
          title: "Ativar os serviços de localização",
          description: "A localização está desativada neste aparelho.",
          action: "Ativar",
        },
      },
      disclaimer: "Sua localização nunca é armazenada nem compartilhada.",
    },

    appearance: {
      meta: { title: "Aparência" },
      sections: {
        theme: {
          title: "Tema",
          fields: {
            system: {
              title: "Sistema",
              description: "Segue a configuração do seu aparelho.",
            },
            light: { title: "Claro" },
            dark: { title: "Escuro" },
          },
        },
        android_dynamic_colors: {
          title: "Cores",
          fields: {
            dynamic_colors: {
              title: "Usar cores do sistema",
              description:
                "Adapta as cores com base no tema e papel de parede do dispositivo.",
              description_disabled: "Disponível quando o tema está em Sistema.",
            },
          },
        },
      },
    },

    licenses: {
      meta: { title: "Licenças" },
      description:
        "{{count}} pacotes de código aberto tornam o {{app_name}} possível.",
    },

    about: {
      meta: { title: "Sobre" },
      sections: {
        app: {
          title: "App",
          fields: {
            name: "Nome",
            version: "Versão",
            installed_at: "Instalado em",
            updated_at: "Atualizado em",
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
              "O {{app_name}} começou como uma ferramenta pessoal para explorar informações de rede e evoluiu para um app simples focado em clareza e controle.",
            role: "Criador do {{app_name}}",
          },
        },
        explore: {
          title: "Explorar",
          fields: {
            website: {
              title: "Site",
              description: "Saiba mais sobre o app",
            },
            play_store: {
              title: "Google Play",
              description: "Avalie ou compartilhe o app",
            },
          },
        },
        build: {
          title: "Build",
          fields: {
            package: "Identificador",
            build_id: "ID da build",
            fingerprint: "Fingerprint da build",
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
                description: "Inglês",
              },
              pt: {
                title: "Português (Brasil)",
                description: "Português (Brasil)",
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
          badge: "Novo",
          read_more: "Ler mais",
        },
        previous_versions: {
          title: "Versões anteriores",
        },
      },
      versions: {
        meta: {
          "v1.0.0": {
            title: "Chegou a 1.0",
            date: "2026-11-09",
            description:
              "O Minha Conexão chegou à 1.0. Obrigado a todo mundo que testou e mandou feedback pelo caminho.",
          },
          "v0.12.0": {
            title: "Um ícone novo",
            date: "2026-11-04",
            description:
              "Um ícone novo, a cópia nos detalhes da conexão está de volta e pequenos ajustes visuais em todo o app.",
          },
          "v0.11.0": {
            title: "Privacidade em primeiro lugar",
            date: "2026-11-04",
            description:
              "Configurações redesenhadas e relatórios de erro opcionais, desativados por padrão. Os detalhes da sua rede nunca saem do aparelho.",
          },
          "v0.10.0": {
            title: "Uma Início totalmente nova",
            date: "2026-11-03",
            description:
              "Uma Início redesenhada que mostra sua conexão de relance, com anel de sinal, dicas e detalhes da conexão.",
          },
          "v0.9.3": {
            title: "Pequenas melhorias",
            date: "2026-08-25",
            description:
              "Uma pequena atualização com melhorias na interface de preferências e no fluxo de publicação.",
          },
          "v0.9.2": {
            title: "Pequenos ajustes, uma base melhor",
            date: "2026-08-23",
            description:
              "Uma pequena atualização de manutenção com uma correção no link da política de privacidade e melhorias na base do projeto.",
          },
          "v0.9.1": {
            title: "Melhorias de estabilidade e qualidade",
            date: "2026-06-02",
            description:
              "Uma pequena atualização focada em estabilidade, qualidade e preparação para futuras versões.",
          },
          "v0.9.0": {
            title: "Site oficial e refinamentos",
            date: "2026-06-02",
            description:
              "Apresenta o site oficial do Minha Conexão enquanto continua evoluindo a experiência do produto e sua integração com as plataformas.",
          },
          "v0.8.0": {
            title: "Pronto para distribuição",
            date: "2026-05-21",
            description:
              "Melhorias de infraestrutura, privacidade e plataforma focadas em preparar o app para uma distribuição mais ampla.",
          },
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
          "v1.0.0": {
            paragraphs: [
              "O Minha Conexão chegou à 1.0! O que começou como uma ideia simples para ver o sinal do seu Wi-Fi agora é um app completo, com uma nova Início, Configurações redesenhadas, privacidade em primeiro lugar e um ícone novo.",
              "Obrigado a todo mundo que instalou, testou e mandou feedback pelo caminho. Esta versão existe por causa de vocês.",
              "A 1.0 também capricha nos detalhes: Ver detalhes ficou mais confiável, as Configurações ganharam um novo aviso de privacidade e Sobre recebeu pequenos toques.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Novo aviso de privacidade no fim das Configurações.",
                  "Os links do Google Play e do site em Sobre agora mostram o logo do Google Play e o ícone do app.",
                  "O link do site em Sobre agora tem uma descrição curta.",
                  "Links externos agora usam uma seta para fora.",
                  "Os textos do app agora usam o nome Minha Conexão.",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: [
                  "Os toques em Ver detalhes continuam funcionando quando a janela se expande, por exemplo quando aparece o aviso de localização.",
                  "As últimas linhas de Ver detalhes agora rolam acima da barra de navegação.",
                  "Cada linha de Ver detalhes mostra o seu próprio Copiado, mesmo quando você copia várias seguidas.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Licenças e Changelog agora usam uma lista mais rápida.",
                ],
              },
            ],
          },
          "v0.12.0": {
            paragraphs: [
              "O Minha Conexão ganhou um ícone novo: um anel de sinal em volta do símbolo do Wi-Fi, inspirado no anel que você vê na Início.",
              "A cópia nos detalhes da conexão está de volta. Toque no nome da rede, no BSSID ou no endereço IP em Ver detalhes para copiar. Isso havia ficado de fora da nova Início.",
              "Esta versão também traz pequenos ajustes visuais na Início, em Sobre e nas Configurações.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novidades",
                items: [
                  "Novo ícone do app, com um anel de sinal em volta do símbolo do Wi-Fi.",
                ],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Copie de novo o nome da rede, o BSSID e o endereço IP nos detalhes da conexão.",
                  "A seção do autor agora fica no fim da tela Sobre.",
                  "Tamanhos de texto e espaçamentos refinados nas dicas da Início, no botão de detalhes e nas telas de configurações.",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: ["Corrigida a posição da foto do autor na tela Sobre."],
              },
            ],
          },
          "v0.11.0": {
            paragraphs: [
              "Privacidade não é uma feature, é um princípio. A partir desta versão, o Minha Conexão não envia nada sem o seu consentimento.",
              "Os relatórios de erro agora são opcionais e vêm desativados. Se você ativar em Configurações › Privacidade, nome da rede, BSSID e endereço IP são removidos antes do envio, e a tela nunca é gravada.",
              "As configurações também foram redesenhadas de ponta a ponta, com telas mais claras para atualizações de rede, acesso à localização, aparência, idioma e mais.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novidades",
                items: [
                  "Configurações redesenhadas e organizadas em seções.",
                  "Nova seção Privacidade com relatórios de erro opcionais, desativados por padrão.",
                  "As atualizações de rede agora podem acontecer a cada 5 segundos.",
                  "Novas telas de Novidades e de versão.",
                ],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Telas de Atualizações de rede, Acesso à localização, Aparência, Idioma, Sobre e Licenças redesenhadas.",
                  "Novo visual do switch em todo o app.",
                  "O fundo do app agora acompanha o tema.",
                  "A foto do autor vem dentro do app, então a tela Sobre não acessa mais o GitHub.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Os relatórios de erro não incluem mais gravações de tela e removem os detalhes da rede antes do envio.",
                  "Remoção do Expo Insights e do Expo Observe.",
                ],
              },
            ],
          },
          "v0.10.0": {
            paragraphs: [
              "O Minha Conexão ganhou uma Início totalmente nova. Tudo o que você precisa para entender sua conexão agora cabe em uma única tela, sem abas.",
              "Um anel mostra a intensidade do seu Wi-Fi, junto com o acesso à internet e a velocidade do link. Quando algo parece errado, uma dica curta explica o que está acontecendo e como resolver.",
              "Esta versão também atualiza o app para o Expo SDK 58 e traz uma nova fonte, a Geist, para o app inteiro.",
            ],
            highlights: [
              {
                type: "features",
                title: "Novas funcionalidades",
                items: [
                  "Tela inicial redesenhada com um anel de intensidade do sinal.",
                  "Dicas para sinal fraco, falta de acesso à internet, link lento e mais.",
                  "Detalhes da conexão em uma bottom sheet para cada tipo de conexão.",
                  "Fluxo guiado para mostrar o nome da sua rede Wi-Fi.",
                ],
              },
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Removida a barra de abas: as configurações ficam a um toque da tela inicial.",
                  "Nova fonte Geist em todo o app.",
                  "Animações mais suaves quando a conexão muda.",
                  "O app agora fica sempre na orientação retrato.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Atualizado para o Expo SDK 58.",
                  "Dependências do projeto atualizadas.",
                ],
              },
            ],
          },
          "v0.9.3": {
            paragraphs: [
              "Esta atualização traz algumas pequenas melhorias para o app.",
              "A interface das preferências foi refinada, junto com alguns ajustes no processo de publicação e manutenção do projeto.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Interface das preferências refinada.",
                  "Melhorado o posicionamento dos controles nas configurações.",
                  "Atualizado o fluxo de publicação da versão Android.",
                ],
              },
            ],
          },
          "v0.9.2": {
            paragraphs: [
              "Esta é uma pequena atualização de manutenção focada em manter o Minha Conexão confiável e preparado para o que vem pela frente.",
              "A principal mudança visível para o usuário corrige um link incorreto na página de política de privacidade, enquanto o projeto também recebeu melhorias em dependências, CI, analytics e qualidade de código.",
              "Também adicionamos as bases para o projeto open source, incluindo um novo README, diretrizes de contribuição, Código de Conduta e licença MIT.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Melhoramos a documentação e as diretrizes do projeto open source.",
                  "Atualizamos dependências e ferramentas de desenvolvimento.",
                  "Melhoramos a configuração do workflow de CI.",
                  "Aprimoramos a medição de performance da aplicação.",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: [
                  "Corrigimos um link externo incorreto na página de política de privacidade.",
                  "Corrigimos problemas de lint no projeto.",
                ],
              },
            ],
          },
          "v0.9.1": {
            paragraphs: [
              "Esta atualização é focada em melhorias de estabilidade e qualidade do projeto.",
              "Embora não traga grandes funcionalidades visíveis para o usuário, diversos ajustes foram realizados nos bastidores para tornar futuras atualizações mais confiáveis e fáceis de manter.",
              "O resultado é um fluxo de desenvolvimento mais saudável e uma base mais sólida para as próximas versões.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Melhoria da estabilidade geral do projeto.",
                  "Refinamento da qualidade e consistência interna do código.",
                  "Melhorias no processo de preparação de novas versões.",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: [
                  "Correção de um problema relacionado à seção do autor.",
                ],
              },
            ],
          },
          "v0.9.0": {
            paragraphs: [
              "Esta versão apresenta o site oficial do Minha Conexão, reunindo a Política de Privacidade, o Changelog e os recursos de suporte em um único lugar.",
              "Também inclui diversos refinamentos na experiência do aplicativo, tornando as Configurações mais organizadas e melhorando o comportamento das Dynamic Colors em dispositivos Android compatíveis.",
              "Nos bastidores, a observabilidade e os fluxos de distribuição continuam evoluindo, ajudando a preparar o projeto para seu futuro lançamento público.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Reorganização das seções de Configurações para facilitar a navegação.",
                  "Melhoria na verificação de disponibilidade das Dynamic Colors em dispositivos Android compatíveis.",
                  "Atualização do link da Política de Privacidade para o site oficial.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Configuração do Expo Observe para observabilidade do aplicativo.",
                  "Melhorias nos diagnósticos do fluxo de envio para produção no Android.",
                  "Atualização da configuração da trilha de distribuição Android.",
                  "Atualização das dependências do projeto.",
                ],
              },
            ],
          },
          "v0.8.0": {
            paragraphs: [
              "Esta atualização foca em infraestrutura, atualizações de plataforma e preparação geral do app para distribuição.",
              "Grande parte do trabalho desta versão aconteceu nos bastidores — melhorando a base do projeto, modernizando dependências e refinando o comportamento do app entre Android e iOS.",
              "A versão também adiciona acesso direto à Política de Privacidade externa a partir do app, deixando a experiência mais transparente e completa.",
            ],
            highlights: [
              {
                type: "improvements",
                title: "Melhorias",
                items: [
                  "Expansão do suporte a cores dinâmicas no Android para SDK 31 ou superior.",
                  "Adicionadas traduções ausentes relacionadas à conexão celular.",
                  "Melhorado o fluxo de permissões ao ativar os serviços de localização.",
                  "Adicionado link direto para a Política de Privacidade externa.",
                ],
              },
              {
                type: "infrastructure",
                title: "Infraestrutura",
                items: [
                  "Migração do projeto para o Expo SDK 56.",
                  "Migração dos imports de navegação do React Navigation para Expo Router.",
                  "Configuração do fluxo automatizado de build e submit de produção para Android.",
                  "Atualização dos requisitos mínimos da EAS CLI.",
                  "Movido o carregamento de fontes para um hook dedicado.",
                ],
              },
              {
                type: "fixes",
                title: "Correções",
                items: [
                  "Removidas descrições não utilizadas da seção celular.",
                  "Melhorado o comportamento da bottom sheet de permissões após conceder permissões.",
                ],
              },
            ],
          },
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
                title: "Infraestrutura",
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
              "Esta versão marca o início de uma nova fase do Minha Conexão.",
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
