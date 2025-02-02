// LocaleLayout.js
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

// export const metadata = {
//   title: {
//     default: "Power, Security & IT Solutions Around Saudi Arabia | GHTE",
//   },
//   description:
//     "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
// };

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
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
