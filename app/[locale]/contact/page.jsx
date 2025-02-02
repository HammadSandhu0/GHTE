"use client";
import ContactUs from "@/components/ContactUs";
import TransitionEffect from "@/components/Loader";
import PageHeader from "@/components/PageHeader";
import VendorSlider from "@/components/Vendor";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Head from "next/head";
import SEOHead from "@/components/SeoHead";

const metadata = {
  title: { default: "Get in Touch - Gulf Horizon Telecom Est" },
  description:
    "Reach out to Gulf Horizon Telecom Est for inquiries about power systems, security solutions, and data center projects. Contact us via phone, email, or our contact form.",
};

const page = ({ params }) => {
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
        pageUrl="/contact" // Use the resolved locale
      />
      <TransitionEffect />

      <PageHeader pageHeader={pageHeader} />
      <ContactUs />
      <VendorSlider />
    </>
  );
};

export default page;
