import { use } from "react";

import { LocationContext } from "@/contexts/location";

export function useLocation() {
  const context = use(LocationContext);

  if (!context) {
    throw new Error("useLocation must be used within LocationProvider");
  }

  return context;
}
