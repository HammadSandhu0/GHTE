import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata = {
  title: {
    default: "Power, Security & IT Solutions Around Saudi Arabia | GHTE",
  },
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "GHTE",
    title:
      "Power, Security & IT Solutions Around Saudi Arabia | Gulf Horizon Telecom Est",
    description:
      "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "GHTE Open Graph Image",
      },
    ],
  },
  icons: {
    icon: `${baseUrl}/favicon.ico`,
    shortcut: `${baseUrl}/favicon-16x16.png`,
    apple: `${baseUrl}/apple-touch-icon.png`,
  },
  keywords:
    "Power solutions, Security solutions, IT solutions, UPS systems, Cybersecurity, CCTV systems, Generators Saudi Arabia, Power backup systems, Telecom services Saudi Arabia, Gulf Horizon Telecom Est",
  author: "Gulf Horizon Telecom Est", // replace with actual author or company name
  publisher: "Gulf Horizon Telecom Est", // replace with publisher if different
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  // Dynamic Structured Data
  const schemaMarkup = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: metadata.title.default,
    description: metadata.description,
    url: `${baseUrl}/${locale}`,
  };

  return (
    <html lang={locale}>
      <head>
        <title>{metadata.title.default}</title>
        {/* Canonical Tag (Fix for Homepage & Other Pages) */}
        <link
          rel="canonical"
          href={`${baseUrl}${locale === "en" ? "" : "/" + locale}`}
        />
        {/* Hreflang Tags for Multi-language SEO */}
        {routing.locales.map((lang) => (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`${baseUrl}/${lang}`}
          />
        ))}
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        {/* Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`${baseUrl}/${locale}`} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta property="og:image:alt" content="GHTE Open Graph Image" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title.default} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        <meta name="twitter:image:alt" content="GHTE Twitter Image" />
        {/* New Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={metadata.author} />
        <meta name="publisher" content={metadata.publisher} />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className={`${dm_sans.variable} font-dm_sans w-full min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <SpeedInsights />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
