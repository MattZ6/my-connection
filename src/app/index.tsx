import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNetInfo, NetInfoStateType, NetInfoState } from '@react-native-community/netinfo';
import { theme } from "@/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Fragment } from "react";

const connectionType = {
  [NetInfoStateType.bluetooth]: 'Bluetooth',
  [NetInfoStateType.cellular]: 'Internet móvel',
  [NetInfoStateType.ethernet]: 'Ethernet',
  [NetInfoStateType.none]: 'Nenhuma',
  [NetInfoStateType.other]: 'Outra',
  [NetInfoStateType.unknown]: 'Desconhecido',
  [NetInfoStateType.vpn]: 'VPN',
  [NetInfoStateType.wifi]: 'Wi-Fi',
  [NetInfoStateType.wimax]: 'WiMax',
}

function getFields(info: NetInfoState) {
  if (info.type === NetInfoStateType.cellular) {
    return [
      {
        label: 'Carrier',
        value: info.details.carrier
      },
      {
        label: 'Velocidade',
        value: info.details.cellularGeneration
      }
    ]
  }

  if (info.type === NetInfoStateType.ethernet) {
    return [
      {
        label: 'Endereço de IP',
        value: info.details.ipAddress
      },
      {
        label: 'Máscara de sub rede',
        value: info.details.subnet
      }
    ]
  }

  if (info.type === NetInfoStateType.wifi) {
    return [
      {
        label: 'Frequência',
        value: `${info.details.frequency} GHz`
      },
      {
        label: 'Endereço de IP',
        value: info.details.ipAddress
      },
      {
        label: 'Máscara de sub rede',
        value: info.details.subnet
      },
      {
        label: 'BSSID',
        value: info.details.bssid
      },
      {
        label: 'SSID',
        value: info.details.ssid
      },
      {
        label: 'Intensidade do sinal',
        value: `${info.details.strength}%`
      },
      {
        label: 'Velocidade',
        value: `${info.details.linkSpeed} Mbps`
      },
      {
        label: 'Velocidade de download',
        value: `${info.details.rxLinkSpeed} Mbps`
      },
      {
        label: 'Velocidade de upload',
        value: `${info.details.txLinkSpeed} Mbps`
      },
    ]
  }

  return [];
}

export default function HomePage() {
  const info = useNetInfo()

  if (!info) {
    return null
  }

  const extraFields = getFields(info);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Conexão</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>
              Tipo
            </Text>
            <Text style={styles.value}>
              {connectionType[info.type]}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.field}>
            <Text style={styles.label}>
              WiFi habilitado
            </Text>
            <Text style={styles.value}>
              {info.isWifiEnabled ? 'Sim' : 'Não'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.field}>
            <Text style={styles.label}>
              Conectado à alguma rede
            </Text>
            <Text style={styles.value}>
              {info.isConnected ? 'Sim' : 'Não'}
            </Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.field}>
            <Text style={styles.label}>
              Com acesso à internet
            </Text>
            <Text style={styles.value}>
              {info.isInternetReachable ? 'Sim' : 'Não'}
            </Text>
          </View>
        </View>

        {!!extraFields.length && (
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.title}>Sobre a rede</Text>
            </View>

            {extraFields.map((field, index) => (
              <Fragment key={field.label}>
                <View style={styles.field}>
                  <Text style={styles.label}>
                    {field.label}
                  </Text>
                  <Text style={styles.value}>
                    {field.value}
                  </Text>
                </View>

                {!!(index < extraFields.length - 1) && (
                  <View style={styles.divider} />
                )}
              </Fragment>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,

    gap: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: theme.colors.mauve6,
    borderRadius: theme.radii.lg,

    backgroundColor: theme.colors.mauve2,
  },
  header: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.mauve12,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.mauve6,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,

    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  label: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.mauve11,
  },
  value: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.size.body.md,
    color: theme.colors.mauve12,
  },
})