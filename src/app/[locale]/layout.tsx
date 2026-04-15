import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import StyledComponentsRegistry from "@/lib/registry";
import ThemeWrapper from "@/lib/ThemeWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ukMessages from "@/messages/uk.json";
import enMessages from "@/messages/en.json";

const allMessages: Record<string, typeof ukMessages> = {
  uk: ukMessages,
  en: enMessages,
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const msgs = allMessages[locale] ?? allMessages.uk;
  const meta = (msgs as any).meta;

  return {
    title: {
      default: meta.title,
      template: `%s | MedMarket`,
    },
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      locale: locale === "uk" ? "uk_UA" : "en_US",
      siteName: "MedMarket",
    },
    alternates: {
      canonical: locale === "uk" ? "/" : `/${locale}`,
      languages: {
        uk: "/",
        en: "/en",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = allMessages[locale] ?? allMessages.uk;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <ThemeWrapper>
              <Header />
              <main>{children}</main>
              <Footer />
            </ThemeWrapper>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
