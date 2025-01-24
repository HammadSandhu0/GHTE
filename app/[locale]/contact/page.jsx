import { headers } from "next/headers"; // Import headers
import ContactUs from "@/components/ContactUs";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import VendorSlider from "@/components/Vendor";
import Head from "next/head";
import React from "react";
import { useTranslations } from "next-intl";

const metadata = {
  title: "Contact Gulf Horizon Telecom Est - Get in Touch",
  description:
    "Reach out to Gulf Horizon Telecom Est for inquiries about power systems, security solutions, and data center projects. Contact us via phone, email, or our contact form.",
};
export async function generateMetadata() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "en";
  const locale = acceptLanguage.split(",")[0];
  const baseUrl = "https://www.gulfhorizontele.com";
  const canonicalUrl =
    locale === "en" ? `${baseUrl}/contact` : `${baseUrl}/${locale}/contact`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const page = () => {
  const t = useTranslations("Contact");
  const pageHeader = {
    title: t("pageheader.title"),
    backto: t("pageheader.home"),
    breadcrumbs: [
      {
        name: t("pageheader.about"),
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/conatctbanner.png",
  };
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.gulfhorizontele.com/contact" />
      </Head>
      <TransitionEffect />

      <PageHeader pageHeader={pageHeader} />
      <ContactUs />
      <VendorSlider />
    </>
  );
};

export default page;
