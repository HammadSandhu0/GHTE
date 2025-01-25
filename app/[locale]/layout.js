import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Head from "next/head";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

const baseUrl = "https://www.gulfhorizontele.com";

export const metadata = {
  title: {
    default:
      "Power, Security & IT Solutions Around Saudi Arabia | Gulf Horizon Telecom Est",
    template: "%s - Gulf Horizon Telecom Est",
  },
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
  keywords: ["Gulfhorizontelecom", "telecomEst", "Gulf", "Horizon"],
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
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  const alternateLinks = routing.locales.map((lang) => (
    <link
      key={lang}
      rel="alternate"
      hrefLang={lang}
      href={`${baseUrl}/${lang}`}
    />
  ));
  alternateLinks.push(
    <link rel="alternate" hrefLang="x-default" href={baseUrl} key="default" />
  );

  const pageTitle = metadata.title.template.replace("%s", "Client Projects");

  return (
    <html lang={locale}>
      <Head>
        <link rel="canonical" href={`${baseUrl}/${locale}`} />
        {alternateLinks}
        <title>{pageTitle}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/${locale}`} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Gulf Horizon Telecom Est",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              description: metadata.description,
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/yourpage",
              ],
            }),
          }}
        />
      </Head>
      <body className={`${dm_sans.variable} font-dm_sans w-full min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
