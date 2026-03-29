import { defineRouting } from "next-intl/routing";

export const locales = ["uk", "en"] as const;
export type Locale = (typeof locales)[number];

const isStaticExport = process.env.STATIC_EXPORT === "true";

export const routing = defineRouting({
  locales,
  defaultLocale: "uk",
  localePrefix: isStaticExport ? "always" : "as-needed",
});
