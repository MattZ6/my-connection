import type { ReactNode } from "react";

export namespace LocationContextTypes {
  export type Permission = "granted" | "denied" | "undetermined";
  export type Precision = "precise" | "reduced" | "none";

  export type Context = {
    permission: Permission;
    precision: Precision;
    canAskAgain: boolean;
    locationServicesEnabled: boolean;
    requestPermission: () => Promise<void>;
  };
}

export namespace LocationProviderTypes {
  export type Props = {
    children: ReactNode;
  };
}
