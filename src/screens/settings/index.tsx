// import {
//   Card,
//   Column,
//   Divider,
//   Host,
//   RNHostView,
//   Row,
//   Text,
// } from "@expo/ui/jetpack-compose";
// import {
//   fillMaxWidth,
//   padding,
//   paddingAll,
//   weight,
// } from "@expo/ui/jetpack-compose/modifiers";
// import * as ExpoApplication from "expo-application";
// import * as ExpoDevice from "expo-device";
// import { Color } from "expo-router";
// import { SymbolView } from "expo-symbols";
// import { type ReactNode, useEffect, useState } from "react";

import { Color, Stack } from "expo-router";
import { Platform, ScrollView } from "react-native";
import { Section } from "../../components/ui/section";
import { AboutSectionContent } from "./components/about-section-content";

export function SettingsScreen() {
  return (
    <>
      <Stack.Screen.Title large>Settings</Stack.Screen.Title>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: Platform.select({
            android: Color.android.dynamic.surface,
            ios: Color.ios.systemBackground,
          }),
        }}
        contentContainerStyle={{
          padding: 24,
          gap: 24,
        }}
      >
        {/* <Section title="Preferences">
          <PreferencesSectionContent />
        </Section> */}

        <Section title="About">
          <AboutSectionContent />
        </Section>

        {/* <Host matchContents>
        <AboutSection />
      </Host> */}

        {/* <Host matchContents>
        <LegalSection />
      </Host> */}

        {/* <Host matchContents>
        <DeviceSection />
      </Host> */}

        {/* <Host matchContents>
        <OSSection />
      </Host> */}

        {/* <Host matchContents>
        <Text
          color={Color.android.dynamic.onSurfaceVariant.toString()}
          style={{ typography: "bodyMedium", textAlign: "center" }}
          modifiers={[fillMaxWidth(), padding(24, 16, 24, 40)]}
        >
          Don't worry, this information won't leave your device.
        </Text>
      </Host> */}
      </ScrollView>
    </>
  );
}

// function LegalSection() {
//   return (
//     <Section title="Legal">
//       <Card
//         colors={{
//           containerColor: Color.android.dynamic.surfaceContainerLow,
//         }}
//       >
//         <Column>
//           <RNHostView matchContents>
//             <Pressable
//               onPress={() => ToastAndroid.show("Soon...", ToastAndroid.LONG)}
//             >
//               <View
//                 style={{
//                   flexDirection: "row",
//                   alignItems: "center",
//                   gap: 16,
//                   paddingVertical: 16,
//                   paddingHorizontal: 24 + 16,
//                 }}
//               >
//                 <RNText
//                   style={{
//                     flex: 1,
//                     fontSize: 16,
//                     fontWeight: "500",
//                     color: Color.android.dynamic.onSurface,
//                   }}
//                 >
//                   Licenses
//                 </RNText>
//                 <SymbolView
//                   name={{ android: "chevron_right" }}
//                   size={20}
//                   tintColor={Color.android.dynamic.outline}
//                 />
//               </View>
//             </Pressable>
//           </RNHostView>
//         </Column>
//       </Card>
//     </Section>
//   );
// }

// const DEVICE_TYPE_MAP = {
//   [ExpoDevice.DeviceType.DESKTOP]: "Desktop",
//   [ExpoDevice.DeviceType.PHONE]: "Phone",
//   [ExpoDevice.DeviceType.TABLET]: "Tablet",
//   [ExpoDevice.DeviceType.TV]: "TV",
//   [ExpoDevice.DeviceType.UNKNOWN]: "Unkown",
// };

// const dateFormatter = new Intl.DateTimeFormat("en-us", {
//   dateStyle: "medium",
//   timeStyle: "short",
// });

// function AboutSection() {
//   const [installedAt, setInstalledAt] = useState<Date | null>(null);
//   const [updatedAt, setUpdatedAt] = useState<Date | null>(null);

//   let formattedInstalledAt = "Loading...";
//   let formattedUpdatedAt: string | null = null;

//   if (installedAt) {
//     formattedInstalledAt = dateFormatter.format(installedAt);
//   }

//   if (updatedAt) {
//     formattedUpdatedAt = dateFormatter.format(updatedAt);
//   }

//   useEffect(() => {
//     async function loadInfo() {
//       try {
//         const promises = [ExpoApplication.getInstallationTimeAsync()];

//         if (Platform.OS === "android") {
//           promises.push(ExpoApplication.getLastUpdateTimeAsync());
//         }

//         const [installationTime, lastUpdateTime] = await Promise.all(promises);

//         setInstalledAt(installationTime);
//         setUpdatedAt(lastUpdateTime || null);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     loadInfo();
//   }, []);

//   return (
//     <Section title="About">
//       <Card
//         colors={{
//           containerColor: Color.android.dynamic.surfaceContainerLow,
//         }}
//       >
//         <Column>
//           <ItemRow label="Name" value={ExpoApplication.applicationName} />

//           <Divider />

//           <ItemRow label="Package" value={ExpoApplication.applicationId} />

//           <Divider />

//           <ItemRow
//             label="Version"
//             value={`v${ExpoApplication.nativeApplicationVersion} (${ExpoApplication.nativeBuildVersion})`}
//           />

//           <Divider />

//           <ItemRow label="Install Date" value={formattedInstalledAt} />

//           {formattedUpdatedAt && (
//             <>
//               <Divider />

//               <ItemRow label="Update Date" value={formattedUpdatedAt} />
//             </>
//           )}
//         </Column>
//       </Card>
//     </Section>
//   );
// }

// function DeviceSection() {
//   const deviceType =
//     DEVICE_TYPE_MAP[ExpoDevice.deviceType ?? ExpoDevice.DeviceType.UNKNOWN] ??
//     "???";

//   return (
//     <Section title="Device">
//       <Card
//         colors={{
//           containerColor: Color.android.dynamic.surfaceContainerLow,
//         }}
//       >
//         <Column>
//           <ItemRow label="Device Type" value={deviceType} />

//           <Divider />

//           <ItemRow label="Manufacturer" value={ExpoDevice.manufacturer} />

//           <Divider />

//           <ItemRow label="Model" value={ExpoDevice.modelName} />

//           <Divider />

//           <ItemRow
//             label="Year Class"
//             value={String(ExpoDevice.deviceYearClass ?? "")}
//           />

//           <Divider />

//           <ItemRow label="Android Design Name" value={ExpoDevice.designName} />

//           <Divider />

//           <ItemRow
//             label="Android Product Name"
//             value={ExpoDevice.productName}
//           />
//         </Column>
//       </Card>
//     </Section>
//   );
// }

// function OSSection() {
//   return (
//     <Section title="Operational System">
//       <Card
//         colors={{
//           containerColor: Color.android.dynamic.surfaceContainerLow,
//         }}
//       >
//         <Column>
//           <ItemRow label="Name" value={ExpoDevice.osName} />

//           <Divider />

//           <ItemRow label="Version" value={ExpoDevice.osVersion} />

//           <Divider />

//           <ItemRow label="Build ID" value={ExpoDevice.osBuildId} />

//           <Divider />

//           <ItemRow
//             label="Internal Build ID"
//             value={ExpoDevice.osInternalBuildId}
//           />

//           <Divider />

//           <ItemRow
//             label="Android API Level"
//             value={String(ExpoDevice.platformApiLevel ?? "")}
//           />

//           <Divider />

//           <ItemColumn
//             label="Android Build Fingerprint"
//             value={ExpoDevice.osBuildFingerprint}
//           />
//         </Column>
//       </Card>
//     </Section>
//   );
// }

// type SectionProps = {
//   title: string;
//   children: ReactNode;
// };

// function Section({ title, children }: SectionProps) {
//   return (
//     <Column verticalArrangement={{ spacedBy: 12 }} modifiers={[paddingAll(24)]}>
//       <Text
//         color={Color.android.dynamic.onSurfaceVariant.toString()}
//         style={{ typography: "labelLarge" }}
//         modifiers={[padding(16, 0, 16, 0)]}
//       >
//         {title}
//       </Text>
//       {children}
//     </Column>
//   );
// }

// type ItemRowProps = {
//   label: string;
//   value: string | null;
// };

// function ItemRow({ label, value }: ItemRowProps) {
//   return (
//     <Row
//       modifiers={[fillMaxWidth(), paddingAll(16)]}
//       verticalAlignment="center"
//       horizontalArrangement={{ spacedBy: 16 }}
//     >
//       <Column modifiers={[]}>
//         <Text
//           color={Color.android.dynamic.onSurface.toString()}
//           style={{ typography: "titleMedium" }}
//         >
//           {label}
//         </Text>
//       </Column>
//       <Text
//         color={Color.android.dynamic.onSurfaceVariant.toString()}
//         style={{ typography: "bodyLarge", textAlign: "end" }}
//         maxLines={1}
//         minLines={1}
//         overflow="ellipsis"
//         modifiers={[weight(1)]}
//       >
//         {value ?? ""}
//       </Text>
//     </Row>
//   );
// }

// type ItemColumnProps = {
//   label: string;
//   value: string | null;
// };

// function ItemColumn({ label, value }: ItemColumnProps) {
//   return (
//     <Column modifiers={[paddingAll(16)]} verticalArrangement={{ spacedBy: 8 }}>
//       <Text
//         color={Color.android.dynamic.onSurface.toString()}
//         style={{ typography: "titleMedium" }}
//       >
//         {label}
//       </Text>
//       <Text
//         color={Color.android.dynamic.onSurfaceVariant.toString()}
//         style={{ typography: "bodyLarge" }}
//       >
//         {value ?? ""}
//       </Text>
//     </Column>
//   );
// }
