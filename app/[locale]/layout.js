import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Head from "next/head"; // Ensure correct Head import for SEO

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

export const metadata = {
  title: {
    default:
      "Power, Security & IT Solutions Around Saudi Arabia | Gulf Horizon Telecom Est",
    template: "%s - Gulf Horizon Telecom Est",
  },
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = params;

  // Ensure the locale is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Fetch messages for the current locale
  const messages = await getMessages(locale);

  // Construct alternate language links dynamically
  const baseUrl = "https://www.gulfhorizontele.com";
  const alternateLinks = routing.locales.map((lang) => (
    <link
      key={lang}
      rel="alternate"
      hrefLang={lang}
      href={`${baseUrl}/${lang}`}
    />
  ));

  return (
    <html lang={locale}>
      <Head>
        {/* SEO: Canonical URL */}
        <link rel="canonical" href={`${baseUrl}/${locale}/client-projects`} />
        {/* SEO: hreflang Tags */}
        {alternateLinks}
        {/* SEO: Title and Description */}
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        {/* SEO: Open Graph for better social sharing */}
        <meta property="og:title" content={metadata.title.default} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${baseUrl}/${locale}/client-projects`}
        />
        <meta property="og:image" content="/path-to-image.jpg" />{" "}
        {/* Adjust this path for an image */}
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:title" content={metadata.title.default} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/path-to-image.jpg" />{" "}
        {/* Adjust this path for an image */}
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
