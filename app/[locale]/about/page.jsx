"use client";
import React, { useEffect, useState } from "react";
import About from "@/components/About";
import CompanyHistory from "@/components/CompanyHistory";
import ContactUs from "@/components/ContactUs";
import CtaBox from "@/components/CtaBox";
import MissionVision from "@/components/MissionVision";
import PageHeader from "@/components/PageHeader";
import VendorSlider from "@/components/Vendor";
import TransitionEffect from "@/components/Loader";
import { useTranslations } from "next-intl";
import SEOHead from "@/components/SeoHead";

const metadata = {
  title: {
    default: "About - Gulf Horizon Telecom Est",
    template: "%s",
  },
  description:
    "Gulf Horizon Telecom Est offers top power, security, and IT solutions, from UPS and generators to cybersecurity and CCTV systems, secure smooth operations in Saudi Arabia.",
};

const page = ({ params }) => {
  const t = useTranslations("AboutPage");
  const pageHeader = {
    title: `${t("pageheader.title")}`,
    backto: `${t("pageheader.home")}`,
    breadcrumbs: [
      {
        name: `${t("pageheader.about")}`,
        link: "/",
        active: true,
      },
    ],
    backgroundImage: "/about.png",
  };

  const [resolvedParams, setResolvedParams] = useState(null);
  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params; // Unwrap the Promise
      setResolvedParams(resolved);
    };

    fetchParams();
  }, [params]);
  if (!resolvedParams) return null; // You might want to handle loading states

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={resolvedParams.locale} // Use the resolved locale
        pageUrl="/about"
      />
      <TransitionEffect />
      <PageHeader pageHeader={pageHeader} />

      <div className="">
        <About />
        <CompanyHistory />
        <MissionVision />
        <CtaBox />
        <VendorSlider />
        <ContactUs />
      </div>
    </>
  );
};

export default page;
