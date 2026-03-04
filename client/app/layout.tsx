import type { Metadata } from "next";
import { headers } from "next/headers";
import { Cairo, Manrope } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "@/components/layout/ConditionalHeader";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StructuredData, { organizationSchema, webSiteSchema } from "@/components/seo/StructuredData";
import { DEFAULT_LANG, getLangDir, isValidLang } from "@/lib/locale";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Advadev - Web Development & Business Automation",
    template: "%s | Advadev",
  },
  description:
    "Professional web development and business automation solutions. Transform your business with modern technology and expert engineering.",
  keywords: [
    "web development",
    "business automation",
    "custom applications",
    "software development",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS development",
    "API integration",
  ],
  authors: [{ name: "Advadev" }],
  creator: "Advadev",
  publisher: "Advadev",
  metadataBase: new URL("https://advadev.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://advadev.com",
    siteName: "Advadev",
    title: "Advadev - Web Development & Business Automation",
    description:
      "Professional web development and business automation solutions. Transform your business with modern technology.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Advadev Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advadev - Web Development & Business Automation",
    description:
      "Professional web development and business automation solutions.",
    creator: "@advadev",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/**
 * RootLayout — Server Component
 * ================================
 * Reads the `x-lang` header injected by middleware.ts to resolve the user's
 * language preference BEFORE any HTML is streamed to the browser.
 *
 * This means <html lang="…" dir="…"> is correct from the very first byte,
 * and the LanguageProvider hydrates with the exact same `initialLang` that
 * was used during SSR → zero flash of wrong locale.
 *
 * Request flow:
 *   Browser → middleware (reads cookie, stamps x-lang) → layout (reads x-lang)
 *          → LanguageProvider(initialLang) → page renders in correct language
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // `headers()` is async in Next.js 15+ — await it to get the ReadonlyHeaders.
  // The `x-lang` header was stamped by middleware.ts before this function ran.
  const headersList = await headers();
  const rawLang = headersList.get("x-lang");
  const lang = isValidLang(rawLang) ? rawLang : DEFAULT_LANG;
  const dir = getLangDir(lang);

  return (
    <html
      lang={lang}
      dir={dir}
      // suppressHydrationWarning is required because next-themes mutates the
      // `class` attribute on <html> client-side for dark mode. Without it,
      // React would log a hydration warning on every page load.
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="https://advadev.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#832cdb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${cairo.variable} ${manrope.variable} font-body antialiased bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <StructuredData data={organizationSchema} />
        <StructuredData data={webSiteSchema} />
        {/*
         * Pass the server-resolved lang down as initialLang.
         * React initialises useState(initialLang) during hydration — the exact
         * same value the server used — so there is no state mismatch and
         * therefore no re-render / flicker on mount.
         */}
        <LanguageProvider initialLang={lang}>
          <ThemeProvider>
            <ConditionalHeader />
            <main id="main-content">{children}</main>
            <Footer lang={lang} />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
