import React from "react";
import About from "@/components/About";
import CompanyHistory from "@/components/CompanyHistory";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SeoHead";
import { getTranslations } from "next-intl/server";

const metadata = {
  title: {
    default: "About - Gulf Horizon Telecom Est",
    template: "%s",
  },
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
};

export default async function Page({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: "AboutPage" });

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
    backgroundImage: "/about/about-1.webp",
  };

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={locale}
        pageUrl="/about"
      />
      <PageHeader pageHeader={pageHeader} />
      <div className="">
        <About />
        <CompanyHistory />
        <MissionVision />
      </div>
    </>
  );
}
