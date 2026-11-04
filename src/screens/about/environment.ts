export const environment = String(
  process.env.EXPO_PUBLIC_APP_VARIANT || "development",
) as "development" | "preview" | "production";

export const isDevelopment = environment === "development";
