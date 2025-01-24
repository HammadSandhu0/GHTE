"use client";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ClientProjects() {
  const { asPath, locale } = useRouter();

  // Define your base URL
  const baseUrl = "https://www.gulfhorizontele.com";

  // Construct canonical URL based on locale
  const canonicalUrl =
    locale === "en" ? `${baseUrl}${asPath}` : `${baseUrl}/${locale}${asPath}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <h1>Client Projects</h1>
    </>
  );
}
