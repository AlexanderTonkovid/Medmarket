import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isStaticExport = process.env.STATIC_EXPORT === "true";
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: isStaticExport,
  },
  ...(isStaticExport && { output: "export" }),
};

export default withNextIntl(nextConfig);
