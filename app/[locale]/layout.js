// LocaleLayout.js
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import FeaturedLinks from "@/components/FeaturedLinks";

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm_sans",
});

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <Head>
        <meta
          name="google-site-verification"
          content="l09wHtR1yWh8kQM8jR3JC0ec8Mz5qs6Z88xCFirVzZA"
        />
      </Head>
      <body className={`${dm_sans.variable} font-dm_sans w-full min-h-screen`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <FeaturedLinks />
          <Footer />
        </NextIntlClientProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
